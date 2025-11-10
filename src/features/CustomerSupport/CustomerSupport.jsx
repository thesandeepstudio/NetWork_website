import React, { useState } from "react";
import NavBar from "../../shared/Layout/Navbar/NavBar";

const CustomerSupport = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <>
      <NavBar />

      <div className="max-w-3xl mx-auto my-12 px-4 text-center font-sans">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Customer Support
        </h1>
        <p className="text-gray-500 text-base md:text-lg mb-10 leading-relaxed">
          Need help? Fill out the form below and our support team will get back
          to you shortly.
        </p>

        {/* Form */}
        <form className="flex flex-col gap-5 mb-12" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-xl text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-xl text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-xl text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-xl text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none min-h-[140px] resize-y"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold text-lg py-3 rounded-xl hover:bg-blue-600 hover:-translate-y-1 transition-all duration-200"
          >
            Send Message
          </button>
        </form>

        {/* FAQ Section */}
        <div className="text-left bg-gray-50 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <ul className="list-disc pl-6 text-gray-500 space-y-2">
            <li>How do I reset my password?</li>
            <li>How do I update my profile information?</li>
            <li>How can I apply for a job or post a candidate?</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CustomerSupport;
