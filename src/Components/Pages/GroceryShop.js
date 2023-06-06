import React from "react";
import NavBar from "./.././shared/NavBar/NavBar";
import SectionOne from "../Pages/GroceryShopComponents/SectionOne/SectionOne";
import SectionTwo from "../Pages/GroceryShopComponents/SectionTwo/SectionTwo";
import SectionThree from "../Pages/GroceryShopComponents/SectionThree/SectionThree";
import SectionFour from "../Pages/GroceryShopComponents/SectionFour/SectionFour";
import SectionFive from "../Pages/GroceryShopComponents/SectionFive/SectionFive";
import SectionSix from "../Pages/GroceryShopComponents/SectionSix/SectionSix";

import Footer from "./.././shared/Footer/Footer";

const GroceryShop = () => {
  return (
    <React.Fragment>
      <NavBar onGroceryShop={true} />

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

export default GroceryShop;
