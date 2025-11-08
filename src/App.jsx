import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./features/Auth/Auth";
import Footer from "./components/Layout/Footer/Footer";
import LandingPage from "./pages/LandingPage/Landing";
import FindJob from "./pages/FindJob/FindJob";
import PopularCompanies from "./pages/Companies/Companies";
import Candidates from "./pages/Candidates/Candidates";
import Support from "./pages/Support/Support";
import Blogs from "./pages/Blogs/Blogs";
import UnderConstruction from "./components/Layout/UnderConstruction/UnderConstruction";

const App = () => {
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

          <Route path="/underConstruction" element={<UnderConstruction />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
