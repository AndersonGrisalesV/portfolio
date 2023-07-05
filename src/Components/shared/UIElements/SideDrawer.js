import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Button from "./Button";
import styles from "./SideDrawer.module.css";

import { Link, animateScroll as scroll } from "react-scroll";

const SideDrawer = (props) => {
  const [activeLink, setActiveLink] = useState("home");

  const handleNavBarLinksClicks = (nameToScroolHome) => {
    const scrollToTop = (sectionName) => {
      scroll.scrollToTop({
        duration: 10, // Adjust the duration as desired
        smooth: "easeOutQuart", // Adjust the easing function as desired
      });
      // Simulate a delay of 500 milliseconds
      const delay = 650;

      // Set the active link after the delay
      const timeoutId = setTimeout(() => {
        setActiveLink(sectionName);
      }, delay);

      // Clean up the timeout when the component unmounts or when the active link changes
      return () => clearTimeout(timeoutId);
    };

    scrollToTop(nameToScroolHome);
    props.onClose();
  };

  const content = (
    <div className={`${props.show === false ? styles.container : ""}`}>
      <CSSTransition
        in={props.show}
        timeout={200}
        classNames="right-to-left"
        // mountOnEnter
        // unmountOnExit
      >
        <aside className={styles.side__drawer} onClick={props.onClick}>
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
                onClick={() => {
                  handleNavBarLinksClicks("home");
                }}
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
                onClick={() => {
                  handleNavBarLinksClicks("expertise");
                }}
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
                onClick={() => {
                  handleNavBarLinksClicks("work");
                }}
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
                onClick={() => {
                  handleNavBarLinksClicks("about");
                }}
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
                onClick={() => {
                  handleNavBarLinksClicks("contact");
                }}
              >
                Contact
              </Link>
            </li>
            <div className={styles.container__button__sideDrawer}>
              <Button onText={"Github"} onGithub={true} />
            </div>
          </ol>
        </aside>
      </CSSTransition>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
