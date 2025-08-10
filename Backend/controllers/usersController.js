const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { PrivyClient } = require("@privy-io/server-auth");

// Initialize Privy client
const privy = new PrivyClient(
  process.env.PRIVY_APP_ID,
  process.env.PRIVY_APP_SECRET
);

// Traditional registration
const register = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword, termsAccepted } =
      req.body;

    // Check required fields
    if (
      !fullName ||
      !email ||
      !password ||
      !confirmPassword ||
      termsAccepted === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    // Password strength validation
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser = new User({
      fullName,
      email: email.toLowerCase(),
      password: hashedPassword,
      termsAccepted,
      loginMethod: "email",
    });

    const savedUser = await newUser.save();

    // Return user data without password
    const userResponse = {
      _id: savedUser._id,
      fullName: savedUser.fullName,
      email: savedUser.email,
      isActive: savedUser.isActive,
      emailVerified: savedUser.emailVerified,
      loginMethod: savedUser.loginMethod,
      createdAt: savedUser.createdAt,
      updatedAt: savedUser.updatedAt,
    };

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: userResponse,
    });
  } catch (error) {
    // Handle validation errors
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validationErrors,
      });
    }

    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });
    }

    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Privy Google authentication
const privyGoogleAuth = async (req, res) => {
  try {
    const { accessToken } = req.body;

    if (!accessToken) {
      return res.status(400).json({
        success: false,
        message: "Access token is required",
      });
    }

    // Verify the Privy access token
    const verifiedClaims = await privy.verifyAuthToken(accessToken);

    if (!verifiedClaims.userId) {
      return res.status(401).json({
        success: false,
        message: "Invalid access token",
      });
    }

    // Get user info from Privy
    const privyUser = await privy.getUser(verifiedClaims.userId);

    if (!privyUser) {
      return res.status(404).json({
        success: false,
        message: "User not found in Privy",
      });
    }

    // Extract user data from Privy user object
    const email = privyUser.email?.address;
    const googleAccount = privyUser.google;
    const fullName =
      googleAccount?.name ||
      privyUser.email?.address?.split("@")[0] ||
      "Google User";

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email not found in Privy user data",
      });
    }

    // Check if user exists in our database
    let user = await User.findOne({
      $or: [
        { privyUserId: verifiedClaims.userId },
        { email: email.toLowerCase() },
      ],
    });

    if (!user) {
      // Create new user from Privy Google data
      user = new User({
        fullName: fullName,
        email: email.toLowerCase(),
        privyUserId: verifiedClaims.userId,
        googleId: googleAccount?.subject,
        loginMethod: "google",
        termsAccepted: true,
        emailVerified: privyUser.email?.verified || true,
        profilePicture: googleAccount?.picture,
      });

      await user.save();
    } else if (!user.privyUserId) {
      // Link existing user to Privy
      user.privyUserId = verifiedClaims.userId;
      user.googleId = googleAccount?.subject;
      user.loginMethod = "google";
      user.profilePicture = googleAccount?.picture || user.profilePicture;
      await user.save();
    }

    const userResponse = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      isActive: user.isActive,
      emailVerified: user.emailVerified,
      loginMethod: user.loginMethod,
      profilePicture: user.profilePicture,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    res.status(200).json({
      success: true,
      message: "Google authentication successful",
      user: userResponse,
      privyData: {
        userId: verifiedClaims.userId,
        sessionId: verifiedClaims.sessionId,
      },
    });
  } catch (error) {
    console.error("Privy Google auth error:", error);

    if (error.message?.includes("Invalid token")) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired access token",
      });
    }

    res.status(500).json({
      success: false,
      message: "Google authentication failed",
    });
  }
};

// Traditional login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Check if user registered with Google
    if (user.loginMethod === "google" && !user.password) {
      return res.status(400).json({
        success: false,
        message:
          "This account was created with Google. Please use Google Sign-In.",
      });
    }

    if (!user.isActive) {
      return res.status(403).json({
        success: false,
        message: "Account is deactivated",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const userResponse = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      isActive: user.isActive,
      emailVerified: user.emailVerified,
      loginMethod: user.loginMethod,
      profilePicture: user.profilePicture,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: userResponse,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { register, privyGoogleAuth, login };
