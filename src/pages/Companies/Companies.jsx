import React from "react";
import NavBar from "../../shared/Layout/Navbar/NavBar.jsx";

import SubHeader from "../../components/Layout/SubHeader/SubHeader";
import PopularCompaniesComponent from "../../components/Layout/PopularCompanies/PopularCompanies"; // Import the component
import Footer from "../../components/Layout/Footer/Footer.jsx";

const PopularCompaniesPage = () => {
  return (
    <div>
      <NavBar />
      <SubHeader />
      <PopularCompaniesComponent /> {/* Render the popular companies section */}
      <Footer />
    </div>
  );
};

export default PopularCompaniesPage;
