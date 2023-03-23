import React from "react";
import Button from "../shared/UIElements/Button";
import Spline from "@splinetool/react-spline";
import styles from "./SectionOne.module.css";

const SectionOne = () => {
  return (
    <section className={styles.section__container}>
      <div className={styles.container__text}>
        <div>
          <h5>Hi, my name is</h5>
        </div>

        <div>
          <h1>Anderson Grisales</h1>
        </div>

        <div>
          <h1>Let's design</h1>
        </div>

        <div>
          <p>
            I'm a systems engineer turned web developer and UX/UI designer who
            specializes in crafting exceptional digital experiences. My passion
            for building digital products is driven by a strong emphasis on
            human-centered products and designs.
          </p>
        </div>

        <div>
          <Button onText={"Resume"}></Button>
        </div>
      </div>
      <div className={styles.container__3dAnimation}>
        <Spline
          scene="https://draft.spline.design/3kHh0pZ9i-yEo366/scene.splinecode"
          setZoom={180}
        />
      </div>
    </section>
  );
};

export default SectionOne;
