import React from "react";
import { Link } from "react-router-dom";
import { FiBell, FiInfo, FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 gap-4">
        {/* Left side: Search Bar */}
        <div className="hidden md:flex items-center border border-gray-300 rounded px-3 py-1 w-64">
          <FiSearch className="text-gray-500 mr-2" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 outline-none text-gray-700 text-sm"
          />
        </div>

        {/* Right side: Info, Notification, Profile */}
        <div className="flex items-center gap-4">
          {/* Info Icon */}
          <button className="hidden md:flex items-center text-gray-500 hover:text-blue-600 transition-colors duration-200">
            <FiInfo size={20} />
          </button>

          {/* Notification Icon */}
          <button className="hidden md:flex items-center text-gray-500 hover:text-blue-600 transition-colors duration-200 relative">
            <FiBell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile Avatar */}
          <Link to="/profile">
            <img
              src="/images/Hacker.png"
              alt="Profile Avatar"
              className="w-10 h-10 rounded-full border-2 border-blue-600 object-cover hover:scale-110 transition-transform"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
