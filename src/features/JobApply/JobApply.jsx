import React, { useState } from "react";
import NavBar from "../../shared/Layout/Navbar/NavBar";

const JobApply = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    coverLetter: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application Submitted:", formData);
    alert("Application submitted successfully!");
    // Backend logic will handle the actual submission
  };

  return (
    <>
      <NavBar />
      <div className="max-w-5xl mx-auto py-12 px-6">
        {/* Job Details */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h1 className="text-2xl font-bold mb-2">Frontend Developer</h1>
          <p className="text-gray-600 mb-4">Company: NetWork Solutions</p>
          <p className="text-gray-700 mb-4">
            We are looking for a talented frontend developer with experience in React and TailwindCSS to build responsive web applications.
          </p>
          <p className="text-gray-700">
            <strong>Budget:</strong> $500 - $1000
          </p>
          <p className="text-gray-700">
            <strong>Deadline:</strong> 30th November 2025
          </p>
        </div>

        {/* Application Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Apply for this Job</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Cover Letter
              </label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows={4}
                placeholder="Write a short cover letter..."
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Resume / CV
              </label>
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                className="mt-2 block w-full text-gray-700"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-6 py-2 text-white font-semibold hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default JobApply;
