import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "./Logos/Logo.svg";
import LogoDplace from "./Logos/LogoDplace.svg";
import LogoHealthyMindset from "./Logos/LogoHealthyMindset.svg";
import LogoCodeFinder from "./Logos/LogoCodeFinder.svg";
import LogoGroceryShop from "./Logos/LogoGroceryShop.svg";
import HamburguerMenuButton from "./HamburguerMenuButton";
import Backdrop from "../UIElements/Backdrop";
import SideDrawer from "../UIElements/SideDrawer";
import Hamburger from "hamburger-react";
// import "../../../App.css";
import Button from "../UIElements/Button";
import { motion } from "framer-motion";
import styles from "./NavBar.module.css";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const NavBar = ({
  onDplace = false,
  onHealthyMindset = false,
  onCodeFinder = false,
  onGroceryShop = false,
  onNotFound = false,
}) => {
  const [visibleNavBar, setVisibleNavBar] = useState(true);

  const [openHamburguerMenu, setOpenHamburguerMenu] = useState(false);

  const [animationHamburguerMenu, setAnimationHamburguerMenu] = useState(false);

  const [activeLink, setActiveLink] = useState("home");

  const [delayShowgHamburguerMenu, setDelayShowHamburguerMenu] =
    useState(false);

  const navigate = useNavigate();

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

    if (
      onDplace ||
      onHealthyMindset ||
      onCodeFinder ||
      onGroceryShop ||
      onNotFound
    ) {
      navigate("/home");
      setTimeout(() => {
        scrollToTop(nameToScroolHome);
      }, 200);
    } else {
      scrollToTop(nameToScroolHome);
    }
  };

  const closeDrawerHandler = () => {
    setOpenHamburguerMenu(false);
  };

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    window.onscroll = function () {
      let currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        setVisibleNavBar(true);
        setAnimationHamburguerMenu(true);
      } else {
        setVisibleNavBar(false);
      }
      prevScrollPos = currentScrollPos;
    };

    if (visibleNavBar) {
      // setTimeout(() => {
      setDelayShowHamburguerMenu(true);
      // }, 0);
    } else {
      setDelayShowHamburguerMenu(false);
    }
  }, [visibleNavBar]);

  useEffect(() => {
    if (openHamburguerMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [openHamburguerMenu]);

  // Add an effect to listen to scroll events
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
            setActiveLink(section);

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
    setOpenHamburguerMenu(false);
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

  return (
    <React.Fragment>
      {openHamburguerMenu && (
        <Backdrop onClick={closeDrawerHandler} onResume={false} />
      )}
      <SideDrawer show={openHamburguerMenu} onClick={closeDrawerHandler} />
      {/* //create here a portal and execute when user clicks to go to home to be able to load the page and have the loader as a placeholder */}
      <div
        className={`${styles.nav__bar} ${
          visibleNavBar ? "" : styles.nav__bar__hidden
        }`}
        style={{ transitionDelay: visibleNavBar ? "0ms" : "300ms" }}
      >
        <div
          className={`${
            onDplace || onHealthyMindset || onCodeFinder || onGroceryShop
              ? styles.container__projects__logos
              : styles.container__logo
          }`}
        >
          <div className={styles.logo}>
            {visibleNavBar && (
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
                  // whileHover={{
                  //   scale: 1.08,
                  //   x: 0,
                  //   transition: { duration: 0.05 },
                  // }}
                  initial={{
                    scale: !animationHamburguerMenu ? 0 : 0.9,
                  }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 5,
                    duration: !animationHamburguerMenu ? 2 : 0.01,
                    delay: !animationHamburguerMenu ? 0.17 : 0.01,
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
                        : activeLink === "home"
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
                        : activeLink === "expertise"
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
                        : activeLink === "work"
                        ? styles.active__link
                        : ""
                    }`}
                    to="work"
                    smooth={true}
                    duration={10}
                    // onClick={() => {
                    //   scrollToTop("work");
                    // }}
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
                        : activeLink === "about"
                        ? styles.active__link
                        : ""
                    }`}
                    to="about"
                    smooth={true}
                    duration={10}
                    // onClick={() => {
                    //   scrollToTop("about");
                    // }}
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
                        : activeLink === "contact"
                        ? styles.active__link
                        : ""
                    }`}
                    to="contact"
                    smooth={true}
                    duration={10}
                    offset={-100}
                    // onClick={() => {
                    //   scrollToTop("contact");
                    // }}
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
        {/* 
        {!delayShowgHamburguerMenu &&
          !onDplace &&
          !onHealthyMindset &&
          !onCodeFinder &&
          !onGroceryShop && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 5,
                duration: 0.5,
              }}
              className={styles.menu__responsive}
            >
              <Hamburger
                color="linear-gradient(90deg, #19c78e, #3c9ce5)"
                hideOutline={false}
                size="30"
                rounded
                toggled={openHamburguerMenu}
                toggle={setOpenHamburguerMenu}
              />
            </motion.div>
          )} */}
        <React.Fragment>
          {delayShowgHamburguerMenu &&
            visibleNavBar &&
            !onDplace &&
            !onHealthyMindset &&
            !onCodeFinder &&
            !onGroceryShop &&
            !onNotFound &&
            ReactDOM.createPortal(
              <motion.div
                initial={{
                  scale: !animationHamburguerMenu ? 0 : 0.9,
                  y: animationHamburguerMenu ? -16 : 0,
                }}
                animate={{
                  rotate: 0,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: !animationHamburguerMenu ? 5 : 18,
                  duration: !animationHamburguerMenu ? 2 : 0.28,
                  delay: !animationHamburguerMenu ? 0.6 : 0,
                }}
                style={{ opacity: visibleNavBar ? "1" : "0" }}
              >
                <Hamburger
                  color="linear-gradient(90deg, #19c78e, #3c9ce5)"
                  hideOutline={false}
                  size="30"
                  rounded
                  toggled={openHamburguerMenu}
                  toggle={setOpenHamburguerMenu}
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
