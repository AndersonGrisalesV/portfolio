import React from "react";
import Button from "../shared/UIElements/Button";
import Spline from "@splinetool/react-spline";
import styles from "./SectionOne.module.css";
import Animation from "./Animation";

const SectionOne = () => {
  return (
    <div>
      <section className={styles.section__container}>
        <div className={styles.container__left__section}>
          <div>
            <h5 className={styles.greeting__text}>Hi, my name is</h5>
          </div>

          <div>
            <h1 className={styles.name__text}>Anderson Grisales</h1>
          </div>

          <div className={styles.lets__design__container}>
            <h1 className={styles.lets__text}>Let's</h1>
            <h1 className={styles.design__text}>design</h1>
          </div>

          <div>
            <p className={styles.description__text}>
              I'm a systems engineer turned web developer and UX/UI designer who
              specializes in crafting exceptional digital experiences. My
              passion for building digital products is driven by a strong
              emphasis on human-centered products and designs.
            </p>
          </div>

          <div className={styles.button__container}>
            <Button onText={"Resume"}></Button>
          </div>
        </div>

        <Spline
          className={styles.container__right__section}
          scene="https://draft.spline.design/ke-925JRMxdge4-o/scene.splinecode"
        />
      </section>
    </div>
  );
};

export default SectionOne;
