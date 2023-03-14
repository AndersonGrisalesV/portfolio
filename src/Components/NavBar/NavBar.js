import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import Logo from "./LogoHover.svg";
import HamburguerMenuButton from "./HamburguerMenuButton";
import Backdrop from "../shared/UIElements/Backdrop";
import SideDrawer from "../shared/UIElements/SideDrawer";

const NavBar = () => {
  const [visibleNavBar, setVisibleNavBar] = useState(true);

  const [openHamburguerMenu, setOpenHamburguerMenu] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

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
  }, [visibleNavBar, scrollPosition]);

  return (
    <React.Fragment>
      <div
        className={`${styles.nav__bar} ${
          visibleNavBar ? "" : styles.nav__bar__hidden
        }`}
        style={{ transitionDelay: visibleNavBar ? "0ms" : "300ms" }}
      >
        {openHamburguerMenu && <Backdrop onClick={closeDrawerHandler} />}
        <SideDrawer show={openHamburguerMenu} onClick={closeDrawerHandler}>
          {/* <div className={styles.menu__responsive}>
            <HamburguerMenuButton
              toggled={openHamburguerMenu}
              toggle={setOpenHamburguerMenu}
            />
          </div> */}
          <div className={styles.links__responsive}>
            <ul className={styles.navbar__links__responsive}>
              <li className={styles.navbar__item__responsive}>
                <a href="#home">Home</a>
              </li>
              <li className={styles.navbar__item__responsive}>
                <a href="#expertise">Expertise</a>
              </li>
              <li className={styles.navbar__item__responsive}>
                <a href="#work">Work</a>
              </li>
              <li className={styles.navbar__item__responsive}>
                <a href="#about">About</a>
              </li>
              <li className={styles.navbar__item__responsive}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div className={styles.button__responsive}>
              <button className={styles.navbar__button__responsive}>
                Don't
              </button>
            </div>
          </div>
        </SideDrawer>
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
            <button className={styles.navbar__button}>Don't</button>
          </div>
        </div>

        <div className={styles.menu}>
          <HamburguerMenuButton
            toggled={openHamburguerMenu}
            toggle={setOpenHamburguerMenu}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
