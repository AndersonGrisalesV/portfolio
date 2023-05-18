import React from "react";
import NavBar from "./.././shared/NavBar/NavBar";
import SectionOne from "../Pages/HomeComponents/SectionOne/SectionOne";
import SectionTwo from "../Pages/HomeComponents/SectionTwo/SectionTwo";
import SectionThree from "../Pages/HomeComponents/SectionThree/SectionThree";
import SectionFour from "../Pages/HomeComponents/SectionFour/SectionFour";
import SectionFive from "../Pages/HomeComponents/SectionFive/SectionFive";
import Footer from "./.././shared/Footer/Footer";

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
