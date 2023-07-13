import Button from "./Button";
import styles from "./Card.module.css";

const Card = ({
  onImg,
  onImgDescription,
  onText = false,
  onDplace = false,
  onHealthyMindset = false,
  onCardHealthyMindset = false,
  onCodeFinder = false,
  onCardCodeFinder = false,
  onGroceryShop = false,
}) => (
  <div
    className={`${onCardHealthyMindset ? styles.card__big : onCardCodeFinder ? styles.card__big__black : styles.card} ${styles.card__hover}`}
  >
    <div className={`${onCardHealthyMindset ? styles.image__container__card__correction : styles.image__container}`}>
      <img src={onImg} alt={onImgDescription} loading="lazy" />
    </div>
    {onText && (
      <>
        <div className={styles.text__button__container}>
          <p className={styles.description__text}>{onText}</p>
        </div>
        <div className={styles.button__container}>
          <Button
            onText="See more"
            onChangebackground={true}
            onDplace={onDplace}
            onHealthyMindset={onHealthyMindset}
            onCodeFinder={onCodeFinder}
            onGroceryShop={onGroceryShop}
          />
        </div>
      </>
    )}
  </div>
);

export default Card;
