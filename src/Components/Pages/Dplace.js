import React, { useState, useEffect } from "react";
import Loader from "../shared/Loaders/Loader";
import NavBar from "../shared/NavBar/NavBar";
import SectionOne from "../Pages/DplaceComponents/SectionOne/SectionOne";
import SectionTwo from "../Pages/DplaceComponents/SectionTwo/SectionTwo";
import SectionThree from "../Pages/DplaceComponents/SectionThree/SectionThree";
import SectionFour from "../Pages/DplaceComponents/SectionFour/SectionFour";
import Footer from "../shared/Footer/Footer";
import styles from "./Dplace.module.css";

const Dplace = () => {
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
      className={`${styles.dplace__container__animation} ${
        loading && styles.loading
      }`}
    >
      {loading && (
        <div className={styles.loader__container__animation}>
          <Loader onLoaderDplace />
        </div>
      )}

      {!loading && (
        <React.Fragment>
          <NavBar onDplace />
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <Footer onDplace />
        </React.Fragment>
      )}
    </div>
  );
};

export default Dplace;
