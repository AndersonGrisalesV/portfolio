import React from "react";

import Button from "../../../shared/UIElements/Button";

import IndividualAnimation from "../../../shared/ScrollAnimation/IndividualAnimation";
import styles from "./SectionFive.module.css";

const SectionFive = () => {
  const handleLinkedInClick = () => {
    // Handle click for LinkedIn
    window.open(
      "https://www.linkedin.com/in/anderson-grisales-vargas-2682aa270",
      "_blank"
    );
  };

  const handleGithubClick = () => {
    // Handle click for GitHub
    window.open("https://github.com/AndersonGrisalesV", "_blank");
  };

  const handleGmailClick = () => {
    // Handle click for Gmail
    window.open("mailto:grisalesvargasanderson@gmail.com");
  };

  return (
    <div>
      <section className={styles.section__five__container} id="contact">
        <div className={styles.container__center__section}>
          <IndividualAnimation onDelay={0.4}>
            <div className={styles.container__getin__touch__text}>
              <h1 className={styles.getin__text}>Get In</h1>
              <h1 className={styles.touch__text}>Touch</h1>
            </div>
          </IndividualAnimation>
          <IndividualAnimation onDelay={0.4}>
            <div className={styles.container__description__text}>
              <p className={styles.description__text}>
                Let's work together, and build something great!
                <br />
                Drop me a message
                <br />
              </p>
            </div>
          </IndividualAnimation>
          <div className={styles.container__buttons}>
            <IndividualAnimation onDelay={0.6}>
              <div className={styles.button__container}>
                <Button onText={"Let's talk!"} onContact={true} />
              </div>
            </IndividualAnimation>
            <IndividualAnimation onDelay={0.8}>
              <div className={styles.container__social__media}>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1684183917/Portfolio/ButtonLinkedIn_zkp3zk.svg"
                    alt="LinkedIn"
                    onClick={handleLinkedInClick}
                    className={styles.social__media__image}
                  />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1684183918/Portfolio/ButtonGithub_gg2fhm.svg"
                    alt="Github"
                    onClick={handleGithubClick}
                    className={styles.social__media__image}
                  />
                </a>
                <a href="mailto:grisalesvargasanderson@gmail.com" custom={2}>
                  <img
                    src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1684183917/Portfolio/ButtonGmail_vv0rur.svg"
                    alt="Gmail"
                    onClick={handleGmailClick}
                    className={styles.social__media__image}
                  />
                </a>
              </div>
            </IndividualAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionFive;
