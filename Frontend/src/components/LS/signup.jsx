/* SignUpPage.jsx */
import React, { useState, useEffect } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Chrome,
  ArrowLeft,
  Sparkles,
  User,
} from "lucide-react";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate signup process
    setTimeout(() => setIsLoading(false), 2000);
  };

  // Navigation handler for back button
  const handleGoHome = () => {
    window.location.hash = "#home";
    // Or if using React Router: navigate("/")
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-800 
                    relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400/30 rounded-full animate-bounce delay-100"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-indigo-400/40 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-purple-300/20 rounded-full animate-ping delay-500"></div>
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-indigo-300/35 rounded-full animate-bounce delay-700"></div>

      {/* Back button - positioned at top left */}
      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={handleGoHome}
          className="text-slate-300 hover:text-white p-3 rounded-xl bg-white/10 
                     backdrop-blur-sm border border-white/20 hover:bg-white/20
                     transition-all duration-300 hover:scale-110 group"
          aria-label="Go back to home"
        >
          <ArrowLeft size={24} className="group-hover:animate-pulse" />
        </button>
      </div>

      {/* Main container - split layout */}
      <div className="min-h-screen flex">
        {/* Left side - Welcome message */}
        <div className="flex-1 flex flex-col justify-center items-center p-8 lg:p-16">
          <div
            className={`text-center max-w-lg transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Celebration icon */}
            <div className="mb-8">
              <div
                className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-400 to-pink-500 
                             rounded-full flex items-center justify-center shadow-2xl 
                             animate-bounce hover:animate-pulse transition-all duration-300
                             hover:scale-110 hover:rotate-12 relative"
              >
                <Sparkles size={60} className="text-white" />

                {/* Celebration particles */}
                <div className="absolute -top-2 -left-2 w-3 h-3 bg-purple-300 rounded-full animate-ping"></div>
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-pink-300 rounded-full animate-bounce delay-300"></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-pink-400 rounded-full animate-ping delay-700"></div>
              </div>
            </div>

            {/* Welcome text */}
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Join{" "}
              <span
                className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent 
                             animate-pulse block"
              >
                LAW AI!
              </span>
            </h1>

            <p className="text-slate-300 text-xl mb-8 leading-relaxed">
              Start your legal journey today! ✨
            </p>

            <p className="text-slate-400 text-lg leading-relaxed">
              Create your account and unlock the power of{" "}
              <span className="text-purple-400 font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI-powered legal assistance
              </span>{" "}
              at your fingertips.
            </p>

            {/* Feature highlights */}
            <div className="mt-12 space-y-4">
              <div className="flex items-center justify-start space-x-4 text-slate-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-lg">Free to get started</span>
              </div>
              <div className="flex items-center justify-start space-x-4 text-slate-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                <span className="text-lg">Expert legal guidance</span>
              </div>
              <div className="flex items-center justify-start space-x-4 text-slate-300">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-400"></div>
                <span className="text-lg">Instant answers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - SignUp card */}
        <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
          <div
            className={`w-full max-w-md transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            {/* Glassmorphism container */}
            <div
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl 
                            shadow-2xl p-8 relative overflow-hidden"
            >
              {/* Gradient overlay for the box */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* User icon and sign up message */}
                <div className="text-center mb-8">
                  <div className="mb-6">
                    <div
                      className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 
                                   rounded-2xl flex items-center justify-center shadow-2xl 
                                   hover:animate-pulse transition-all duration-300
                                   hover:scale-110 hover:rotate-6"
                    >
                      <User size={32} className="text-white" />
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
                    Create Account
                  </h2>

                  <p className="text-slate-300 text-sm">
                    Fill in your details to get started
                  </p>
                </div>

                {/* SignUp form */}
                <form onSubmit={handleSignUp} className="space-y-4">
                  {/* Full Name input */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User
                        size={20}
                        className="text-slate-400 group-focus-within:text-purple-400 transition-colors duration-300"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      className="w-full h-12 pl-12 pr-4 bg-white/10 backdrop-blur-sm border border-white/20 
                               rounded-xl text-white placeholder-slate-400 
                               focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                               transition-all duration-300 hover:bg-white/15 focus:bg-white/15
                               focus:scale-105 hover:scale-102"
                      required
                    />
                    <div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                                   opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10 blur-sm"
                    ></div>
                  </div>

                  {/* Email input */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail
                        size={20}
                        className="text-slate-400 group-focus-within:text-purple-400 transition-colors duration-300"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full h-12 pl-12 pr-4 bg-white/10 backdrop-blur-sm border border-white/20 
                               rounded-xl text-white placeholder-slate-400 
                               focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                               transition-all duration-300 hover:bg-white/15 focus:bg-white/15
                               focus:scale-105 hover:scale-102"
                      required
                    />
                    <div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                                   opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10 blur-sm"
                    ></div>
                  </div>

                  {/* Password input */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock
                        size={20}
                        className="text-slate-400 group-focus-within:text-purple-400 transition-colors duration-300"
                      />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      className="w-full h-12 pl-12 pr-12 bg-white/10 backdrop-blur-sm border border-white/20 
                               rounded-xl text-white placeholder-slate-400 
                               focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                               transition-all duration-300 hover:bg-white/15 focus:bg-white/15
                               focus:scale-105 hover:scale-102"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 
                               hover:text-purple-400 transition-colors duration-300"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                    <div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                                   opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10 blur-sm"
                    ></div>
                  </div>

                  {/* Confirm Password input */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock
                        size={20}
                        className="text-slate-400 group-focus-within:text-purple-400 transition-colors duration-300"
                      />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        handleInputChange("confirmPassword", e.target.value)
                      }
                      className="w-full h-12 pl-12 pr-12 bg-white/10 backdrop-blur-sm border border-white/20 
                               rounded-xl text-white placeholder-slate-400 
                               focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                               transition-all duration-300 hover:bg-white/15 focus:bg-white/15
                               focus:scale-105 hover:scale-102"
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 
                               hover:text-purple-400 transition-colors duration-300"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                    <div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                                   opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10 blur-sm"
                    ></div>
                  </div>

                  {/* Terms and conditions */}
                  <div className="flex items-start space-x-3 pt-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 w-4 h-4 text-purple-600 bg-white/10 border-white/20 rounded 
                               focus:ring-purple-500 focus:ring-2"
                      required
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-slate-300 leading-relaxed"
                    >
                      I agree to the{" "}
                      <button
                        type="button"
                        className="text-purple-400 hover:text-purple-300 underline"
                      >
                        Terms of Service
                      </button>{" "}
                      and{" "}
                      <button
                        type="button"
                        className="text-purple-400 hover:text-purple-300 underline"
                      >
                        Privacy Policy
                      </button>
                    </label>
                  </div>

                  {/* SignUp button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 
                             hover:from-purple-700 hover:to-pink-700 text-white font-bold text-base 
                             rounded-xl transition-all duration-300 hover:scale-105 
                             hover:shadow-2xl hover:shadow-purple-500/25 focus:outline-none 
                             focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50
                             transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed
                             relative overflow-hidden group mt-6"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Creating account...</span>
                      </div>
                    ) : (
                      <>
                        <span className="relative z-10">Create Account</span>
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                       translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                        ></div>
                      </>
                    )}
                  </button>

                  {/* Divider */}
                  <div className="flex items-center my-6">
                    <div className="flex-1 h-px bg-white/20"></div>
                    <span className="px-4 text-slate-400 text-sm">or</span>
                    <div className="flex-1 h-px bg-white/20"></div>
                  </div>

                  {/* Google sign up */}
                  <button
                    type="button"
                    className="w-full h-12 bg-white/10 backdrop-blur-sm border border-white/20 
                             hover:bg-white/20 text-white font-medium rounded-xl 
                             transition-all duration-300 hover:scale-105 hover:shadow-xl
                             focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-20
                             transform active:scale-95 flex items-center justify-center space-x-3
                             group"
                  >
                    <Chrome
                      size={18}
                      className="text-slate-300 group-hover:text-white transition-colors duration-300"
                    />
                    <span>Sign up with Google</span>
                  </button>

                  {/* Sign in link */}
                  <div className="text-center pt-4">
                    <a href="#login">
                      <button
                        type="button"
                        className="text-slate-300 hover:text-white font-medium text-sm
                                 transition-all duration-300 hover:scale-105 group"
                      >
                        Already have an account?{" "}
                        <span className="text-purple-400 hover:text-purple-300 group-hover:underline">
                          Sign In
                        </span>
                      </button>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
