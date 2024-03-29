import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "./Logos/Logo.svg";
import LogoDplace from "./Logos/LogoDplace.svg";
import LogoHealthyMindset from "./Logos/LogoHealthyMindset.svg";
import LogoCodeFinder from "./Logos/LogoCodeFinder.svg";
import LogoGroceryShop from "./Logos/LogoGroceryShop.svg";

import Backdrop from "../UIElements/Backdrop";
import SideDrawer from "../UIElements/SideDrawer";
import Hamburger from "hamburger-react";

import Button from "../UIElements/Button";
import { motion } from "framer-motion";
import styles from "./NavBar.module.css";

const NavBar = ({
  onDplace = false,
  onHealthyMindset = false,
  onCodeFinder = false,
  onGroceryShop = false,
  onNotFound = false,
}) => {
  const [state, setState] = useState({
    visibleNavBar: true,
    openHamburguerMenu: false,
    animationHamburguerMenu: false,
    activeLink: "home",
    delayShowHamburguerMenu: false,
  });
  const navigate = useNavigate();

  const handleNavBarLinksClicks = useCallback(
    (nameToScrollHome) => {
      const scrollToTop = (sectionName) => {
        scroll.scrollToTop({
          duration: 10, // Adjust the duration as desired
          smooth: "easeOutQuart", // Adjust the easing function as desired
        });
        // Simulate a delay of 500 milliseconds
        const delay = 650;

        // Set the active link after the delay
        const timeoutId = setTimeout(() => {
          setState((prevState) => ({
            ...prevState,
            visibleNavBar: sectionName,
          }));
        }, delay);

        // Clean up the timeout when the component unmounts or when the active link changes
        return () => clearTimeout(timeoutId);
      };

      if (
        onDplace ||
        onHealthyMindset ||
        onCodeFinder ||
        onGroceryShop ||
        onNotFound
      ) {
        navigate("/home");
        setTimeout(() => {
          scrollToTop(nameToScrollHome);
        }, 200);
      } else {
        scrollToTop(nameToScrollHome);
      }
    },
    [
      onDplace,
      onHealthyMindset,
      onCodeFinder,
      onGroceryShop,
      onNotFound,
      navigate,
    ]
  );

  const closeDrawerHandler = () => {
    setState((prevState) => ({
      ...prevState,
      openHamburguerMenu: false,
    }));
  };

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      let currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        setState((prevState) => ({
          ...prevState,
          visibleNavBar: true,
          animationHamburguerMenu: true,
        }));
      } else {
        setState((prevState) => ({
          ...prevState,
          visibleNavBar: false,
        }));
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (state.visibleNavBar) {
      setState((prevState) => ({
        ...prevState,
        delayShowHamburguerMenu: true,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        delayShowHamburguerMenu: false,
      }));
    }
  }, [state.visibleNavBar]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "expertise", "work", "about", "contact"];
      const scrollPosition = window.scrollY + 550; // Adjust the offset as needed

      // Find the section currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setState((prevState) => ({
              ...prevState,
              activeLink: section,
            }));

            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 960px)");
    setIsMobile(mq.matches);
    const handleResize = () => setIsMobile(mq.matches);
    mq.addEventListener("change", handleResize);

    setState((prevState) => ({
      ...prevState,
      openHamburguerMenu: false,
    }));
    if (!isMobile) {
      mq.removeEventListener("change", handleResize);
    }
  }, [isMobile]);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      delay: 1,
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const handleToggle = () => {
    setState((prevState) => ({
      ...prevState,
      openHamburguerMenu: !prevState.openHamburguerMenu,
    }));
  };

  return (
    <React.Fragment>
      {state.openHamburguerMenu && (
        <Backdrop onClick={closeDrawerHandler} onResume={false} />
      )}
      <SideDrawer
        show={state.openHamburguerMenu}
        onClick={closeDrawerHandler}
        onClose={closeDrawerHandler}
      />
      {/* //create here a portal and execute when user clicks to go to home to be able to load the page and have the loader as a placeholder */}
      <div
        className={`${styles.nav__bar} ${
          state.visibleNavBar ? "" : styles.nav__bar__hidden
        }`}
        style={{ transitionDelay: state.visibleNavBar ? "0ms" : "300ms" }}
      >
        <div
          className={`${
            onDplace || onHealthyMindset || onCodeFinder || onGroceryShop
              ? styles.container__projects__logos
              : styles.container__logo
          }`}
        >
          <div className={styles.logo}>
            {state.visibleNavBar && (
              <motion.div
                whileTap={{
                  scale: 0.88,
                  x: 0,
                  transition: {
                    duration: 0.06,
                  },
                }}
              >
                <motion.img
                  initial={{
                    scale: !state.animationHamburguerMenu ? 0 : 0.9,
                  }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 5,
                    duration: !state.animationHamburguerMenu ? 2 : 0.01,
                    delay: !state.animationHamburguerMenu ? 0.17 : 0.01,
                  }}
                  className={styles.image__logo}
                  src={`${
                    onDplace
                      ? LogoDplace
                      : onHealthyMindset
                      ? LogoHealthyMindset
                      : onCodeFinder
                      ? LogoCodeFinder
                      : onGroceryShop
                      ? LogoGroceryShop
                      : Logo
                  }`}
                  loading="lazy"
                  alt="Logo"
                  onClick={() => {
                    handleNavBarLinksClicks("home");
                  }}
                />
              </motion.div>
            )}
          </div>

          {!onDplace &&
          !onHealthyMindset &&
          !onCodeFinder &&
          !onGroceryShop &&
          !onNotFound ? (
            <React.Fragment>
              <motion.ul
                variants={container}
                initial="hidden"
                animate="visible"
                className={styles.navbar__links}
              >
                <motion.li
                  key={0}
                  variants={item}
                  className={`${styles.navbar__item} `}
                  whileHover={{
                    scale: 1.08,
                    x: 0,
                    transition: { duration: 0.05 },
                  }}
                >
                  <Link
                    className={`${styles.links} ${
                      onDplace || onHealthyMindset
                        ? ""
                        : state.activeLink === "home"
                        ? styles.active__link
                        : ""
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
                </motion.li>

                <motion.li
                  key={1}
                  className={styles.navbar__item}
                  variants={item}
                  whileHover={{
                    scale: 1.08,
                    x: 0,
                    transition: { duration: 0.05 },
                  }}
                >
                  <Link
                    className={`${styles.links} ${
                      onDplace
                        ? styles.active__link__dplace
                        : state.activeLink === "expertise"
                        ? styles.active__link
                        : ""
                    }`}
                    to="expertise"
                    smooth={true}
                    duration={10}
                    offset={-100}
                    onClick={() => {
                      handleNavBarLinksClicks("expertise");
                    }}
                  >
                    Expertise
                  </Link>
                </motion.li>
                <motion.li
                  key={2}
                  className={styles.navbar__item}
                  variants={item}
                  whileHover={{
                    scale: 1.08,
                    x: 0,
                    transition: { duration: 0.05 },
                  }}
                >
                  <Link
                    className={`${styles.links} ${
                      onDplace
                        ? styles.active__link__dplace
                        : state.activeLink === "work"
                        ? styles.active__link
                        : ""
                    }`}
                    to="work"
                    smooth={true}
                    duration={10}
                  >
                    Work
                  </Link>
                </motion.li>
                <motion.li
                  key={3}
                  className={styles.navbar__item}
                  variants={item}
                  whileHover={{
                    scale: 1.08,
                    x: 0,
                    transition: { duration: 0.05 },
                  }}
                >
                  <Link
                    className={`${styles.links} ${
                      onDplace
                        ? styles.active__link__dplace
                        : state.activeLink === "about"
                        ? styles.active__link
                        : ""
                    }`}
                    to="about"
                    smooth={true}
                    duration={10}
                  >
                    About
                  </Link>
                </motion.li>
                <motion.li
                  key={4}
                  className={styles.navbar__item}
                  variants={item}
                  whileHover={{
                    scale: 1.08,
                    x: 0,
                    transition: { duration: 0.05 },
                  }}
                >
                  <Link
                    className={`${styles.links} ${
                      onDplace
                        ? styles.active__link__dplace
                        : state.activeLink === "contact"
                        ? styles.active__link
                        : ""
                    }`}
                    to="contact"
                    smooth={true}
                    duration={10}
                    offset={-100}
                  >
                    Contact
                  </Link>
                </motion.li>
              </motion.ul>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 5,
                  duration: 2,
                  delay: 1.4,
                }}
                className={styles.button}
              >
                <Button
                  onText={"Github"}
                  onGithub={true}
                  onHealthyMindset={onHealthyMindset}
                />
              </motion.div>
            </React.Fragment>
          ) : (
            ""
          )}
        </div>

        <React.Fragment>
          {state.delayShowHamburguerMenu &&
            state.visibleNavBar &&
            !onDplace &&
            !onHealthyMindset &&
            !onCodeFinder &&
            !onGroceryShop &&
            !onNotFound &&
            ReactDOM.createPortal(
              <motion.div
                initial={{
                  scale: !state.animationHamburguerMenu ? 0 : 0.9,
                  y: state.animationHamburguerMenu ? -16 : 0,
                }}
                animate={{
                  rotate: 0,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: !state.animationHamburguerMenu ? 5 : 18,
                  duration: !state.animationHamburguerMenu ? 2 : 0.28,
                  delay: !state.animationHamburguerMenu ? 0.6 : 0,
                }}
                style={{ opacity: state.visibleNavBar ? "1" : "0" }}
              >
                <Hamburger
                  color="linear-gradient(90deg, #19c78e, #3c9ce5)"
                  hideOutline={false}
                  size="30"
                  rounded
                  toggled={state.openHamburguerMenu}
                  toggle={handleToggle}
                />
              </motion.div>,
              document.getElementById("hamburguer-hook")
            )}
        </React.Fragment>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
