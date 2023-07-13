import React from "react";

import Card from "../../../shared/UIElements/Card";
import IndividualAnimation from "../../../shared/ScrollAnimation/IndividualAnimation";

import styles from "./SectionFive.module.css";

const SectionFive = () => {
  return (
    <div>
      <section className={styles.section__five__container}>
        <div className={styles.container__left__section}>
          <div className={styles.container__images}>
            <IndividualAnimation onDelay={0.8}>
              <MemoizedCard
                onImg="https://res.cloudinary.com/doa4qiuc2/image/upload/v1686082485/Portfolio/projects/CodeFinder/SectionFiveImageOne_klnmqq.svg"
                onImgDescription="code finder section five image one"
              />

              <MemoizedCard
                onImg="https://res.cloudinary.com/doa4qiuc2/image/upload/v1686082484/Portfolio/projects/CodeFinder/SectionFiveImageTwo_iolmmm.svg"
                onImgDescription="code finder section five image two"
              />

              <MemoizedCard
                onImg="https://res.cloudinary.com/doa4qiuc2/image/upload/v1686082484/Portfolio/projects/CodeFinder/SectionFiveImageThree_vhe9kk.svg"
                onImgDescription="code finder section five image three"
              />
            </IndividualAnimation>
          </div>
        </div>
        <IndividualAnimation onDelay={0.8}>
          <div className={styles.container__right__section}>
            <div className={styles.container__high__prototype__text}>
              <h1 className={styles.high__text}>High-fidelity</h1>
              <h1 className={styles.prototype__text}>Prototype</h1>
            </div>
            <div className={styles.container__right__image}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685742491/Portfolio/projects/CodeFinder/ImageFour_roffmw.svg"
                alt="Code_Finder_Section_five_image"
                className={styles.section__five__image__one}
                loading="lazy"
              />
            </div>
          </div>
        </IndividualAnimation>
      </section>
    </div>
  );
};

const MemoizedCard = React.memo(({ onImg, onImgDescription }) => (
  <Card onImg={onImg} onImgDescription={onImgDescription} onCardCodeFinder />
));

export default SectionFive;
