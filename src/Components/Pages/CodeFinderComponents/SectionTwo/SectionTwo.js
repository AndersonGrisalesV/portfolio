import React from "react";

import Button from "../../../shared/UIElements/Button";
import styles from "./SectionTwo.module.css";

const SectionTwo = () => {
  return (
    <div>
      <section className={styles.section__two__container}>
        <div className={styles.container__center__section}>
          <div className={styles.button__container}>
            <Button onText={"Prototype"} onCodeFinder={true}></Button>
          </div>
          <div className={styles.container__description__text}>
            <p className={styles.description__text}>
              CodeFinder is an online platform that offers coding tutorials,
              official documentation, coding snippets, and Q&A sections for
              individuals of all ages seeking to learn how to code or those in
              search of a specific coding tutorial.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionTwo;
