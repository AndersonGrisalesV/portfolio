import React, { useEffect, useState } from "react";

import Loader from "../shared/Loaders/Loader";
import NavBar from "./.././shared/NavBar/NavBar";
import SectionOne from "../Pages/CodeFinderComponents/SectionOne/SectionOne";
import SectionTwo from "../Pages/CodeFinderComponents/SectionTwo/SectionTwo";
import SectionThree from "../Pages/CodeFinderComponents/SectionThree/SectionThree";
import SectionFour from "../Pages/CodeFinderComponents/SectionFour/SectionFour";
import SectionFive from "../Pages/CodeFinderComponents/SectionFive/SectionFive";
import SectionSix from "../Pages/CodeFinderComponents/SectionSix/SectionSix";

import Footer from "./.././shared/Footer/Footer";

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
    <React.Fragment>
      {loading ? (
        <div className={styles.loader__container__animation}>
          <Loader onLoaderCodeFinder={true} />
        </div>
      ) : (
        <div className={styles.codeFinder__container__animation}>
          <NavBar onCodeFinder={true} />

          <SectionOne />

          <SectionTwo />

          <SectionThree />

          <SectionFour />

          <SectionFive />

          <SectionSix />

          <Footer />
        </div>
      )}
    </React.Fragment>
  );
};
export default CodeFinder;
