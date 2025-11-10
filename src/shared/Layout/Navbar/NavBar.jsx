import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(null);
  const [isCheckingUser, setIsCheckingUser] = useState(true);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Check login status from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setIsCheckingUser(false);
  }, []);

  const links = [
    { path: "/", name: "Home" },
    { path: "/findJob", name: "Find Jobs" },
    { path: "/companies", name: "Companies" },
    { path: "/candidates", name: "Candidates" },
    { path: "customerSupport", name: "Support" },
    { path: "/blogs", name: "Blogs" },
  ];

  return (
    <nav
      ref={navRef}
      className="w-full sticky top-0 z-50 bg-white shadow-md font-sans"
    >
      <div className="max-w-[1500px] mx-auto flex items-center py-4 px-4 lg:px-8 justify-between">
        {/* Hamburger (Left) */}
        <div
          className="flex flex-col gap-1.5 cursor-pointer lg:hidden mr-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-black rounded"></span>
          <span className="w-6 h-0.5 bg-black rounded"></span>
          <span className="w-6 h-0.5 bg-black rounded"></span>
        </div>

        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          <Link to="/">NetWork</Link>
        </div>

        {/* Center links for desktop */}
        <ul className="hidden lg:flex gap-10 mx-auto">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-black font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: login/profile */}
        <div className="flex items-center gap-3">
          {!isCheckingUser && currentUser ? (
            <Link to="/profile">
              <img
                src="/images/Hacker.png"
                alt="Profile Avatar"
                className="w-10 h-10 rounded-full border-2 border-blue-600 object-cover hover:scale-110 transition-transform"
              />
            </Link>
          ) : (
            <>
              {/* ✅ Small Login Button for Mobile */}
              <Link
                to="/auth?tab=login"
                className="px-3 py-1 text-sm font-semibold border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors duration-200 lg:hidden"
              >
                Log In
              </Link>

              {/* Desktop Buttons */}
              <div className="hidden lg:flex gap-2">
                <Link
                  to="/auth?tab=login"
                  className="px-4 py-1.5 border border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  Log In
                </Link>
                <Link
                  to="/auth?tab=signup"
                  className="px-4 py-1.5 bg-blue-600 text-white font-semibold rounded border border-blue-600 hover:bg-blue-700 transition"
                >
                  Sign Up
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Mobile slide-out menu */}
        <ul
          className={`flex flex-col justify-between fixed top-0 left-0 h-full w-64 bg-white p-7 pt-20 transition-transform transform overflow-auto z-40 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <div>
            {/* ✖️ Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black"
            >
              &times;
            </button>

            {/* Navigation links */}
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-blue-600 font-semibold bg-blue-100"
                      : "text-black hover:text-blue-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </div>

          {/* ✅ Mobile Login & Signup Buttons */}
          {!isCheckingUser && !currentUser && (
            <div className="flex flex-col gap-3 mt-auto pb-6">
              <Link
                to="/auth?tab=login"
                className="block px-4 py-2 rounded-lg font-medium text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200 text-center"
                onClick={() => setIsOpen(false)}
              >
                Log In
              </Link>
              <Link
                to="/auth?tab=signup"
                className="block px-4 py-2 rounded-lg font-medium text-white bg-blue-600 border border-blue-600 hover:bg-blue-700 transition text-center"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
