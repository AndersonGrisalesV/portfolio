import React from "react";

import Button from "../../../shared/UIElements/Button";
import IndividualAnimation from "../../../shared/ScrollAnimation/IndividualAnimation";
import styles from "./SectionSix.module.css";

const SectionSix = () => {
  return (
    <div>
      <section className={styles.section__six__container}>
        <IndividualAnimation onDelay={0.8}>
          <div className={styles.container__left__section}>
            <div className={styles.container__images}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685742563/Portfolio/projects/CodeFinder/Image_vdn6zt.svg"
                alt="Code_Finder_Section_Six_image"
                className={styles.last__thoughts__image}
              />
            </div>
          </div>
        </IndividualAnimation>
        <IndividualAnimation onDelay={0.8}>
          <div className={styles.container__right__section}>
            <div className={styles.container__last__the__text}>
              <h1 className={styles.last__text}>Last thoughts on</h1>
              <h1 className={styles.the__text}>the design</h1>
            </div>

            <div className={styles.container__description__text}>
              <p className={styles.description__text}>
                As a UX/UI designer for during the design of the CodeFinder
                cross-platform project, I discovered that prototyping was
                critical to identify potential issues and enhance the user
                experience. It allowed me to visualize the user's journey and
                ensure the final product met their expectations. The website/app
                proved to be a valuable resource for anyone looking to learn how
                to code or improve their skills, and I'm proud of the final
                product. The design process, with an emphasis on prototyping,
                helped me create a website/app that meets users' needs.
              </p>
            </div>
          </div>
        </IndividualAnimation>
      </section>
      <IndividualAnimation onDelay={0.4}>
        <div className={styles.button__container}>
          <Button
            onText={"Case study"}
            onCodeFinder={true}
            onCaseStudy={true}
          />
        </div>
      </IndividualAnimation>
    </div>
  );
};

export default SectionSix;
