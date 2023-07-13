import React, { useState, useEffect } from "react";
import Loader from "../shared/Loaders/Loader";
import NavBar from "../shared/NavBar/NavBar";
import SectionOne from "../Pages/HomeComponents/SectionOne/SectionOne";
import SectionTwo from "../Pages/HomeComponents/SectionTwo/SectionTwo";
import SectionThree from "../Pages/HomeComponents/SectionThree/SectionThree";
import SectionFour from "../Pages/HomeComponents/SectionFour/SectionFour";
import SectionFive from "../Pages/HomeComponents/SectionFive/SectionFive";
import Footer from "../shared/Footer/Footer";
import styles from "./Home.module.css";

const Home = () => {
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
    <div>
      {loading && (
        <div>
          <Loader />
        </div>
      )}

      {!loading && (
        <React.Fragment>
          <NavBar />
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <Footer />
        </React.Fragment>
      )}
    </div>
  );
};

export default Home;
