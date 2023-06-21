import React from "react";

import Card from "../../../shared/UIElements/Card";
import IndividualAnimation from "../../../shared/ScrollAnimation/IndividualAnimation";
import styles from "./SectionFive.module.css";

const SectionFive = () => {
  return (
    <div>
      <section className={styles.section__five__container}>
        <IndividualAnimation onDelay={0.8}>
          <div className={styles.container__left__section}>
            <div className={styles.container__improving__visual__text}>
              <h1 className={styles.improving__text}>Improving the</h1>
              <h1 className={styles.visual__text}>visual interface</h1>
            </div>

            <div className={styles.container__description__text}>
              <p className={styles.description__text}>
                I refine the low-fidelity prototype into high-fidelity mockups
                and then high-fidelity prototype. Afterward, I run accessibility
                checks to guarantee that the design adheres to the Web Content
                Accessibility Guidelines (WCAG) for the inclusion of all users,
                including those with disabilities. My goal is to create a
                functional and aesthetically pleasing design that satisfies the
                users' requirements while also being accessible to everyone.
              </p>
            </div>
          </div>
        </IndividualAnimation>
        <IndividualAnimation onDelay={0.8}>
          <div className={styles.container__right__section}>
            <div className={styles.container__images}>
              <Card
                onImg={
                  "https://res.cloudinary.com/doa4qiuc2/image/upload/v1685647872/Portfolio/projects/HealthyMindset/healthyMindsetSectionFive_qsmjfo.svg"
                }
                onImgDescription={"healthy mindset section five image"}
                onCardHealthyMindset={true}
              />
            </div>
          </div>
        </IndividualAnimation>
      </section>
    </div>
  );
};

export default SectionFive;
