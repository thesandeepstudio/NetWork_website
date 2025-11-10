import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const [, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) setCurrentUser(user);
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300 mt-12 px-4 py-12">
      <div className="max-w-[1420px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* About Section */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-white font-bold text-xl">NetWork</h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-left">
            Connecting talent with opportunities in technology worldwide.
          </p>
          <div className="flex gap-3 mt-4 sm:justify-start">
            <Link
              to="/"
              className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="/"
              className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              <FaTwitter />
            </Link>
            <Link
              to="/"
              className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              to="/"
              className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-white font-semibold text-lg">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link
                to="/underconstruction"
                className="hover:text-white transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/underconstruction"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/underconstruction"
                className="hover:text-white transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/underconstruction"
                className="hover:text-white transition-colors"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Candidate */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-white font-semibold text-lg">Candidate</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link
                to="/findjob"
                className="hover:text-white transition-colors"
              >
                Browse Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/candidates"
                className="hover:text-white transition-colors"
              >
                Browse Employers
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="hover:text-white transition-colors"
              >
                Candidate Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/underconstruction"
                className="hover:text-white transition-colors"
              >
                Saved Jobs
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-white font-semibold text-lg">Support</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link
                to="/customersupport"
                className="hover:text-white transition-colors"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/underconstruction"
                className="hover:text-white transition-colors"
              >
                Privacy & Policy
              </Link>
            </li>
            <li>
              <Link
                to="/underconstruction"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources / Extra Section */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-white font-semibold text-lg">Resources</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link
                to="/underconstruction"
                className="hover:text-white transition-colors"
              >
                Documentation
              </Link>
            </li>
            <li>
              <Link
                to="/underconstruction"
                className="hover:text-white transition-colors"
              >
                Tutorials
              </Link>
            </li>
            <li>
              <Link
                to="/underconstruction"
                className="hover:text-white transition-colors"
              >
                Community
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} NetWork. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
