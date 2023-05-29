import React from "react";

import Button from "./Button";
import styles from "./Card.module.css";

const Card = ({ onImg, onImgDescription, onText, onDplace = false }) => {
  return (
    <div className={`${styles.card} ${styles.card__hover}`}>
      <div className={styles.image__container}>
        <img src={onImg} alt={onImgDescription} />
      </div>
      <div className={styles.text__button__container}>
        <p className={styles.description__text}>{onText}</p>
      </div>
      <div className={styles.button__container}>
        <Button
          onText={"See more"}
          onChangebackground={true}
          onDplace={onDplace}
        ></Button>
      </div>
    </div>
  );
};

export default Card;