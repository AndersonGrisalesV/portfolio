import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import Logo from "./LogoHover.svg";

const NavBar = () => {
  const [visibleNavBar, setVisibleNavBar] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setVisibleNavBar(true);
      } else {
        setVisibleNavBar(false);
      }
      prevScrollPos = currentScrollPos;
    };
  }, []);

  return (
    <div
      className={`${styles.nav__bar} ${
        visibleNavBar ? "" : styles.nav__bar__hidden
      }`}
      style={{ transitionDelay: visibleNavBar ? "0ms" : "300ms" }}
    >
      <div className={styles.links}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" />
        </div>
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
        <div className={styles.menu}>
          <img src={Logo} alt="Logo" className="" />
        </div>
        <div className={styles.button}>
          <button className={styles.navbar__button}>Don't</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
