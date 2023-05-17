import React from "react";
import ReactDOM from "react-dom";
import Spline from "@splinetool/react-spline";
import styles from "./Animation.module.css";

const Animation = () => {
  return (
    <React.Fragment>
      {true &&
        ReactDOM.createPortal(
          <div className={styles.container__right__section}>
            <Spline scene="https://draft.spline.design/ke-925JRMxdge4-o/scene.splinecode" />
          </div>,
          document.getElementById("animation-avatar-hook")
        )}
    </React.Fragment>
  );
};

export default Animation;
