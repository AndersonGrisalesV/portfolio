import React, { memo } from "react";

import IndividualAnimation from "../../../shared/ScrollAnimation/IndividualAnimation";

import styles from "./SectionOne.module.css";

const SectionOne = () => {
  return (
    <div>
      <section className={styles.section__one__container}>
        <IndividualAnimation onDelay={0.8}>
          <div className={styles.container__code__finder__text}>
            <h1 className={styles.codefinder__text}>CodeFinder</h1>
            <h1 className={styles.website__text}>website</h1>
            <h1 className={styles.design__text}>design</h1>
          </div>
        </IndividualAnimation>
        <IndividualAnimation onDelay={1.1}>
          <div className={styles.container__left__right__images}>
            <LeftSection />
            <RightSection />
          </div>
        </IndividualAnimation>
      </section>
    </div>
  );
};

const LeftSection = memo(() => {
  return (
    <div className={styles.container__left__section}>
      <div className={styles.container__images}>
        <img
          src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685742691/Portfolio/projects/CodeFinder/CodeFinderImage1SectionOne_m0jvox.svg"
          alt="Code_Finder_Section_One_Left_Image"
          loading="lazy"
        />
      </div>
    </div>
  );
});

const RightSection = memo(() => {
  return (
    <div className={styles.container__right__section}>
      <div className={styles.container__images}>
        <img
          src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685742493/Portfolio/projects/CodeFinder/ImageTwo_vmguit.svg"
          alt="Code_Finder_Section_One_Right_Image"
          className={styles.section__one__image__two}
          loading="lazy"
        />
      </div>
    </div>
  );
});

export default SectionOne;
