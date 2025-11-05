import React from "react";
import { useNavigate } from "react-router-dom";

const UnderConstruction = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    
    <div
      style={{
        height: "10vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
        textAlign: "center",
        color: "#333",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>
        🚧 Page Under Construction 🚧
      </h1>
      <p style={{ fontSize: "1rem", maxWidth: "500px", marginBottom: "20px" }}>
        We’re working hard to bring this page to life. Please check back soon!
      </p>
      <button
        onClick={handleGoHome}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default UnderConstruction;
