import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import Logo from "./LogoHover.svg";
import HamburguerMenuButton from "./HamburguerMenuButton";
import Backdrop from "../shared/UIElements/Backdrop";
import SideDrawer from "../shared/UIElements/SideDrawer";
import Hamburger from "hamburger-react";
import ReactDOM from "react-dom";
import "./../../App.css";
import Button from "../shared/UIElements/Button";

const NavBar = () => {
  const [visibleNavBar, setVisibleNavBar] = useState(true);

  const [openHamburguerMenu, setOpenHamburguerMenu] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  const [delayShowgHamburguerMenu, setDelayShowHamburguerMenu] =
    useState(false);

  const closeDrawerHandler = () => {
    setOpenHamburguerMenu(false);
  };

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    // const container = document.getElementById("container__navbar__hamburguer");
    // if (visibleNavBar) {
    //   setTimeout(() => {
    //     container.classList.remove("hide__hamburger__menu");
    //     container.classList.add("show__hamburger__menu");
    //   }, 2000);
    // } else {
    //   container.classList.remove("show__hamburger__menu");
    //   container.classList.add("hide__hamburger__menu");
    // }

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
  }, [visibleNavBar, scrollPosition]);

  useEffect(() => {
    if (openHamburguerMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [openHamburguerMenu]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 860px)");
    setIsMobile(mq.matches);
    const handleResize = () => setIsMobile(mq.matches);
    mq.addEventListener("change", handleResize);
    if (!isMobile) {
      setOpenHamburguerMenu(false);
      mq.removeEventListener("change", handleResize);
    }
  }, [isMobile]);

  return (
    <React.Fragment>
      {openHamburguerMenu && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={openHamburguerMenu} onClick={closeDrawerHandler} />

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
          <div className={styles.button}>
            <Button onText={"Don't"}></Button>
          </div>
        </div>

        {!delayShowgHamburguerMenu && (
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
