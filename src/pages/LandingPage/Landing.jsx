import React from "react";
import NavBar from "../../shared/Layout/Navbar/NavBar.jsx";
import SubHeader from "../../components/Layout/SubHeader/SubHeader.jsx";
import Hero from "../../components/Layout/HeroSection/HeroSection.jsx";
import PopularCategories from "../../components/Layout/PopularCategories/PopularCategories.jsx";
import FeaturedJobs from "../../components/Layout/FeatureJobs/FeatureJobs.jsx";
import PopularCompanies from "../../components/Layout/PopularCompanies/PopularCompanies.jsx";
import Testimonials from "../../components/Layout/Testimonials/Testimonials.jsx";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <SubHeader />
      <Hero />
      <PopularCategories />
      <FeaturedJobs />
      <PopularCompanies/>    
      <Testimonials />  

    </div>
  );
};

export default LandingPage;
