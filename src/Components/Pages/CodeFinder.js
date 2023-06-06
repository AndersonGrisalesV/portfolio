import React from "react";
import NavBar from "./.././shared/NavBar/NavBar";
import SectionOne from "../Pages/CodeFinderComponents/SectionOne/SectionOne";
import SectionTwo from "../Pages/CodeFinderComponents/SectionTwo/SectionTwo";
import SectionThree from "../Pages/CodeFinderComponents/SectionThree/SectionThree";
import SectionFour from "../Pages/CodeFinderComponents/SectionFour/SectionFour";
import SectionFive from "../Pages/CodeFinderComponents/SectionFive/SectionFive";
import SectionSix from "../Pages/CodeFinderComponents/SectionSix/SectionSix";

import Footer from "./.././shared/Footer/Footer";

const CodeFinder = () => {
  return (
    <React.Fragment>
      <NavBar onCodeFinder={true} />

      <SectionOne />

      <SectionTwo />

      <SectionThree />

      <SectionFour />

      <SectionFive />

      <SectionSix />

      <Footer />
    </React.Fragment>
  );
};

export default CodeFinder;
