import React from "react";

import styles from "./SectionTwo.module.css";
import Button from "../../../shared/UIElements/Button";

const SectionTwo = () => {
  return (
    <div>
      <section className={styles.section__two__container}>
        <div className={styles.container__left__section}>
          <div className={styles.container__app__project__text}>
            <h1 className={styles.app__text}>App and Website</h1>
            <h1 className={styles.project__text}>project vision</h1>
          </div>

          <div className={styles.container__description__text}>
            <p className={styles.description__text}>
              Healthy Mindset is a cross-platform mental health application and
              responsive website designed to provide online support to
              individuals seeking counseling services, mental health
              assessments, and self-help tools. The primary objective is to
              enhance the user experience by improving navigation, content, and
              engagement, resulting in an inviting atmosphere that encourages
              regular usage of the platform. By doing so, we aim to assist users
              in managing their mental health effectively and efficiently.
            </p>
          </div>

          <div className={styles.button__container}>
            <Button onText={"Prototype"} onHealthyMindset={true}></Button>
          </div>
        </div>
        <div className={styles.container__right__section}>
          <div className={styles.container__images}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685647872/Portfolio/projects/HealthyMindset/healthyMindsetSectionTwo_gq3lgv.svg"
              alt="Healthy_Mindset_Section_Two_images"
              className={styles.project__vision__image}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionTwo;
