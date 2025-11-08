import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../shared/Layout/Navbar/NavBar";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple Validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");

    // ✅ Simulate login (store in localStorage)
    const user = {
      email,
      avatar: "/images/Hacker.png",
      rememberMe,
    };

    localStorage.setItem("user", JSON.stringify(user)); // ✅ same key as NavBar

    alert("Logged in Successfully!");

    // ✅ Redirect to homepage (or wherever you like)
    navigate("/");

    // ✅ Optional: Refresh to immediately update NavBar state
    window.location.reload();
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
          <p className="text-center mb-6">Enter Your Login Credentials</p>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

            {/* Remember me and forget Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-bold-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                Remember Me
              </label>

              <Link
                to="/support"
                className="text-blue-600 hover:underline font-medium"
              >
                Forget Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Log In
            </button>

            {/* ✅ Sign Up Link */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Don’t have an account?{" "}
              <Link
                to="/auth?tab=signup"
                className="text-blue-600 hover:underline font-medium"
              >
                Create one
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
