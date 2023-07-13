import React from "react";

import Card from "../../../shared/UIElements/Card";
import IndividualAnimation from "../../../shared/ScrollAnimation/IndividualAnimation";

import styles from "./SectionTwo.module.css";

const SectionTwo = () => {
  return (
    <div>
      <section className={styles.section__two__container}>
        <MemoizedIndividualAnimation onDelay={0.8}>
          <div className={styles.container__left__section}>
            <div className={styles.container__understanding__the__text}>
              <h1 className={styles.understanding__text}>Understanding</h1>
              <h1 className={styles.the__text}>the user</h1>
            </div>

            <div className={styles.container__description__text}>
              <p className={styles.description__text}>
                The main goal of UX design is to create products that meet the
                needs and expectations of the users which is why I conducted
                interviews and created empathy maps, personas, user journey maps
                in order to understand the users I'm designing for and their
                crucial needs. Identified through research was an essential
                group of working young adults who wanted organized lists of
                products coupled with a better overall experience also research
                revealed the lack of organized items and lists as a potential
                detriment to the user experience and consequently possible
                purchase of goods. Other user problems included lack of
                understanding/efficiency when trying to purchase or choose items
                through mobile/online shops.
              </p>
            </div>
          </div>
        </MemoizedIndividualAnimation>
        <MemoizedIndividualAnimation onDelay={0.8}>
          <div className={styles.container__right__section}>
            <div className={styles.container__images}>
              <MemoizedCard
                onImg="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685742985/Portfolio/projects/GroceryShop/GroceryShopimageSectionTwo_adku3x.svg"
                onImgDescription="grocery shop section two images"
                onCardHealthyMindset
              />
            </div>
          </div>
        </MemoizedIndividualAnimation>
      </section>
    </div>
  );
};

const MemoizedIndividualAnimation = React.memo(IndividualAnimation);
const MemoizedCard = React.memo(Card);

export default SectionTwo;
