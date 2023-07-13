import React from "react";

import IndividualAnimation from "../../../shared/ScrollAnimation/IndividualAnimation";

import styles from "./SectionFour.module.css";

const SectionFour = () => {
  return (
    <div>
      <section className={styles.section__four__container}>
        <MemoizedIndividualAnimation onDelay={0.8}>
          <div className={styles.container__left__section}>
            <div className={styles.container__initiating__creative__text}>
              <h1 className={styles.initiating__text}>Initiating the</h1>
              <h1 className={styles.creative__text}>creative process</h1>
            </div>

            <div className={styles.container__description__text}>
              <p className={styles.description__text}>
                Once I had envisioned and created some paper wireframes, I
                proceeded to create the first iteration of the Healthy Mindset
                app's designs. The main emphasis of these designs was on the
                introductory questionnaire and essential features such as live
                sessions, journal, community tab, and menu resources that users
                can utilize to initiate their therapy.
              </p>
            </div>
          </div>
        </MemoizedIndividualAnimation>
        <MemoizedIndividualAnimation onDelay={0.8}>
          <div className={styles.container__right__section}>
            <div className={styles.container__images}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685647872/Portfolio/projects/HealthyMindset/healthyMindsetSectionFour_saaudf.svg"
                alt="Healthy_Mindset_Section_Four_images"
                className={styles.initiating__creative__image}
                loading="lazy"
              />
            </div>
          </div>
        </MemoizedIndividualAnimation>
      </section>
    </div>
  );
};

const MemoizedIndividualAnimation = React.memo(IndividualAnimation);

export default SectionFour;
