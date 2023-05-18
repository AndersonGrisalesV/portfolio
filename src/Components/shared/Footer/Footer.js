import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.section__footer}>
      <div className={styles.container__footer}>
        <p>Anderson</p>
        <p>&copy; {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
