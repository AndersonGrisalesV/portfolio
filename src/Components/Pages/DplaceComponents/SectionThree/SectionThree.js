import React, { useEffect, useRef } from "react";

import IndividualAnimation from "../../../shared/ScrollAnimation/IndividualAnimation";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "./SectionThree.module.css";

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
    <div>
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
              <motion.li
                key={0}
                variants={item}
                whileHover={{
                  scale: 1.08,
                  x: 0,
                  transition: { duration: 0.05 },
                }}
              >
                Login/SignUp User Account
              </motion.li>
              <motion.li
                key={1}
                variants={item}
                whileHover={{
                  scale: 1.08,
                  x: 0,
                  transition: { duration: 0.05 },
                }}
              >
                Login SingIn With Email
              </motion.li>
              <motion.li
                key={2}
                variants={item}
                whileHover={{
                  scale: 1.08,
                  x: 0,
                  transition: { duration: 0.05 },
                }}
              >
                Update Profile Name/Email/Password/ProfilePicture
              </motion.li>
              <motion.li
                key={3}
                variants={item}
                whileHover={{
                  scale: 1.08,
                  x: 0,
                  transition: { duration: 0.05 },
                }}
              >
                Delete Own User
              </motion.li>
              <motion.li
                key={4}
                variants={item}
                whileHover={{
                  scale: 1.08,
                  x: 0,
                  transition: { duration: 0.05 },
                }}
              >
                Add New Posts
              </motion.li>
              <motion.li
                key={5}
                variants={item}
                whileHover={{
                  scale: 1.08,
                  x: 0,
                  transition: { duration: 0.05 },
                }}
              >
                Update Post Title/Description/Address/Image/PostDate
              </motion.li>
              <motion.li
                key={6}
                variants={item}
                whileHover={{
                  scale: 1.08,
                  x: 0,
                  transition: { duration: 0.05 },
                }}
              >
                Like/Unlike Posts
              </motion.li>
              <motion.li
                key={7}
                variants={item}
                whileHover={{
                  scale: 1.08,
                  x: 0,
                  transition: { duration: 0.05 },
                }}
              >
                Search Posts by Title
              </motion.li>
              <motion.li
                key={8}
                variants={item}
                whileHover={{
                  scale: 1.08,
                  x: 0,
                  transition: { duration: 0.05 },
                }}
              >
                Delete Own Posts
              </motion.li>
              <motion.li
                key={9}
                variants={item}
                whileHover={{
                  scale: 1.08,
                  x: 0,
                  transition: { duration: 0.05 },
                }}
              >
                Add New Comments on Posts
              </motion.li>
              <motion.li
                key={10}
                variants={item}
                whileHover={{
                  scale: 1.08,
                  x: 0,
                  transition: { duration: 0.05 },
                }}
              >
                Update Comment Text/CommentDate
              </motion.li>
              <motion.li
                key={11}
                variants={item}
                whileHover={{
                  scale: 1.08,
                  x: 0,
                  transition: { duration: 0.05 },
                }}
              >
                Delete Own Comments
              </motion.li>
              <motion.li
                key={12}
                variants={item}
                whileHover={{
                  scale: 1.08,
                  x: 0,
                  transition: { duration: 0.05 },
                }}
              >
                Map integration: Places shared by users are displayed on Google
                maps for easy navigation and visualization
              </motion.li>
            </motion.ul>
          </div>
          <div className={styles.container__images}>
            <IndividualAnimation onDelay={0.6}>
              <div className={styles.images__left}>
                <img
                  src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685400194/Portfolio/projects/Dplace/LeftImages_syimlg.svg"
                  alt="Dplace_left_images"
                  className={styles.social__media__image}
                />
              </div>
            </IndividualAnimation>
            <IndividualAnimation onDelay={0.6}>
              <div className={styles.images__right}>
                <img
                  src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685400195/Portfolio/projects/Dplace/RightImages_rtbmi4.svg"
                  alt="Dplace_right_images"
                  className={styles.social__media__image}
                />
              </div>
            </IndividualAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionThree;
