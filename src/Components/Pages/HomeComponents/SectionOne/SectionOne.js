import React from "react";

import Button from "../../../shared/UIElements/Button";
import Spline from "@splinetool/react-spline";
import ReactDOM from "react-dom";
import Animation from "./Animation";
import styles from "./SectionOne.module.css";

const SectionOne = () => {
  return (
    <div>
      <section className={styles.section__container} id="home">
        <div className={styles.container__left__section}>
          <div>
            <h5 className={styles.greeting__text}>Hi, my name is</h5>
          </div>

          <div className={styles.responsive__name__text}>
            <h1 className={styles.name__text}>Anderson Grisales</h1>
          </div>

          <div className={styles.responsive__lets__design__text}>
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
            <Button onText={"Resume"} />
          </div>
        </div>
        <div className={styles.container__right__section}>
          {/* <Spline
            style={{ width: "100%", height: "105%" }}
            scene="https://draft.spline.design/ke-925JRMxdge4-o/scene.splinecode"
          /> */}
        </div>
      </section>
    </div>
  );
};

export default SectionOne;
