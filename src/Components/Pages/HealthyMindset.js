import React from "react";
import NavBar from "./.././shared/NavBar/NavBar";
import SectionOne from "../Pages/HealthyMindsetComponents/SectionOne/SectionOne";
import SectionTwo from "../Pages/HealthyMindsetComponents/SectionTwo/SectionTwo";
import SectionThree from "../Pages/HealthyMindsetComponents/SectionThree/SectionThree";
// import SectionFour from "../Pages/HealthyMindsetComponents/SectionFour/SectionFour";
// import SectionFive from "../Pages/HealthyMindsetComponents/SectionFive/SectionFive";
// import SectionSix from "../Pages/HealthyMindsetComponents/SectionSix/SectionSix";
// import SectionSeven from "../Pages/HealthyMindsetComponents/SectionSeven/SectionSeven";

import Footer from "./.././shared/Footer/Footer";

const HealthyMindset = () => {
  return (
    <React.Fragment>
      <NavBar onHealthyMindset={true} />

      <SectionOne />

      <SectionTwo />

      <SectionThree />
      {/*
      <SectionFour /> 

      <SectionFive /> 

      <SectionSix /> 

      <SectionSeven /> 
      
      
      
      */}

      <Footer onHealthyMindset={true} />
    </React.Fragment>
  );
};

export default HealthyMindset;
