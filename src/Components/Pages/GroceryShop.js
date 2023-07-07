import React, { useState, useEffect } from "react";
import Loader from "../shared/Loaders/Loader";
import NavBar from "../shared/NavBar/NavBar";
import SectionOne from "../Pages/GroceryShopComponents/SectionOne/SectionOne";
import SectionTwo from "../Pages/GroceryShopComponents/SectionTwo/SectionTwo";
import SectionThree from "../Pages/GroceryShopComponents/SectionThree/SectionThree";
import SectionFour from "../Pages/GroceryShopComponents/SectionFour/SectionFour";
import SectionFive from "../Pages/GroceryShopComponents/SectionFive/SectionFive";
import SectionSix from "../Pages/GroceryShopComponents/SectionSix/SectionSix";
import Footer from "../shared/Footer/Footer";
import styles from "./GroceryShop.module.css";

const GroceryShop = () => {
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
      className={`${styles.groceryShop__container__animation} ${
        loading && styles.loading
      }`}
    >
      {loading && (
        <div className={styles.loader__container__animation}>
          <Loader onLoaderGroceryShop />
        </div>
      )}

      {!loading && (
        <React.Fragment>
          <NavBar onGroceryShop />
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

export default GroceryShop;
