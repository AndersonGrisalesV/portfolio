import React, { useState, useEffect } from "react";
import Loader from "../shared/Loaders/Loader";
import NavBar from "../shared/NavBar/NavBar";
import SectionOne from "../Pages/HealthyMindsetComponents/SectionOne/SectionOne";
import SectionTwo from "../Pages/HealthyMindsetComponents/SectionTwo/SectionTwo";
import SectionThree from "../Pages/HealthyMindsetComponents/SectionThree/SectionThree";
import SectionFour from "../Pages/HealthyMindsetComponents/SectionFour/SectionFour";
import SectionFive from "../Pages/HealthyMindsetComponents/SectionFive/SectionFive";
import SectionSix from "../Pages/HealthyMindsetComponents/SectionSix/SectionSix";
import SectionSeven from "../Pages/HealthyMindsetComponents/SectionSeven/SectionSeven";
import Footer from "../shared/Footer/Footer";
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
    <div
      className={`${styles.healthyMindset__container__animation} ${
        loading && styles.loading
      }`}
    >
      {loading && (
        <div className={styles.loader__container__animation}>
          <Loader onLoaderHealthyMindset />
        </div>
      )}

      {!loading && (
        <React.Fragment>
          <NavBar onHealthyMindset />
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
          <SectionSeven />
          <Footer onHealthyMindset />
        </React.Fragment>
      )}
    </div>
  );
};

export default HealthyMindset;
