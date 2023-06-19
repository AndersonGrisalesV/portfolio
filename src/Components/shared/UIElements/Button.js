import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Button.module.css";
import { motion } from "framer-motion";

const Button = ({
  onText,
  onChangebackground,
  onDplace = false,
  onHealthyMindset = false,
  onCodeFinder = false,
  onGroceryShop = false,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (onDplace) {
      navigate("/projects/dplace");
    } else if (onHealthyMindset) {
      navigate("/projects/healthy_mindset");
    } else if (onCodeFinder) {
      navigate("/projects/code_finder");
    } else if (onGroceryShop) {
      navigate("/projects/grocery_shop");
    }
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.98, x: 0 }}
      className={`${styles.button} "" ${
        onDplace
          ? styles.button__dplace
          : onHealthyMindset
          ? styles.button__healthymindset
          : onCodeFinder
          ? styles.button__codefinder
          : onGroceryShop
          ? styles.button_groceryshop
          : onChangebackground
          ? styles.button__light
          : ""
      }`}
      onClick={handleButtonClick}
    >
      {onText}
    </motion.button>
  );
};

export default Button;
