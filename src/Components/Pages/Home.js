import React from "react";
import NavBar from "../NavBar/NavBar";
import SectionOne from "../SectionOne/SectionOne";
import SectionTwo from "../SectionTwo/SectionTwo";
import SectionThree from "../SectionThree/SectionThree";
import SectionFour from "../SectionFour/SectionFour";
import SectionFive from "../SectionFive/SectionFive";
import Footer from "../Footer/Footer";
import { useState } from "react";

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />

      <SectionOne />

      <SectionTwo />

      <SectionThree />

      <SectionFour />

      <SectionFive />

      <Footer />
    </React.Fragment>
  );
};

export default Home;
