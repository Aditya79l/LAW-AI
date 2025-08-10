const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  // Existing fields
  fullName: {
    type: String,
    required: [true, "Full name is required"],
    trim: true,
    maxlength: [100, "Full name cannot exceed 100 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email",
    ],
  },
  password: {
    type: String,
    required: function () {
      // Password only required for traditional registration
      return this.loginMethod === "email" && !this.privyUserId;
    },
    minlength: [8, "Password must be at least 8 characters long"],
  },
  termsAccepted: {
    type: Boolean,
    required: [
      true,
      "You must agree to the Terms of Service and Privacy Policy",
    ],
    validate: {
      validator: function (value) {
        return value === true;
      },
      message: "Terms of Service and Privacy Policy must be accepted",
    },
  },

  // New Privy-specific fields
  privyUserId: {
    type: String,
    unique: true,
    sparse: true, // Allows null values while maintaining uniqueness
  },
  loginMethod: {
    type: String,
    enum: ["email", "google", "oauth"],
    default: "email",
  },
  googleId: {
    type: String,
    sparse: true,
  },
  profilePicture: {
    type: String,
  },

  // Existing fields
  isActive: {
    type: Boolean,
    default: true,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
