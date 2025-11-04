import React from "react";
import NavBar from "../../components/Layout/NavBar/NavBar.jsx";
import SubHeader from "../../components/Layout/SubHeader/SubHeader.jsx";
import Candidates from "../../components/Layout/Candidates/Candidates.jsx";

const FindJob = () => {
  return (
    <div>
      <NavBar />
      <SubHeader />
      <Candidates /> {/* Only candidates section */}
    </div>
  );
};

export default FindJob;
