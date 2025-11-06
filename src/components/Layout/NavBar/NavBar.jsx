import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

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
    <nav className="navbar" ref={navRef}>
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">NetWork</Link>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? "active" : ""}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sub-buttons">
          {!currentUser ? (
            <>
              <Link to="/auth?tab=login" className="signin-btn">
                Log In
              </Link>
              <Link to="/auth?tab=signup" className="signup-btn">
                Sign Up
              </Link>
            </>
          ) : (
            <Link to="/profile">
              <img
                src="/images/Hacker.png"
                alt="Profile Avatar"
                className="profile-avatar"
              />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
