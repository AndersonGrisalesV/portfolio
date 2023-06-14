import React from "react";

import Card from "../../../shared/UIElements/Card";
import styles from "./SectionSix.module.css";
import Button from "../../../shared/UIElements/Button";

const SectionSix = () => {
  return (
    <div>
      <section className={styles.section__six__container}>
        <div className={styles.container__left__section}>
          <div className={styles.container__design__conclusion__text}>
            <h1 className={styles.design__text}>Design</h1>
            <h1 className={styles.conclusion__text}>conclusion</h1>
          </div>

          <div className={styles.container__description__text}>
            <p className={styles.description__text}>
              While designing the grocery shop app I realized that user feedback
              is crucial in creating a successful app that meets the user's
              needs. During the design process, I learned to be flexible and
              willing to make changes based on user feedback. Additionally, I
              discovered that usability testing is key to ensure the app's
              functionality and accessibility. By collaborating with peers and
              receiving feedback from other designers, I was able to improve the
              app's user interface and create a more intuitive experience for
              the end-users. Overall, the Grocery shop app design project taught
              me the importance of user-centered design and iterative design
              processes in creating successful digital products.
            </p>
          </div>
        </div>
        <div className={styles.container__right__section}>
          <div className={styles.container__images}>
            <Card
              onImg={
                "https://res.cloudinary.com/doa4qiuc2/image/upload/v1685742985/Portfolio/projects/GroceryShop/GroceryShopimageSectionSix_mq2wnx.svg"
              }
              onImgDescription={"grocery shop section six images"}
              onCardHealthyMindset={true}
            />
          </div>

          <div className={styles.button__container}>
            <Button onText={"Case study"} onGroceryShop={true}></Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionSix;