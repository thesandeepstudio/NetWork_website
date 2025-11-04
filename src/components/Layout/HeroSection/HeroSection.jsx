// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Land the Perfect Job for Your Skills and Interests</h1>
          <p>
            Connect with exciting IT, creative, and multimedia projects, and
            bring your ideas to life with modern tools and innovative
            approaches.
          </p>
          <div className="hero-buttons">
            <Link
              to="/under_construction"
              className="hero-action-btn post-job-btn"
            >
              Post a Job
            </Link>
            <Link to="/findjob" className="hero-action-btn apply-job-btn">
              Apply a Job
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="/icons/visual-collaboration.svg"
            alt="Visual Collaboration Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
