import React, { useEffect, useRef, useState } from "react";

import DplaceMarquee from "../../../shared/Marquee/DplaceMarquee";

import IndividualAnimation from "../../../shared/ScrollAnimation/IndividualAnimation";
import Button from "../../../shared/UIElements/Button";

import styles from "./SectionFour.module.css";

const SectionFour = () => {
  const marqueeRef = useRef(null);
  const [isMarqueeVisible, setIsMarqueeVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        setIsMarqueeVisible(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const currentMarqueeRef = marqueeRef.current;

    if (currentMarqueeRef) {
      observer.observe(currentMarqueeRef);
    }

    return () => {
      if (currentMarqueeRef) {
        observer.unobserve(currentMarqueeRef);
      }
    };
  }, []);

  return (
    <section className={styles.section__four__container}>
      <div className={styles.container__center__section}>
        <IndividualAnimation onDelay={0.6}>
          <div className={styles.responsive__tech__stack__text}>
            <h1 className={styles.tech__text}>Tech</h1>
            <h1 className={styles.stack__text}>Stack</h1>
          </div>
        </IndividualAnimation>

        <div className={styles.container__tech__stack} ref={marqueeRef}>
          {isMarqueeVisible && <DplaceMarquee onPlay={isMarqueeVisible} />}
        </div>
      </div>

      <div className={styles.button__container}>
        <IndividualAnimation onDelay={0.6}>
          <Button onText={"Github"} onDplace={true} onGithub={true} />
        </IndividualAnimation>
      </div>
    </section>
  );
};

export default SectionFour;
