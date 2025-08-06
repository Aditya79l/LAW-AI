/* LoginPage.jsx */
import React, { useState, useEffect } from "react";
import { Eye, EyeOff, Mail, Lock, Chrome, ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => setIsLoading(false), 2000);
  };

  // Navigation handler for back button
  const handleGoHome = () => {
    window.location.hash = "#home";
    // Or if using React Router: navigate("/")
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 
                    flex flex-col items-center justify-center p-4 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
      </div>

      {/* Back button - positioned at top left */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
        <button
          onClick={handleGoHome}
          className="text-slate-300 hover:text-white p-2 sm:p-3 rounded-xl bg-white/10 
                     backdrop-blur-sm border border-white/20 hover:bg-white/20
                     transition-all duration-300 hover:scale-110 group"
          aria-label="Go back to home"
        >
          <ArrowLeft
            size={20}
            className="sm:w-6 sm:h-6 group-hover:animate-pulse"
          />
        </button>
      </div>

      {/* Welcome Back message */}
      <div
        className={`text-center mb-8 sm:mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 sm:mb-4 tracking-tight leading-tight">
          Welcome{" "}
          <span
            className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent 
                           animate-pulse"
          >
            Back!
          </span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base">
          We're excited to see you again! 🎉
        </p>
      </div>

      {/* Login card - centered and responsive */}
      <div
        className={`w-full max-w-sm sm:max-w-md transition-all duration-1000 delay-500 ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95"
        }`}
      >
        {/* Glassmorphism container */}
        <div
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl 
                        shadow-2xl p-6 sm:p-8 relative overflow-hidden"
        >
          {/* Gradient overlay for the box */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>

          {/* Content */}
          <div className="relative z-10">
            {/* Lock icon and sign in message */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="mb-4 sm:mb-6">
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 
                               rounded-2xl flex items-center justify-center shadow-2xl 
                               hover:animate-pulse transition-all duration-300
                               hover:scale-110 hover:rotate-6"
                >
                  <Lock size={28} className="sm:w-8 sm:h-8 text-white" />
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                Sign In
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm">
                Enter your credentials to access your account
              </p>
            </div>

            {/* Login form */}
            <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
              {/* Email input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                  <Mail
                    size={18}
                    className="sm:w-5 sm:h-5 text-slate-400 group-focus-within:text-blue-400 transition-colors duration-300"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full h-11 sm:h-12 pl-10 sm:pl-12 pr-3 sm:pr-4 bg-white/10 backdrop-blur-sm border border-white/20 
                           rounded-xl text-white placeholder-slate-400 text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           transition-all duration-300 hover:bg-white/15 focus:bg-white/15
                           focus:scale-105 hover:scale-102"
                  required
                />
                <div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                               opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10 blur-sm"
                ></div>
              </div>

              {/* Password input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                  <Lock
                    size={18}
                    className="sm:w-5 sm:h-5 text-slate-400 group-focus-within:text-blue-400 transition-colors duration-300"
                  />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="w-full h-11 sm:h-12 pl-10 sm:pl-12 pr-10 sm:pr-12 bg-white/10 backdrop-blur-sm border border-white/20 
                           rounded-xl text-white placeholder-slate-400 text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           transition-all duration-300 hover:bg-white/15 focus:bg-white/15
                           focus:scale-105 hover:scale-102"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center text-slate-400 
                           hover:text-blue-400 transition-colors duration-300"
                >
                  {showPassword ? (
                    <Eye size={18} className="sm:w-5 sm:h-5" />
                  ) : (
                    <EyeOff size={18} className="sm:w-5 sm:h-5" />
                  )}
                </button>
                <div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                               opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10 blur-sm"
                ></div>
              </div>

              {/* Forgot password */}
              <div className="text-right">
                <button
                  type="button"
                  className="text-slate-300 hover:text-blue-400 text-xs sm:text-sm font-medium 
                           transition-colors duration-300 hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              {/* Login button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 
                         hover:from-blue-700 hover:to-purple-700 text-white font-bold text-sm sm:text-base 
                         rounded-xl transition-all duration-300 hover:scale-105 
                         hover:shadow-2xl hover:shadow-blue-500/25 focus:outline-none 
                         focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50
                         transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed
                         relative overflow-hidden group"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  <>
                    <span className="relative z-10">Log in</span>
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                   translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                    ></div>
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="flex items-center my-4 sm:my-6">
                <div className="flex-1 h-px bg-white/20"></div>
                <span className="px-3 sm:px-4 text-slate-400 text-xs sm:text-sm">
                  or
                </span>
                <div className="flex-1 h-px bg-white/20"></div>
              </div>

              {/* Google sign in */}
              <button
                type="button"
                className="w-full h-11 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 
                         hover:bg-white/20 text-white font-medium rounded-xl text-sm sm:text-base
                         transition-all duration-300 hover:scale-105 hover:shadow-xl
                         focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-20
                         transform active:scale-95 flex items-center justify-center space-x-2 sm:space-x-3
                         group"
              >
                <Chrome
                  size={16}
                  className="sm:w-5 sm:h-5 text-slate-300 group-hover:text-white transition-colors duration-300"
                />
                <span>Continue with Google</span>
              </button>

              {/* Sign up link */}
              <div className="text-center pt-3 sm:pt-4">
                <a href="#signup">
                  <button
                    type="button"
                    className="text-slate-300 hover:text-white font-medium text-xs sm:text-sm
                             transition-all duration-300 hover:scale-105 group"
                  >
                    New user?{" "}
                    <span className="text-blue-400 hover:text-blue-300 group-hover:underline">
                      Sign Up
                    </span>
                  </button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
