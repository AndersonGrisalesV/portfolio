import React from "react";

import Button from "../../../shared/UIElements/Button";
import IndividualAnimation from "../../../shared/ScrollAnimation/IndividualAnimation";
import styles from "./SectionTwo.module.css";

const SectionTwo = () => {
  return (
    <div>
      <section className={styles.section__two__container}>
        <div className={styles.container__center__section}>
          <IndividualAnimation onDelay={0.8}>
            <div className={styles.button__container}>
              <Button
                onText={"Prototype"}
                onCodeFinder={true}
                onPrototype={true}
              />
            </div>
          </IndividualAnimation>
          <IndividualAnimation onDelay={0.8}>
            <div className={styles.container__description__text}>
              <p className={styles.description__text}>
                CodeFinder is an online platform that offers coding tutorials,
                official documentation, coding snippets, and Q&A sections for
                individuals of all ages seeking to learn how to code or those in
                search of a specific coding tutorial.
              </p>
            </div>
          </IndividualAnimation>
        </div>
      </section>
    </div>
  );
};

export default SectionTwo;
