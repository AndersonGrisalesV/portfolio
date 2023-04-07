import React from "react";
import Spline from "@splinetool/react-spline";
import styles from "./Animation.module.css";

const Animation = () => {
  return (
    <div className={styles.container__right__section}>
      <Spline scene="https://draft.spline.design/fQZfl7e3mHqUIf36/scene.splinecode" />
    </div>
  );
};

export default Animation;
