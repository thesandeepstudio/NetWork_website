import React from "react";
import NavBar from "../../shared/Layout/Navbar/NavBar.jsx";
import SubHeader from "../../shared/Layout/SubHeader/SubHeader.jsx";
import Candidates from "../../components/Layout/Candidates/Candidates.jsx";
import Footer from "../../components/Layout/Footer/Footer.jsx";

const FindJob = () => {
  return (
    <div>
      <NavBar />
      <SubHeader />
      <Candidates />
    </div>
  );
};

export default FindJob;
