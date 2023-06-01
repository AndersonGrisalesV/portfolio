import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Button.module.css";

const Button = ({
  onText,
  onChangebackground,
  onDplace = false,
  onHealthyMindset = false,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (onDplace) {
      navigate("/projects/dplace");
    } else if (onHealthyMindset) {
      navigate("/projects/healthy_mindset");
    }
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <button
      className={`${styles.button} "" ${
        onDplace
          ? styles.button__dplace
          : onHealthyMindset
          ? styles.button__healthymindset
          : onChangebackground
          ? styles.button__light
          : ""
      }`}
      onClick={handleButtonClick}
    >
      {onText}
    </button>
  );
};

export default Button;
