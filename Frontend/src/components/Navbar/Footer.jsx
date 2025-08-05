import React from "react";
import { Instagram, Linkedin, Facebook, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Dark animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 
                      animate-gradient-shift bg-[length:400%_400%]"
      ></div>

      {/* Content overlay */}
      <div className="relative z-10 flex justify-center">
        <div className="flex max-w-[960px] flex-1 flex-col">
          <div className="flex flex-col gap-6 px-5 py-16 text-center">
            {/* Navigation Links */}
            <div
              className="flex flex-wrap items-center justify-center gap-8 
                           md:justify-around lg:gap-12"
            >
              {[
                "Homepage",
                "About Us",
                "Contact",
                "Privacy Policy",
                "Terms of Service",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-gray-200 text-base font-medium leading-normal 
                           min-w-40 transition-all duration-300 hover:scale-105 
                           hover:drop-shadow-lg relative group"
                >
                  {link}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-300 
                                 group-hover:w-full transition-all duration-300"
                  ></span>
                </a>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: MessageSquare, href: "#", label: "Dev.to" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Facebook, href: "#", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-gray-200 transition-all duration-300 
                           hover:scale-110 hover:drop-shadow-lg p-2 rounded-full
                           hover:bg-gray-700/30 backdrop-blur-sm"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p
              className="text-gray-500 text-base font-normal leading-normal 
                         drop-shadow-sm"
            >
              © 2024 Legal AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div
        className="absolute top-10 left-10 w-2 h-2 bg-gray-600/30 rounded-full 
                      animate-bounce delay-100"
      ></div>
      <div
        className="absolute top-20 right-20 w-1 h-1 bg-gray-500/40 rounded-full 
                      animate-pulse delay-300"
      ></div>
      <div
        className="absolute bottom-16 left-16 w-1.5 h-1.5 bg-gray-600/20 rounded-full 
                      animate-ping delay-500"
      ></div>
      <div
        className="absolute bottom-10 right-10 w-2 h-2 bg-gray-500/35 rounded-full 
                      animate-bounce delay-700"
      ></div>
    </footer>
  );
}
