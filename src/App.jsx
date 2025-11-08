import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Auth from "./features/Auth/Auth";
import Footer from "./components/Layout/Footer/Footer";
import LandingPage from "./features/Landing/Landing";
import FindJob from "./features/FindJob/FindJob.jsx";
import PopularCompanies from "./pages/Companies/Companies";
import Candidates from "./pages/Candidates/Candidates";
import Support from "./pages/Support/Support";
import Blogs from "./pages/Blogs/Blogs";
import Profile from "./features/Profile/Profile";

import UnderConstruction from "./components/Layout/UnderConstruction/UnderConstruction";

const App = () => {
  const location = useLocation();

  // Add any routes where you want to hide the footer
  const hideFooterOn = ["/profile", "/auth"];

  return (
    <>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/findJob" element={<FindJob />} />
          <Route path="/companies" element={<PopularCompanies />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/support" element={<Support />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/underConstruction" element={<UnderConstruction />} />
        </Routes>
      </div>

      {/* Conditionally render Footer */}
      {!hideFooterOn.includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;
