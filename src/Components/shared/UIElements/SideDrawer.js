import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, animateScroll as scroll } from "react-scroll";

import Button from "./Button";
import { CSSTransition } from "react-transition-group";

import styles from "./SideDrawer.module.css";

const handleNavBarLinksClicks = (nameToScrollHome, setActiveLink, onClose) => {
  const scrollToTop = (sectionName) => {
    scroll.scrollToTop({
      duration: 10,
      smooth: "easeOutQuart",
    });

    const delay = 650;
    const timeoutId = setTimeout(() => {
      setActiveLink(sectionName);
    }, delay);

    return () => clearTimeout(timeoutId);
  };

  scrollToTop(nameToScrollHome);
  onClose();
};

const SideDrawer = ({ show, onClick, onClose }) => {
  const [activeLink, setActiveLink] = useState("home");

  const content = (
    <div className={`${show === false ? styles.container : ""}`}>
      <CSSTransition in={show} timeout={200} classNames="right-to-left">
        <aside className={styles.side__drawer} onClick={onClick}>
          <ol className={styles.navbar__links__responsive}>
            <li className={styles.navbar__item__responsive}>
              <Link
                className={`${styles.links} ${
                  activeLink === "home" ? styles.active__link : ""
                }`}
                to="home"
                smooth={true}
                duration={10}
                offset={-100}
                onClick={() =>
                  handleNavBarLinksClicks("home", setActiveLink, onClose)
                }
              >
                Home
              </Link>
            </li>
            <li className={styles.navbar__item__responsive}>
              <Link
                className={`${styles.links} ${
                  activeLink === "expertise" ? styles.active__link : ""
                }`}
                to="expertise"
                smooth={true}
                duration={10}
                onClick={() =>
                  handleNavBarLinksClicks("expertise", setActiveLink, onClose)
                }
              >
                Expertise
              </Link>
            </li>
            <li className={styles.navbar__item__responsive}>
              <Link
                className={`${styles.links} ${
                  activeLink === "work" ? styles.active__link : ""
                }`}
                to="work"
                smooth={true}
                duration={10}
                onClick={() =>
                  handleNavBarLinksClicks("work", setActiveLink, onClose)
                }
              >
                Work
              </Link>
            </li>
            <li className={styles.navbar__item__responsive}>
              <Link
                className={`${styles.links} ${
                  activeLink === "about" ? styles.active__link : ""
                }`}
                to="about"
                smooth={true}
                duration={10}
                onClick={() =>
                  handleNavBarLinksClicks("about", setActiveLink, onClose)
                }
              >
                About
              </Link>
            </li>
            <li className={styles.navbar__item__responsive}>
              <Link
                className={`${styles.links} ${
                  activeLink === "contact" ? styles.active__link : ""
                }`}
                to="contact"
                smooth={true}
                duration={10}
                onClick={() =>
                  handleNavBarLinksClicks("contact", setActiveLink, onClose)
                }
              >
                Contact
              </Link>
            </li>
            <div className={styles.container__button__sideDrawer}>
              <Button onText="Github" onGithub={true} />
            </div>
          </ol>
        </aside>
      </CSSTransition>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
