import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Button.module.css";

const Button = ({
  onText,
  onChangebackground,
  onDplace = false,
  onDplaceColor = false,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (onDplace) {
      navigate("/dplace");
    }
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <button
      className={`${styles.button} "" ${
        onDplaceColor
          ? styles.button__dplace
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
