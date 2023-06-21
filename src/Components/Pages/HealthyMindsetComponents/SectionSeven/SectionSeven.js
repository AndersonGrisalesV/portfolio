import React from "react";

import Button from "../../../shared/UIElements/Button";
import IndividualAnimation from "../../../shared/ScrollAnimation/IndividualAnimation";
import styles from "./SectionSeven.module.css";

const SectionSeven = () => {
  return (
    <div>
      <section className={styles.section__seven__container}>
        <IndividualAnimation onDelay={0.8}>
          <div className={styles.container__left__section}>
            <div className={styles.container__conslusion__design__text}>
              <h1 className={styles.conclusion__text}>Conslusion of the</h1>
              <h1 className={styles.design__text}>design process</h1>
            </div>

            <div className={styles.container__description__text}>
              <p className={styles.description__text}>
                I found the prototyping stage to be particularly enjoyable
                during the design process, as it enabled quick and efficient
                testing of design solutions while refining the user experience.
                Through incorporating user feedback into each iteration of the
                design, I was able to create a mental health management platform
                that prioritizes the needs of the users and their mental health.
                The success of the Healthy Mindset app and website can be
                attributed to the emphasis placed on user experience and the
                iterative design process that allowed for continuous
                improvement.
              </p>
            </div>
          </div>
        </IndividualAnimation>
        <IndividualAnimation onDelay={0.8}>
          <div className={styles.container__right__section}>
            <div className={styles.container__images}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685647873/Portfolio/projects/HealthyMindset/healthyMindsetSectionSeven_qntaoj.svg"
                alt="Healthy_Mindset_Section_Seven_images"
                className={styles.conslusion__design__image}
              />
            </div>
            <div className={styles.button__container}>
              <Button
                onText={"Case study"}
                onHealthyMindset={true}
                onCaseStudy={true}
              />
            </div>
          </div>
        </IndividualAnimation>
      </section>
    </div>
  );
};

export default SectionSeven;
