import React from "react";

import Button from "../../../shared/UIElements/Button";
import IndividualAnimation from "../../../shared/ScrollAnimation/IndividualAnimation";
import styles from "./SectionTwo.module.css";

const SectionTwo = () => {
  return (
    <div>
      <section className={styles.section__two__container}>
        <div className={styles.container__left__section}>
          <div className={styles.container__app__project__text}>
            <IndividualAnimation onDelay={0.95}>
              <h1 className={styles.app__text}>App and Website</h1>
              <h1 className={styles.project__text}>project vision</h1>
            </IndividualAnimation>
          </div>
          <div className={styles.container__description__text}>
            <IndividualAnimation onDelay={0.95}>
              <p className={styles.description__text}>
                Healthy Mindset is a cross-platform mental health application
                and responsive website designed to provide online support to
                individuals seeking counseling services, mental health
                assessments, and self-help tools. The primary objective is to
                enhance the user experience by improving navigation, content,
                and engagement, resulting in an inviting atmosphere that
                encourages regular usage of the platform. By doing so, we aim to
                assist users in managing their mental health effectively and
                efficiently.
              </p>
            </IndividualAnimation>
          </div>
          <div className={styles.button__container}>
            <IndividualAnimation onDelay={0.6}>
              <Button
                onText={"Prototype"}
                onHealthyMindset={true}
                onPrototype={true}
              />
            </IndividualAnimation>
          </div>
        </div>
        <div className={styles.container__right__section}>
          <div className={styles.container__images}>
            <IndividualAnimation onDelay={0.95}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685647872/Portfolio/projects/HealthyMindset/healthyMindsetSectionTwo_gq3lgv.svg"
                alt="Healthy_Mindset_Section_Two_images"
                className={styles.project__vision__image}
              />
            </IndividualAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionTwo;
