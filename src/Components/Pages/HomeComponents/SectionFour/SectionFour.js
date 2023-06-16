import React from "react";

import styles from "./SectionFour.module.css";
import ScrollAnimation from "../../../shared/ScrollAnimation/ScrollAnimation";

import { motion } from "framer-motion";

const SectionFour = () => {
  return (
    <div>
      <ScrollAnimation>
        <div className={styles.responsive__container__left__section}>
          <div className={styles.responsive__container__kanji__section}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1683757800/Portfolio/Lovekanji_bpvmac.svg"
              alt="kanji love"
            />
          </div>
        </div>
      </ScrollAnimation>

      <section className={styles.section__four__container} id="about">
        <div className={styles.container__left__section}>
          <div className={styles.container__kanji__section}>
            <motion.img
              initial={{
                scale: 0,
              }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 5,
                duration: 2,
                delay: 0,
              }}
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1683757800/Portfolio/Lovekanji_bpvmac.svg"
              alt="kanji love"
            />
          </div>
        </div>

        <div className={styles.container__right__section}>
          <ScrollAnimation>
            <div className={styles.responsive__about__me__text}>
              <h1 className={styles.about__text}>About</h1>
              <h1 className={styles.me__text}>Me</h1>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div>
              <p className={styles.description__text}>
                Greetings! I am Anderson and I consider myself a lifelong
                learner of the world and the internet. From an early age, I have
                been passionate about web development, and my ultimate dream is
                to make a contribution towards the progress of technology that
                can aid in space exploration. As a systems engineering graduate
                turned MERN stack web developer and UX/UI designer, I have a
                deep passion for exploring the latest technologies and pushing
                the boundaries of what is possible. I am always seeking ways to
                enhance my skills and broaden my horizons, driven by a desire to
                create easy to use and innovative solutions.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default SectionFour;
