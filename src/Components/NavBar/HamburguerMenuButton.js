import React from "react";
import styles from "./HamburguerMenuButton.module.css";
import Hamburger from "hamburger-react";

const HamburguerMenuButton = ({ toggled, toggle }) => {
  return (
    <Hamburger
      color="linear-gradient(90deg, #19c78e, #3c9ce5)"
      hideOutline={false}
      size="30"
      rounded
      className={styles.hamburguer__react}
      toggled={toggled}
      toggle={toggle}
    />
  );
};

export default HamburguerMenuButton;
