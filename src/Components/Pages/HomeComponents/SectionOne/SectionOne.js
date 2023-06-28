import React from "react";

import Button from "../../../shared/UIElements/Button";
import Spline from "@splinetool/react-spline";
import ReactDOM from "react-dom";
import Animation from "./Animation";
import { motion } from "framer-motion";

import styles from "./SectionOne.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import Password from "../../../shared/Password/Password";
import Backdrop from "../../../shared/UIElements/Backdrop";
import SideDrawer from "../../../shared/UIElements/SideDrawer";

const SectionOne = () => {
  const [openPasswordModal, setOpenPasswordModal] = useState(false);

  const handleOpenModalPassword = () => {
    setOpenPasswordModal(true);
  };

  const closeDrawerHandler = () => {
    setOpenPasswordModal(false);
  };

  useEffect(() => {
    if (openPasswordModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [openPasswordModal]);

  const containerGreetingText = {
    hidden: { opacity: 0, y: -20 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.8,
      },
    },
  };

  const containerNameLets = {
    hidden: { opacity: 0, y: -20 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2,
      },
    },
  };

  const containerDescriptionText = {
    hidden: { opacity: 0, y: -20 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2.2,
      },
    },
  };

  const containerButton = {
    hidden: { opacity: 0, y: -20 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2.4,
      },
    },
  };
  const texts = useMemo(() => [" ", "code", " ", "design", " ", "learn"], []);
  const [currentTextIndex, setCurrentTextIndex] = useState(() =>
    Math.floor(Math.random() * texts.length)
  );
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let timeoutId;

    const typeText = () => {
      if (currentText.length < texts[currentTextIndex].length) {
        setCurrentText(
          (prevText) => prevText + texts[currentTextIndex][prevText.length]
        );
        timeoutId = setTimeout(typeText, 180); // Adjust the delay as needed
      } else {
        timeoutId = setTimeout(() => {
          setCurrentText("");
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          timeoutId = setTimeout(typeText, 1000); // Delay before starting the next text
        }, 3000);
      }
    };

    timeoutId = setTimeout(typeText, 180); // Initial delay before starting the first text

    return () => {
      clearTimeout(timeoutId);
    };
  }, [texts, currentTextIndex, currentText]);

  return (
    <React.Fragment>
      {openPasswordModal && (
        <div className={styles.container__password}>
          <Password onCloseDrawerHandler={closeDrawerHandler} />
        </div>
      )}

      <div>
        <section className={styles.section__container} id="home">
          <div className={styles.container__left__section}>
            <motion.div
              variants={containerGreetingText}
              initial="hidden"
              animate="show"
            >
              <h5 className={styles.greeting__text}>Hi, my name is</h5>
            </motion.div>

            <motion.div
              variants={containerNameLets}
              initial="hidden"
              animate="show"
              className={styles.responsive__name__text}
            >
              <h1 className={styles.name__text}>Anderson Grisales</h1>
            </motion.div>

            <motion.div
              variants={containerNameLets}
              initial="hidden"
              animate="show"
              className={styles.responsive__lets__design__text}
            >
              <h1 className={styles.lets__text}>Let's</h1>
              <h1 className={styles.design__text}>{currentText}</h1>
              <span className={styles.cursor}>|</span>
            </motion.div>

            <motion.div
              variants={containerDescriptionText}
              initial="hidden"
              animate="show"
            >
              <p className={styles.description__text}>
                I'm a systems engineer turned web developer and UX/UI designer
                who specializes in crafting exceptional digital experiences. My
                passion for building digital products is driven by a strong
                emphasis on human-centered products and designs.
              </p>
            </motion.div>

            <motion.div
              variants={containerButton}
              initial="hidden"
              animate="show"
              className={styles.button__container}
            >
              <Button
                onText={"Resume"}
                onResume={true}
                onHandleOpenModalPassword={handleOpenModalPassword}
              />
            </motion.div>
          </div>
          {/* </ScrollAnimation> */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 20,
              duration: 2,
              delay: 1.8,
            }}
            className={styles.container__right__section}
          >
            <Spline
              style={{ width: "100%", height: "105%" }}
              scene="https://draft.spline.design/QEyFXPMY8XipyAPj/scene.splinecode"
              // scene="https://draft.spline.design/xrVUj38x49AYHkQ3/scene.splinecode"
              //scene="https://draft.spline.design/ke-925JRMxdge4-o/scene.splinecode"
            />
          </motion.div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default SectionOne;
