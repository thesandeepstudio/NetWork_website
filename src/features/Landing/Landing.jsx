import React from "react";
import NavBar from "../../shared/Layout/Navbar/NavBar.jsx";
import SubHeader from "../../shared/Layout/SubHeader/SubHeader.jsx";

import HeroSection from "./components/HeroSection.jsx";
import PopularCategories from "./components/PopularCategories.jsx";
import FindJobPreview from "./components/FindJobPreview.jsx";
import PopularCompaniesPreview from "./components/PopularCompaniesPreview.jsx";
import TestimonialsPreview from "./components/TestimonialsPreview.jsx";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <SubHeader />
      <HeroSection />
      <PopularCategories />
      <FindJobPreview /> {/* preview 3 jobs */}
      <PopularCompaniesPreview />
      <TestimonialsPreview />
    </div>
  );
};

export default LandingPage;
