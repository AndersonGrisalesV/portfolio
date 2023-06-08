import React from "react";

import styles from "./SectionFour.module.css";
import Card from "../../../shared/UIElements/Card";

const SectionFour = () => {
  return (
    <div>
      <section className={styles.section__four__container}>
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
        <div className={styles.container__right__section}>
          <div className={styles.container__images}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685742985/Portfolio/projects/GroceryShop/GroceryShopimageSectionFourImageTwo_tj8cgb.svg"
              alt="Grocery_Shop_Section_four_images_Two"
              className={styles.section__four__image__one}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionFour;
