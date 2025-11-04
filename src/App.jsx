import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Layout/Footer/Footer";
import LandingPage from "./pages/LandingPage/Landing";
import FindJob from "./pages/FindJob/FindJob";
import PopularCompanies from "./pages/Companies/Companies";
import Candidates from "./pages/Candidates/Candidates";
import CustomerSupport from "./components/Layout/CustomerSupport/CustomerSupport";
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
          <Route path="/customerSupport" element={<CustomerSupport />} />
          <Route path="/underConstruction" element={<UnderConstruction />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
