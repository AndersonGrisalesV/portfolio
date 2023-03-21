import React from "react";
import styles from "./Button.module.css";

const Button = ({ onText }) => {
  return <button className={styles.button}>{onText}</button>;
};

export default Button;
