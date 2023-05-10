import React from "react";
import NavBar from "../NavBar/NavBar";
import SectionOne from "../SectionOne/SectionOne";
import SectionTwo from "../SectionTwo/SectionTwo";
import SectionThree from "../SectionThree/SectionThree";
import SectionFour from "../SectionFour/SectionFour";

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />

      <SectionOne />

      <SectionTwo />

      <SectionThree />

      <SectionFour />
    </React.Fragment>
  );
};

export default Home;
