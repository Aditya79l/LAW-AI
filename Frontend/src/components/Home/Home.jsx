import React, { useState, useEffect } from "react";
import { Scale } from "lucide-react";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      id="home"
      className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-20"
    >
      {/* Top tagline */}
      <div
        className={`text-gray-400 text-sm md:text-base mb-8 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        The leading AI legal assistant for everyone
      </div>

      {/* Justice scale icon with animation */}
      <div
        className={`mb-8 transition-all duration-1000 delay-500 ${
          isVisible
            ? "opacity-100 scale-100 rotate-0"
            : "opacity-0 scale-50 rotate-12"
        }`}
      >
        <Scale
          size={64}
          className="text-blue-500 animate-pulse hover:animate-bounce transition-all duration-300"
        />
      </div>

      {/* Main headline with animated text */}
      <div className="text-center max-w-5xl mx-auto mb-12">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight text-white transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          The law isn't{" "}
          <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent animate-pulse">
            scary
          </span>{" "}
          — not when
          <br />
          you've got{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
            AI
          </span>{" "}
          on your side.
        </h1>
      </div>

      {/* Subtitle */}
      <div
        className={`text-gray-300 text-lg md:text-xl text-center max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-900 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        Know the law. Protect your rights. Stay informed.
      </div>

      {/* CTA Button */}
      <div
        className={`transition-all duration-1000 delay-1100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-12 py-4 rounded-xl 
                           transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25
                           focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50
                           transform active:scale-95"
        >
          Get Started
        </button>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-75"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-blue-600 rounded-full animate-ping opacity-50"></div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
    </div>
  );
}
