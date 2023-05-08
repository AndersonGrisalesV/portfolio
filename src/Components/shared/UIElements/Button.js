import React from "react";
import styles from "./Button.module.css";

const Button = ({ onText, onChangebackground }) => {
  return (
    <button
      className={`${
        onChangebackground ? styles.button__light : styles.button__dark
      }`}
    >
      {onText}
    </button>
  );
};

export default Button;
