import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Auth from "./features/Auth/Auth";
import Footer from "./shared/Layout/Footer/Footer.jsx";
import LandingPage from "./features/Landing/Landing";

import FindJob from "./features/FindJob/FindJob.jsx";
import JobPost from "./features/JobPost/JobPost.jsx";

import JobApply from "./features/JobApply/JobApply.jsx";
import PopularCompanies from "./features/PopularCompanies/PopularCompanies.jsx";
import Candidates from "./features/Candidates/Candidates.jsx";
import CustomerSupport from "./features/CustomerSupport/CustomerSupport.jsx";
import BlogsPages from "./features/BlogsPages/BlogsPages.jsx";
import Profile from "./features/Profile/Profile";
import UnderConstruction from "./features/UnderConstruction/UnderConstruction.jsx";

const App = () => {
  const location = useLocation();

  // Routes where footer should be hidden
  const hideFooterOn = ["/profile", "/auth"];

  // Check if current path starts with any of those routes
  const shouldHideFooter = hideFooterOn.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/JobPost" element={<JobPost />} />
          <Route path="/FindJob" element={<FindJob />} />
          <Route path="/JobApply" element={<JobApply />} />
          <Route path="/companies" element={<PopularCompanies />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/customerSupport" element={<CustomerSupport />} />
          <Route path="/blogs" element={<BlogsPages />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/underConstruction" element={<UnderConstruction />} />
        </Routes>
      </div>

      {/* Conditionally render Footer */}
      {!shouldHideFooter && <Footer />}
    </>
  );
};

export default App;
