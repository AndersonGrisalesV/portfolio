import React from "react";

import IndividualAnimation from "../../../shared/ScrollAnimation/IndividualAnimation";

import styles from "./SectionOne.module.css";

const SectionOne = () => {
  return (
    <div>
      <section className={styles.section__one__container}>
        <div className={styles.container__center__section}>
          <MemoizedIndividualAnimation onDelay={0.8}>
            <div className={styles.container__healthy__mindset__image__text}>
              <h1 className={styles.healthy__mindset__text}>Healthy</h1>
              <div className={styles.container__image__logo}>
                <img
                  src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685647871/Portfolio/projects/HealthyMindset/healthyMindsetLogo_vdfbtg.svg"
                  alt="Healthy_Mindset_Logo_Text"
                  loading="lazy"
                />
              </div>
              <h1 className={styles.healthy__mindset__text}>Mindset</h1>
            </div>
          </MemoizedIndividualAnimation>
          <div className={styles.container__image}>
            <MemoizedIndividualAnimation onDelay={1.1}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685647875/Portfolio/projects/HealthyMindset/healthyMindsetSectionOne_rrrfb6.svg"
                alt="Healthy_Mindset_image"
                loading="lazy"
              />
            </MemoizedIndividualAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

const MemoizedIndividualAnimation = React.memo(IndividualAnimation);

export default SectionOne;
