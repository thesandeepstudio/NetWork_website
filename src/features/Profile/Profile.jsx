import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardContent from "./components/DashboardContent";

const Profile = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Content area */}
        <div className="p-6 flex-1 overflow-auto">
          <Routes>
            {/* Redirect /profile to /profile/dashboard */}
            <Route path="/" element={<Navigate to="dashboard" replace />} />

            {/* Dashboard content routes */}
            <Route
              path="dashboard"
              element={<DashboardContent title="Edit Profile" />}
            />
            <Route
              path="language"
              element={<DashboardContent title="Language" />}
            />
            <Route
              path="notifications"
              element={<DashboardContent title="Notifications" />}
            />
            <Route
              path="payments"
              element={<DashboardContent title="Payments" />}
            />
            <Route path="taxes" element={<DashboardContent title="Taxes" />} />
            <Route
              path="transactions"
              element={<DashboardContent title="Transactions" />}
            />
            <Route
              path="password"
              element={<DashboardContent title="Password" />}
            />
            <Route
              path="access"
              element={<DashboardContent title="Access" />}
            />
            <Route
              path="session"
              element={<DashboardContent title="Session" />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Profile;
