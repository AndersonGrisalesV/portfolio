import React from "react";

import Button from "../../../shared/UIElements/Button";
import IndividualAnimation from "../../../shared/ScrollAnimation/IndividualAnimation";
import styles from "./SectionOne.module.css";

const SectionOne = () => {
  return (
    <div>
      <section className={styles.section__one__container}>
        <div className={styles.container__left__section}>
          <IndividualAnimation onDelay={0.8}>
            <div className={styles.container__grocery__project__text}>
              <h1 className={styles.grocery__text}>Grocery shop app</h1>
              <h1 className={styles.project__text}>Project vision</h1>
            </div>
          </IndividualAnimation>

          <IndividualAnimation onDelay={1.1}>
            <div className={styles.container__description__text}>
              <p className={styles.description__text}>
                The grocery shop app is a local grocery shop store located in
                the suburbs of a metropolitan area. The grocery shop strives to
                deliver healthy, sorted out products moreover delivery/pickup
                options and payment accessible to everyone. The grocery shop
                targets customers of all ages who lack the time to go to a
                physical store.
              </p>
            </div>
          </IndividualAnimation>
          <IndividualAnimation onDelay={1.3}>
            <div className={styles.button__container}>
              <Button
                onText={"Prototype"}
                onGroceryShop={true}
                onPrototype={true}
              />
            </div>
          </IndividualAnimation>
        </div>
        <div className={styles.container__right__section}>
          <div className={styles.container__images}>
            <IndividualAnimation onDelay={1.6}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685742987/Portfolio/projects/GroceryShop/GroceryShopimageSectionOne_qdnzmd.svg"
                alt="Grocery_Shop_Section_One_images"
                className={styles.grocery__shop__image}
                loading="lazy"
              />
            </IndividualAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionOne;
