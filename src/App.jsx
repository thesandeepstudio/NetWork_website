import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Auth from "./features/Auth/Auth";
import Footer from "./shared/Layout/Footer/Footer.jsx";
import LandingPage from "./features/Landing/Landing";
import FindJob from "./features/FindJob/FindJob.jsx";
import PopularCompanies from "./features/PopularCompanies/PopularCompanies.jsx";
import Candidates from "./features/Candidates/Candidates.jsx";
import CustomerSupport from "./features/CustomerSupport/CustomerSupport.jsx";
import BlogsPages from "./features/BlogsPages/BlogsPages.jsx";
import Profile from "./features/Profile/Profile";

import UnderConstruction from "./features/UnderConstruction/UnderConstruction.jsx";

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
          <Route path="/customerSupport" element={<CustomerSupport />} />
          <Route path="/blogs" element={<BlogsPages />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile/*" element={<Profile />} />

          <Route path="/underConstruction" element={<UnderConstruction />} />
        </Routes>
      </div>

      {/* Conditionally render Footer */}
      {!hideFooterOn.includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;
