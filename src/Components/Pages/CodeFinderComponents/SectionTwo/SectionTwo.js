import React from "react";

import Button from "../../../shared/UIElements/Button";
import IndividualAnimation from "../../../shared/ScrollAnimation/IndividualAnimation";

import styles from "./SectionTwo.module.css";

const SectionTwo = () => {
  return (
    <section className={styles.section__two__container}>
      <div className={styles.container__center__section}>
        <div className={styles.button__container}>
          <IndividualAnimation onDelay={0.95}>
            <Button
              onText={"Prototype"}
              onCodeFinder={true}
              onPrototype={true}
            />
          </IndividualAnimation>
        </div>
        <div className={styles.container__description__text}>
          <IndividualAnimation onDelay={0.95}>
            <p className={styles.description__text}>
              CodeFinder is an online platform that offers coding tutorials,
              official documentation, coding snippets, and Q&A sections for
              individuals of all ages seeking to learn how to code or those in
              search of a specific coding tutorial.
            </p>
          </IndividualAnimation>
        </div>
      </div>
    </section>
  );
};

export default React.memo(SectionTwo);
