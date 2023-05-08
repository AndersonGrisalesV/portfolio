import React from "react";

import Button from "./Button";
import styles from "./Card.module.css";

const Card = ({ onImg, onImgDescription, onText }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image__container}>
        <img src={onImg} alt={onImgDescription} />
      </div>
      <div className={styles.text__button__container}>
        <p className={styles.description__text}>{onText}</p>
        <div className={styles.button__container}>
          <Button onText={"See more"} onChangebackground={true}></Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
