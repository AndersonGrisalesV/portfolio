import React from "react";

import styles from "./Footer.module.css";

const Footer = ({ onDplace }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${
        onDplace
          ? styles.section__dplace__footer__margin
          : styles.section__footer
      }`}
    >
      <div className={styles.container__footer}>
        <p>Anderson</p>
        <p>&copy; {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
