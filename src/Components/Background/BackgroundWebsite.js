import React from "react";
import styles from "./BackgroundWebsite.module.css";
import Background from "./BackgroundWebsite.svg";

const BackgroundWebsite = () => {
  return (
    <img
      className={styles.background__website}
      src={Background}
      alt="Background website"
    />
  );
};

export default BackgroundWebsite;
