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
  onDemo = false,
  onGithub = false,
  onPrototype = false,
  onCaseStudy = false,
  onContact = false,
  onResume = false,
  onHandleOpenModalPassword = null,
  onUnlock = false,
  onClose = null,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (onDplace) {
      if (onDplace && onDemo && !onGithub) {
        window.open("https://dplace-3d5f4.web.app/api/homepage", "_blank");
      } else if (onDplace && onGithub && !onDemo) {
        window.open("https://github.com/AndersonGrisalesV/Dplace", "_blank");
      } else {
        navigate("/projects/dplace");
      }
    } else if (onHealthyMindset) {
      if (onHealthyMindset && onPrototype && !onCaseStudy) {
        window.open(
          "https://www.figma.com/proto/eawkMUgZSmeyglFFxIWllc/High-fidelity-prototype---mental-health-app?node-id=8-22&scaling=scale-down&page-id=0%3A1&starting-point-node-id=8%3A8",
          "_blank"
        );
      } else if (onHealthyMindset && onCaseStudy && !onPrototype) {
        window.open(
          "https://docs.google.com/presentation/d/1L_0qUooYrqq8DQgHFDZOUfoLBaCXS9NjpXNMPE-1ipQ/edit?usp=sharing",
          "_blank"
        );
      } else {
        navigate("/projects/healthy_mindset");
      }
    } else if (onCodeFinder) {
      if (onCodeFinder && onPrototype && !onCaseStudy) {
        window.open(
          "https://xd.adobe.com/view/243b6b53-eb1e-4dd7-bd43-ac473f80d19f-7168/screen/e14be693-6e54-4551-b8ea-3e214af5b800?fullscreen",
          "_blank"
        );
      } else if (onCodeFinder && onCaseStudy && !onPrototype) {
        window.open(
          "https://docs.google.com/presentation/d/1aNsC1xWy0AtMXy4l-ebe_rCy4TtZ-b9uWVGE9bfV5yE/edit?usp=sharing",
          "_blank"
        );
      } else {
        navigate("/projects/code_finder");
      }
    } else if (onGroceryShop) {
      if (onGroceryShop && onPrototype && !onCaseStudy) {
        window.open(
          "https://www.figma.com/proto/XLGfxEtU1R2laO9ZdUochN/Grocery-shop---High-fidelity-prototype?node-id=37-50&scaling=scale-down&page-id=0%3A1&starting-point-node-id=37%3A50",
          "_blank"
        );
      } else if (onGroceryShop && onCaseStudy && !onPrototype) {
        window.open(
          "https://docs.google.com/presentation/d/1B8UOE2cjvnf1tlX8no2UZwQqTAax9JhWljGFT1LfcNE/edit#slide=id.p",
          "_blank"
        );
      } else {
        navigate("/projects/grocery_shop");
      }
    } else if (onContact) {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=grisalesvargasanderson@gmail.com&su=Let's talk&body=",
        "_blank"
      );
    } else if (onGithub) {
      window.open("https://github.com/AndersonGrisalesV", "_blank");
    } else if (onResume) {
      if (onHandleOpenModalPassword) {
        onHandleOpenModalPassword();
      }
    } else if (onUnlock) {
      const pdfUrl = "https://v4.brittanychiang.com/resume.pdf";
      window.open(pdfUrl, "_blank");
      onClose();
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
