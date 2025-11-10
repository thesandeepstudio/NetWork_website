import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../shared/Layout/Navbar/NavBar";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [userType, setUserType] = useState("jobseeker");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [companyName, setCompanyName] = useState(""); // Employer field
  const [position, setPosition] = useState(""); // Employer field
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (userType === "jobseeker") {
      if (
        !firstName ||
        !lastName ||
        !email ||
        !mobile ||
        !password ||
        !confirmPassword
      ) {
        setError("Please fill in all fields for Job Seeker");
        return;
      }
    } else if (userType === "employer") {
      if (
        !companyName ||
        !position ||
        !email ||
        !mobile ||
        !password ||
        !confirmPassword
      ) {
        setError("Please fill in all fields for Employer");
        return;
      }
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    // Save user info to localStorage (simulate backend)
    const savedUser = {
      type: userType,
      firstName,
      lastName,
      companyName,
      position,
      email,
      mobile,
      password,
    };
    localStorage.setItem("user", JSON.stringify(savedUser));

    // Redirect to login page
    navigate("/auth?tab=login");
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-2">
            Create an Account
          </h2>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* User Type Selector */}
            <div className="flex justify-center gap-4 mb-7">
              <label className="flex items-center text-lg gap-2">
                <input
                  type="radio"
                  name="userType"
                  value="jobseeker"
                  checked={userType === "jobseeker"}
                  onChange={() => setUserType("jobseeker")}
                  className="text-blue-600 focus:ring-blue-500"
                />
                Job Seeker
              </label>
              <label className="flex items-center text-lg gap-2">
                <input
                  type="radio"
                  name="userType"
                  value="employer"
                  checked={userType === "employer"}
                  onChange={() => setUserType("employer")}
                  className="text-blue-600 focus:ring-blue-500"
                />
                Employer
              </label>
            </div>

            {/* Conditional Fields */}
            {userType === "jobseeker" && (
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            )}

            {userType === "employer" && (
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Your Position"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            )}

            {/* Common Fields */}
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Create Account
            </button>

            {/* Terms Notice */}
            <p className="text-xs text-gray-600 text-center mt-2">
              By clicking "Create Account", you agree to the{" "}
              <Link to="/terms" className="text-blue-600 hover:underline">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>{" "}
              of Network.
            </p>

            {/* Already have an account */}
            <p className="text-sm text-center mt-2">
              Already have an account?{" "}
              <Link
                to="/auth?tab=login"
                className="text-blue-600 hover:underline"
              >
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
