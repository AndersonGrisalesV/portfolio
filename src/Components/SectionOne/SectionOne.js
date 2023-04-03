import React from "react";
import Button from "../shared/UIElements/Button";
import Spline from "@splinetool/react-spline";
import styles from "./SectionOne.module.css";

const SectionOne = () => {
  return (
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
            specializes in crafting exceptional digital experiences. My passion
            for building digital products is driven by a strong emphasis on
            human-centered products and designs.
          </p>
        </div>

        <div className={styles.button__container}>
          <Button onText={"Resume"}></Button>
        </div>
      </div>
      <div className={styles.container__3dAnimation}>
        <Spline
          scene="https://draft.spline.design/3kHh0pZ9i-yEo366/scene.splinecode"
          setZoom={100}
        />
      </div>
    </section>
  );
};

export default SectionOne;
