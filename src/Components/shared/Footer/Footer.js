import React from "react";

import IndividualAnimation from "../ScrollAnimation/IndividualAnimation";

import styles from "./Footer.module.css";

const Footer = ({ onDplace = false, onHealthyMindset = false }) => {
  const currentYear = new Date().getFullYear();
  let footerClass = styles.section__footer;

  if (onDplace) {
    footerClass = styles.section__dplace__footer__margin;
  } else if (onHealthyMindset) {
    footerClass = styles.section__healthy__mindset__footer__margin;
  }

  return (
    <footer className={footerClass}>
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
