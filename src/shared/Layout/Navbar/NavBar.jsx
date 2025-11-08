import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();
  const location = useLocation(); // get current path
  const [currentUser] = useState(null);

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

  const links = [
    { path: "/", name: "Home" },
    { path: "/findJob", name: "Find Jobs" },
    { path: "/companies", name: "Companies" },
    { path: "/candidates", name: "Candidates" },
    { path: "/support", name: "Support" },
    { path: "/blogs", name: "Blogs" },
  ];

  return (
    <nav
      ref={navRef}
      className="w-full sticky top-0 z-50 bg-white shadow-md font-sans"
    >
      <div className="max-w-[1500px] mx-auto flex justify-between items-center py-4 px-8">
        {/* logo */}
        <div className="text-2xl font-bold text-black">
          <Link to="/">NetWork</Link>
        </div>

        {/* hamburger for mobile */}
        <div
          className="flex flex-col gap-1.5 cursor-pointer lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-black rounded"></span>
          <span className="w-6 h-0.5 bg-black rounded"></span>
          <span className="w-6 h-0.5 bg-black rounded"></span>
        </div>

        {/* links */}
        <ul
          className={`
    flex flex-col gap-4 absolute top-0 right-0 h-full w-64 bg-white p-16 transition-transform transform
    ${isOpen ? "translate-x-0" : "translate-x-full"}
    lg:flex lg:flex-row lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:p-0 lg:translate-x-0
  `}
        >
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`
          block px-4 py-2 rounded-lg font-medium transition-all duration-300
          ${
            location.pathname === link.path
              ? "text-blue-600 font-semibold bg-blue-100"
              : "text-black hover:text-blue-600"
          }
        `}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex gap-2 items-center">
          {!currentUser ? (
            <>
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
            </>
          ) : (
            <Link to="/profile">
              <img
                src="/images/Hacker.png"
                alt="Profile Avatar"
                className="w-10 h-10 rounded-full border-2 border-blue-600 object-cover hover:scale-110 transition-transform"
              />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
