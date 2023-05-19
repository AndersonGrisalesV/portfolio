import React from "react";

import Spline from "@splinetool/react-spline";
import Marquee from "react-fast-marquee";

import styles from "./SectionTwo.module.css";
import SkillsMarquee from "../../../shared/Marquee/SkillsMarquee";

const SectionTwo = () => {
  return (
    <div>
      <section className={styles.section__two__container} id="expertise">
        <div className={styles.container__left__section}>
          <div className={styles.responsive__skills__expertise__text}>
            <h1 className={styles.skills__text}>Skills &</h1>
            <h1 className={styles.expertise__text}>Expertise</h1>
          </div>

          <div>
            <p className={styles.description__text}>
              Ever since my high school years, I have been fascinated by
              technology and the boundless possibilities of the internet.
              Building websites is one of the most exciting things for me, and I
              approach both front-end and back-end development with a relentless
              drive to learn and innovate.
              <br />
              <br />
              Additionally, my proficiency in the MERN stack as well as UX/UI
              design skills allows me to seamlessly integrate my knowledge,
              resulting in the best possible solutions.
              <br />
              <br />
              Here are a few technologies I've been working with recently:
            </p>
          </div>
        </div>
        <div className={styles.container__skills__section}>
          {/* <SkillsMarquee /> */}
        </div>
        {/* <div className={styles.container__right__section}> */}
        {/* <Spline
            style={{ width: "100%", height: "100%" }}
            scene="https://draft.spline.design/cKkZ8nclvPv8ZdJ6/scene.splinecode"
          /> */}
      </section>
      <div className={styles.responsive__marquee}>
        {/* <SkillsMarquee /> */}
      </div>
    </div>
  );
};

export default SectionTwo;
