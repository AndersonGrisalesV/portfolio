import React, { useState, useEffect } from "react";
import Loader from "../shared/Loaders/Loader";
import NavBar from "../shared/NavBar/NavBar";
import SectionOne from "../Pages/CodeFinderComponents/SectionOne/SectionOne";
import SectionTwo from "../Pages/CodeFinderComponents/SectionTwo/SectionTwo";
import SectionThree from "../Pages/CodeFinderComponents/SectionThree/SectionThree";
import SectionFour from "../Pages/CodeFinderComponents/SectionFour/SectionFour";
import SectionFive from "../Pages/CodeFinderComponents/SectionFive/SectionFive";
import SectionSix from "../Pages/CodeFinderComponents/SectionSix/SectionSix";
import Footer from "../shared/Footer/Footer";
import styles from "./CodeFinder.module.css";

const CodeFinder = () => {
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
      className={`${styles.codeFinder__container__animation} ${
        loading && styles.loading
      }`}
    >
      {loading && (
        <div className={styles.loader__container__animation}>
          <Loader onLoaderCodeFinder />
        </div>
      )}

      {!loading && (
        <React.Fragment>
          <NavBar onCodeFinder />
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
          <Footer />
        </React.Fragment>
      )}
    </div>
  );
};

export default CodeFinder;
