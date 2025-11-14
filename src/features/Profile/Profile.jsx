import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import EditProfile from "./components/content/EditProfile";

const Profile = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Content Section */}
        <div className="p-6 flex-1 overflow-auto">
          <Routes>
            {/* Default redirect */}
            <Route path="/" element={<Navigate to="editProfile" replace />} />

            {/* Profile sub-routes */}
            <Route path="editProfile" element={<EditProfile />} />
            {/* Later you can add:
                <Route path="language" element={<Language />} /> etc.
            */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Profile;
