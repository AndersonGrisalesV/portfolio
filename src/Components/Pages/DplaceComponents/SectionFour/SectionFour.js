import React, { useEffect, useRef } from "react";

import DplaceMarquee from "../../../shared/Marquee/DplaceMarquee";
import Button from "../../../shared/UIElements/Button";

import { motion, useInView, useAnimation } from "framer-motion";
import styles from "./SectionFour.module.css";
import IndividualAnimation from "../../../shared/ScrollAnimation/IndividualAnimation";

const SectionFour = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  const containerButton = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView, mainControls]);

  return (
    <div>
      <section className={styles.section__four__container}>
        <div ref={ref} className={styles.container__center__section}>
          <IndividualAnimation onDelay={0.6}>
            <div className={styles.responsive__tech__stack__text}>
              <h1 className={styles.tech__text}>Tech</h1>
              <h1 className={styles.stack__text}>Stack</h1>
            </div>
          </IndividualAnimation>
          <div className={styles.container__tech__stack}>
            <DplaceMarquee />
          </div>
        </div>

        <div className={styles.button__container}>
          <div ref={ref}>
            <IndividualAnimation onDelay={0.6}>
              <Button onText={"Github"} onDplace={true} onGithub={true} />
            </IndividualAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionFour;
