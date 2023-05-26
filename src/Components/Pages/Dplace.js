import React from "react";
import NavBar from "./.././shared/NavBar/NavBar";
import SectionOne from "../Pages/DplaceComponents/SectionOne/SectionOne";
import SectionTwo from "../Pages/DplaceComponents/SectionTwo/SectionTwo";
import SectionThree from "../Pages/DplaceComponents/SectionThree/SectionThree";
import SectionFour from "../Pages/DplaceComponents/SectionFour/SectionFour";

import Footer from "./.././shared/Footer/Footer";

const Dplace = () => {
  return (
    <React.Fragment>
      <NavBar onDplace={true} />

      <SectionOne />

      <SectionTwo />

      <SectionThree />

      {/* <SectionFour /> */}

      <Footer />
    </React.Fragment>
  );
};

export default Dplace;
