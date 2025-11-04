import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


const Footer = () => {
  const [, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) setCurrentUser(user);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Section */}
        <div className="footer-section">
          <h2 className="footer-title">NetWork</h2>
          <p className="footer-text">
            Connecting talent with opportunities in technology worldwide.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/under_construction">About</Link></li>
            <li><Link to="/under_construction">Contact</Link></li>
            <li><Link to="/under_construction">Pricing</Link></li>
            <li><Link to="/under_construction">Blog</Link></li>
          </ul>
        </div>

        {/* Candidates Link Section*/}
        <div className="footer-section">
          <h3 className="footer-subtitle">Candidate</h3>
          <ul className="footer-links">
            <li><Link to="/findjob">Browse Job</Link></li>
            <li><Link to="/candidates">Browse Employers</Link></li>
            <li><Link to="/profile">Candidate Dashboard</Link></li>
            <li><Link to="/under_construction">Saved Jobs</Link></li>
          </ul>
        </div>

        {/* Candidates Link Section*/}
        <div className="footer-section">
          <h3 className="footer-subtitle">Candidate</h3>
          <ul className="footer-links">
            <li><Link to="/findjob">Browse Job</Link></li>
            <li><Link to="/candidates">Browse Employers</Link></li>
            <li><Link to="/profile">Candidate Dashboard</Link></li>
            <li><Link to="/under_construction">Saved Jobs</Link></li>
          </ul>
        </div>

        {/* Support Link Section*/}
        <div className="footer-section">
          <h3 className="footer-subtitle">Support</h3>
          <ul className="footer-links">
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/under_construction">Privacy & Policy</Link></li>
            <li><Link to="/under_construction">Terms & Conditions</Link></li>
          </ul>
        </div>
        

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} NetWork. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;