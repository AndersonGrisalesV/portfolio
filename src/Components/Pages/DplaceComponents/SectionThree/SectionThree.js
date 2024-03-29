import React, { useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";
import IndividualAnimation from "../../../shared/ScrollAnimation/IndividualAnimation";

import styles from "./SectionThree.module.css";

const features = [
  "Login/SignUp User Account",
  "Login SingIn With Email",
  "Update Profile Name/Email/Password/ProfilePicture",
  "Delete Own User",
  "Add New Posts",
  "Update Post Title/Description/Address/Image/PostDate",
  "Like/Unlike Posts",
  "Search Posts by Title",
  "Delete Own Posts",
  "Add New Comments on Posts",
  "Update Comment Text/CommentDate",
  "Delete Own Comments",
  "Map integration: Places shared by users are displayed on Google maps for easy navigation and visualization",
];

const SectionThree = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  const container = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const containerTitle = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section className={styles.section__three__container}>
      <div className={styles.container__center__section}>
        <motion.div
          variants={containerTitle}
          initial="hidden"
          animate={mainControls}
          className={styles.responsive__some__features__text}
        >
          <h1 className={styles.some__text}>Some</h1>
          <h1 className={styles.features__text}>Features</h1>
        </motion.div>

        <div ref={ref}>
          <motion.ul
            variants={container}
            initial="hidden"
            animate={mainControls}
            className={styles.description__text}
          >
            {[...features].map((feature, index) => (
              <motion.li
                key={index}
                variants={item}
                whileHover={{
                  scale: 1.08,
                  x: 0,
                  transition: { duration: 0.05 },
                }}
              >
                {feature}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className={styles.container__images}>
          <IndividualAnimation onDelay={0.6}>
            <div className={styles.images__left}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685400194/Portfolio/projects/Dplace/LeftImages_syimlg.svg"
                alt="Dplace_left_images"
                className={styles.social__media__image}
                loading="lazy"
              />
            </div>
          </IndividualAnimation>
          <IndividualAnimation onDelay={0.6}>
            <div className={styles.images__right}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685400195/Portfolio/projects/Dplace/RightImages_rtbmi4.svg"
                alt="Dplace_right_images"
                className={styles.social__media__image}
                loading="lazy"
              />
            </div>
          </IndividualAnimation>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
