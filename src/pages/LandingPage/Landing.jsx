import React from "react";
import NavBar from "../../components/Layout/NavBar/NavBar.jsx";
import SubHeader from "../../components/Layout/SubHeader/SubHeader.jsx";
import Hero from "../../components/Layout/HeroSection/HeroSection.jsx";
import PopularCategories from "../../components/Layout/PopularCategories/PopularCategories.jsx";
import FeaturedJobs from "../../components/Layout/FeatureJobs/FeatureJobs.jsx";
import PopularCompanies from "../../components/Layout/PopularCompanies/PopularCompanies.jsx";
import Testimonials from "../../components/Layout/Testimonials/Testimonials.jsx";
import Footer from "../../components/Layout/Footer/Footer.jsx";

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
      <Footer/>

    </div>
  );
};

export default LandingPage;
