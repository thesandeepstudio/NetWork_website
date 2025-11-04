import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";

import "./CustomerSupport.css"

const CustomerSupport = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! Your message has been submitted.`);
    // Reset form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  

  return (
    <>
      <NavBar />
      <div className="support-page">
        <h1 className="support-title">Customer Support</h1>
        <p className="support-description">
          Need help? Fill out the form below and our support team will get back
          to you shortly.
        </p>

        <form className="support-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <ul>
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
