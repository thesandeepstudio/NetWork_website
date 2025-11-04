import React from "react";
import NavBar from "../../components/Layout/NavBar/NavBar";
import SubHeader from "../../components/Layout/SubHeader/SubHeader";
import PopularCompaniesComponent from "../../components/Layout/PopularCompanies/PopularCompanies"; // Import the component

const PopularCompaniesPage = () => {
  return (
    <div>
      <NavBar />
      <SubHeader />
      <PopularCompaniesComponent /> {/* Render the popular companies section */}
    </div>
  );
};

export default PopularCompaniesPage;
