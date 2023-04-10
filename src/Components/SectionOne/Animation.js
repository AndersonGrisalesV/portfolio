import React from "react";
import Spline from "@splinetool/react-spline";
import styles from "./Animation.module.css";

const Animation = () => {
  return (
    <div className={styles.container__right__section}>
      <Spline scene="https://draft.spline.design/ke-925JRMxdge4-o/scene.splinecode" />
    </div>
  );
};

export default Animation;
