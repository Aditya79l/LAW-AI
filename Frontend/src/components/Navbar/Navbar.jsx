import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (hash) => {
    window.location.hash = hash; // replace with router logic if needed
  };

  const handleLogoClick = () => handleNavigation("#home");

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* row */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            onClick={handleLogoClick}
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center shadow-md">
              <div className="w-6 h-6 bg-white rounded-full opacity-90" />
            </div>
            <span className="text-2xl font-bold text-gray-800 tracking-tight">
              law<span className="text-blue-600">ai</span>
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-4">
            {["#features", "#pricing", "#login", "#signup"].map((link) => (
              <button
                key={link}
                onClick={() => handleNavigation(link)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium
                           transition-all duration-200 hover:shadow-lg hover:scale-105 transform
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                {link.slice(1)[0].toUpperCase() + link.slice(2)}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2 bg-gray-50 rounded-lg mt-2 shadow-inner">
              {["#features", "#pricing", "#login", "#signup"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    handleNavigation(link);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg
                             font-medium transition-all duration-200 hover:shadow-lg text-center
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  {link.slice(1)[0].toUpperCase() + link.slice(2)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
