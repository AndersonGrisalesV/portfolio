import React, { useEffect, useState } from "react";

import Loader from "../shared/Loaders/Loader";
import NavBar from "./.././shared/NavBar/NavBar";
import SectionOne from "../Pages/HealthyMindsetComponents/SectionOne/SectionOne";
import SectionTwo from "../Pages/HealthyMindsetComponents/SectionTwo/SectionTwo";
import SectionThree from "../Pages/HealthyMindsetComponents/SectionThree/SectionThree";
import SectionFour from "../Pages/HealthyMindsetComponents/SectionFour/SectionFour";
import SectionFive from "../Pages/HealthyMindsetComponents/SectionFive/SectionFive";
import SectionSix from "../Pages/HealthyMindsetComponents/SectionSix/SectionSix";
import SectionSeven from "../Pages/HealthyMindsetComponents/SectionSeven/SectionSeven";

import Footer from "./.././shared/Footer/Footer";

import styles from "./HealthyMindset.module.css";

const HealthyMindset = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false);
    }, 2800);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <div className={styles.loader__container__animation}>
          <Loader onLoaderHealthyMindset={true} />
        </div>
      ) : (
        <div className={styles.healthyMindset__container__animation}>
          <NavBar onHealthyMindset={true} />

          <SectionOne />
          <SectionTwo />

          <SectionThree />

          <SectionFour />

          <SectionFive />

          <SectionSix />

          <SectionSeven />

          <Footer onHealthyMindset={true} />
        </div>
      )}
    </React.Fragment>
  );
};

export default HealthyMindset;
