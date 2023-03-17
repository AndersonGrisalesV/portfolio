import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import styles from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="right-to-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className={styles.side__drawer} onClick={props.onClick}>
        <ol className={styles.navbar__links__responsive}>
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
          <div className={styles.button__responsive}>
            <button className={styles.navbar__button__responsive}>Don't</button>
          </div>
        </ol>
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
