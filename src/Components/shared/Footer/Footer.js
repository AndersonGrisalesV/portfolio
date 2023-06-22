import React from "react";

import styles from "./Footer.module.css";
import IndividualAnimation from "../ScrollAnimation/IndividualAnimation";

const Footer = ({ onDplace = false, onHealthyMindset = false }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${
        onDplace
          ? styles.section__dplace__footer__margin
          : onHealthyMindset
          ? styles.section__healthy__mindset__footer__margin
          : styles.section__footer
      }`}
    >
      <IndividualAnimation onDelay={0.8}>
        <div className={styles.container__footer}>
          <p>Anderson</p>
          <p>&copy; {currentYear}</p>
        </div>
      </IndividualAnimation>
    </footer>
  );
};

export default Footer;
