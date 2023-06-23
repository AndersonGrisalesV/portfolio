import React from "react";
import ReactDOM from "react-dom";

import styles from "./Backdrop.module.css";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div
      className={
        props.onResume === true ? styles.backdrop__password : styles.backdrop
      }
      onClick={props.onClick}
    ></div>,
    document.getElementById(
      `${props.onResume ? "resume-backdrop-hook" : "backdrop-hook"}`
    )
  );
};

export default Backdrop;
