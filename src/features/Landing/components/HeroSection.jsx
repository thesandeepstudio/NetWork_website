import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-6">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Land the Perfect Job for Your Skills and Interests
          </h1>
          <p className="text-gray-700 mb-8 text-base md:text-lg">
            Connect with exciting IT, creative, and multimedia projects, and
            bring your ideas to life with modern tools and innovative
            approaches.
          </p>

          <div className="flex flex-row gap-4 w-full max-w-xs mx-auto md:mx-0">
            <Link
              to="/under_construction"
              className="flex-1 px-3 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              Post a Job
            </Link>
            <Link
              to="/findjob"
              className="flex-1 px-3 py-2 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition text-center"
            >
              Apply a Job
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 hidden md:flex justify-center md:justify-end">
          <img
            src="/icons/visual-collaboration.svg"
            alt="Visual Collaboration Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
