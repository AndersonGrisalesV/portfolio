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
import styles from "./NavBar.module.css";

const NavBar = ({
  onDplace = false,
  onHealthyMindset = false,
  onCodeFinder = false,
  onGroceryShop = false,
}) => {
  const [visibleNavBar, setVisibleNavBar] = useState(true);

  const [openHamburguerMenu, setOpenHamburguerMenu] = useState(false);

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

    if (onDplace || onHealthyMindset || onCodeFinder || onGroceryShop) {
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

    if (visibleNavBar) {
      setTimeout(() => {
        setDelayShowHamburguerMenu(true);
      }, 200);
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

  return (
    <React.Fragment>
      {openHamburguerMenu && <Backdrop onClick={closeDrawerHandler} />}
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
            <img
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
          </div>

          {!onDplace && !onHealthyMindset && !onCodeFinder && !onGroceryShop ? (
            <React.Fragment>
              <ul className={styles.navbar__links}>
                <li className={`${styles.navbar__item} `}>
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
                </li>

                <li className={styles.navbar__item}>
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
                </li>
                <li className={styles.navbar__item}>
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
                </li>
                <li className={styles.navbar__item}>
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
                </li>
                <li className={styles.navbar__item}>
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
                </li>
              </ul>
              <div className={styles.button}>
                <Button
                  onText={"Don't"}
                  onDplace={onDplace}
                  onHealthyMindset={onHealthyMindset}
                ></Button>
              </div>
            </React.Fragment>
          ) : (
            ""
          )}
        </div>

        {!delayShowgHamburguerMenu &&
          !onDplace &&
          !onHealthyMindset &&
          !onCodeFinder &&
          !onGroceryShop && (
            <div className={styles.menu__responsive}>
              <Hamburger
                color="linear-gradient(90deg, #19c78e, #3c9ce5)"
                hideOutline={false}
                size="30"
                rounded
                toggled={openHamburguerMenu}
                toggle={setOpenHamburguerMenu}
              />
            </div>
          )}
        <React.Fragment>
          {delayShowgHamburguerMenu &&
            visibleNavBar &&
            !onDplace &&
            !onHealthyMindset &&
            !onCodeFinder &&
            !onGroceryShop &&
            ReactDOM.createPortal(
              <Hamburger
                color="linear-gradient(90deg, #19c78e, #3c9ce5)"
                hideOutline={false}
                size="30"
                rounded
                toggled={openHamburguerMenu}
                toggle={setOpenHamburguerMenu}
              />,
              document.getElementById("hamburguer-hook")
            )}
        </React.Fragment>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
