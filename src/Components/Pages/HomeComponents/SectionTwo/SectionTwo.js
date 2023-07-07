import React, { useEffect, useRef, useState } from "react";

import SkillsMarquee from "../../../shared/Marquee/SkillsMarquee";
import IndividualAnimation from "../../../shared/ScrollAnimation/IndividualAnimation";
import styles from "./SectionTwo.module.css";

const SectionTwo = () => {
  const marqueeRef = useRef(null);
  const [isMarqueeVisible, setIsMarqueeVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Adjust this threshold as needed
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
    <div id="expertise">
      <section className={styles.section__two__container} id="expertise">
        <IndividualAnimation onDelay={0.8}>
          <div className={styles.container__left__section}>
            <div className={styles.responsive__skills__expertise__text}>
              <h1 className={styles.skills__text}>Skills &</h1>
              <h1 className={styles.expertise__text}>Expertise</h1>
            </div>

            <div>
              <p className={styles.description__text}>
                Ever since my high school years, I have been fascinated by
                technology and the boundless possibilities of the internet.
                Building websites is one of the most exciting things for me, and
                I approach both front-end and back-end development with a
                relentless drive to learn and innovate.
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
        </IndividualAnimation>
        <div className={styles.container__skills__section} ref={marqueeRef}>
          {isMarqueeVisible && <SkillsMarquee />}
        </div>
      </section>

      <div className={styles.responsive__marquee}>
        <SkillsMarquee />
      </div>
    </div>
  );
};

export default SectionTwo;
