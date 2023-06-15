import React from "react";

import styles from "./SectionFive.module.css";
import Button from "../../../shared/UIElements/Button";
import ScrollAnimation from "../../../shared/ScrollAnimation/ScrollAnimation";

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
    <ScrollAnimation>
      <section className={styles.section__five__container} id="contact">
        <div className={styles.container__center__section}>
          <div className={styles.container__getin__touch__text}>
            <h1 className={styles.getin__text}>Get In</h1>
            <h1 className={styles.touch__text}>Touch</h1>
          </div>

          <div className={styles.container__description__text}>
            <p className={styles.description__text}>
              Let's work together, and build something great!
              <br />
              Drop me a message
              <br />
            </p>
          </div>

          <div className={styles.container__buttons}>
            <div className={styles.button__container}>
              <Button onText={"Let's talk!"}></Button>
            </div>

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
              <a href="mailto:your-email@example.com">
                <img
                  src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1684183917/Portfolio/ButtonGmail_vv0rur.svg"
                  alt="Gmail"
                  onClick={handleGmailClick}
                  className={styles.social__media__image}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default SectionFive;
