import React from "react";

import Card from "../../../shared/UIElements/Card";
import IndividualAnimation from "../../../shared/ScrollAnimation/IndividualAnimation";
import styles from "./SectionFour.module.css";

const SectionFour = () => {
  return (
    <div>
      <section className={styles.section__four__container}>
        <IndividualAnimation onDelay={0.8}>
          <div className={styles.container__left__section}>
            <div className={styles.container__images}>
              <Card
                onImg={
                  "https://res.cloudinary.com/doa4qiuc2/image/upload/v1685742987/Portfolio/projects/GroceryShop/GroceryShopimageSectionFourImageOne_ufaocv.svg"
                }
                onImgDescription={"grocery shop section four images one"}
                onCardHealthyMindset={true}
              />
            </div>
          </div>
        </IndividualAnimation>
        <IndividualAnimation onDelay={0.8}>
          <div className={styles.container__right__section}>
            <div className={styles.container__images}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685742985/Portfolio/projects/GroceryShop/GroceryShopimageSectionFourImageTwo_tj8cgb.svg"
                alt="Grocery_Shop_Section_four_images_Two"
                className={styles.section__four__image__one}
                loading="lazy"
              />
            </div>
          </div>
        </IndividualAnimation>
      </section>
    </div>
  );
};

export default SectionFour;
