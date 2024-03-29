import React, { useRef } from "react";

import Button from "../../../shared/UIElements/Button";

import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import Password from "../../../shared/Password/Password";

import styles from "./SectionOne.module.css";

import LogoLoading from "../../../shared/NavBar/Logos/LogoLoading.svg";
import MascotPlaceHolder from "../../../shared/NavBar/Logos/MascotPlaceHolder.svg";

const SectionOne = () => {
  const texts = useMemo(() => [" ", "code", " ", "design", " ", "learn"], []);

  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const [splineError, setSplineError] = useState(false);

  const [delayLoader, setDelayLoader] = useState(true);

  setTimeout(() => {
    setDelayLoader(false);
  }, 5000);

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

  const [currentTextIndex, setCurrentTextIndex] = useState(() => {
    const initialIndex = Math.floor(Math.random() * texts.length);
    return initialIndex >= 0 && initialIndex < texts.length ? initialIndex : 0;
  });
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let timeoutId;

    const typeText = () => {
      if (
        currentTextIndex !== null &&
        currentTextIndex >= 0 &&
        currentTextIndex < texts.length &&
        currentText.length < texts[currentTextIndex].length
      ) {
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handleResize = () => setIsMobile(mq.matches);
    mq.addEventListener("change", handleResize);

    if (!isMobile) {
      mq.removeEventListener("change", handleResize);
    }
  }, [isMobile]);

  const mascot = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectByName("Camera");

    mascot.current = obj;
  }

  useEffect(() => {
    setTimeout(() => {
      if (mascot.current === undefined) {
        setSplineError(true);
      }
    }, 9000);
  }, []);

  const animationRef = useRef(null);
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Adjust this threshold as needed
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        setIsAnimationVisible(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const currentMarqueeRef = animationRef.current;

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
              <h1 className={styles.design__text}>
                {currentText}
                <span className={styles.cursor}>|</span>
              </h1>
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

          <motion.div
            transition={{
              duration: 6,
              delay: 1.8,
            }}
            className={styles.container__right__section}
            ref={animationRef}
          >
            <div
              className={
                delayLoader || isMobile
                  ? styles.container__loader
                  : styles.container__hidden
              }
            >
              <img
                className={
                  delayLoader && !isMobile
                    ? styles.image__logo
                    : styles.image__logo__hidden
                }
                src={LogoLoading}
                alt="Logo"
                loading="lazy"
              />

              <img
                className={
                  isMobile ? styles.image__mascot : styles.image__mascot__hidden
                }
                src={MascotPlaceHolder}
                alt="Logo"
                loading="lazy"
              />
            </div>
            {!isMobile && (
              <React.Fragment>
                {delayLoader ? (
                  <div className={styles.container__loader}>
                    <img
                      className={styles.image__logo}
                      src={LogoLoading}
                      alt="Logo"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <React.Fragment>
                    {splineError ? (
                      <div className={styles.container__loader}>
                        <img
                          className={
                            splineError
                              ? styles.image__mascot__failed__spline
                              : styles.image__mascot__hidden
                          }
                          src={MascotPlaceHolder}
                          alt="Logo"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <Spline
                        onLoad={onLoad}
                        style={{
                          width: "100%",
                          height: "105%",
                          visibility: isAnimationVisible ? "visible" : "hidden",
                        }}
                        scene="https://draft.spline.design/tivv5dBVV4Tq87Ov/scene.splinecode"
                      />
                    )}
                  </React.Fragment>
                )}
              </React.Fragment>
            )}
          </motion.div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default SectionOne;
