import React from "react";

import Button from "./Button";
import styles from "./Card.module.css";

const Card = ({
  onImg,
  onImgDescription,
  onText = false,
  onDplace = false,
  onHealthyMindset = false,
  onCardHealthyMindset = false,
}) => {
  return (
    <div
      className={`${onCardHealthyMindset ? styles.card__big : styles.card} ${
        styles.card__hover
      }`}
    >
      <div
        className={` ${
          onCardHealthyMindset
            ? styles.image__container__card__correction
            : styles.image__container
        }`}
      >
        <img src={onImg} alt={onImgDescription} />
      </div>
      {onText ? (
        <React.Fragment>
          <div className={styles.text__button__container}>
            <p className={styles.description__text}>{onText}</p>
          </div>
          <div className={styles.button__container}>
            <Button
              onText={"See more"}
              onChangebackground={true}
              onDplace={onDplace}
              onHealthyMindset={onHealthyMindset}
            />
          </div>
        </React.Fragment>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
