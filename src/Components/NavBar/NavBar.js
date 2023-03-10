import React from "react";
import styles from "./NavBar.module.css";
import Logo from "./Logo.svg";

const NavBar = () => {
  return (
    <div className={styles.nav__bar}>
      <img src={Logo} alt="Logo" className="" />
      <ul className={styles.navbar__links}>
        <li className={styles.navbar__item}>
          <a href="#home">Home</a>
        </li>
        <li className={styles.navbar__item}>
          <a href="#expertise">Expertise</a>
        </li>
        <li className={styles.navbar__item}>
          <a href="#work">Work</a>
        </li>
        <li className={styles.navbar__item}>
          <a href="#about">About</a>
        </li>
        <li className={styles.navbar__item}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button className={styles.navbar__button}>Don't</button>
    </div>
  );
};

export default NavBar;
