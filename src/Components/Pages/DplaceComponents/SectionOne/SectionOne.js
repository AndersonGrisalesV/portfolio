import React from "react";

import styles from "./SectionOne.module.css";
import Button from "../../../shared/UIElements/Button";

const SectionOne = () => {
  return (
    <div>
      <section className={styles.section__five__container} id="contact">
        <div className={styles.container__center__section}>
          <div className={styles.container__getin__touch__text}>
            <h1 className={styles.place__text}>place</h1>
            <div className={styles.container__image}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1684359106/DplaceLogo_jbfqhp.svg"
                alt="Dplace_image"
                className={styles.social__media__image}
              />
            </div>
          </div>

          <div className={styles.container__description__text}>
            <p className={styles.description__text}>
              Dplace website is an innovative web application that enables users
              to share their experiences through photos and locations for others
              to see and visit. Creating an account on the website opens the
              door for users to share places and engage with other people, the
              website gives users the ability to view each location on Google
              Maps, comment, like, and share posts, Dplace creates a dynamic and
              interactive community of explorers. Join us on our journey to see
              the beauty of the world through each other's experiences.Dplace
              website is an innovative web application that enables users to
              share their experiences through photos and locations for others to
              see and visit. Creating an account on the website opens the door
              for users to share places and engage with other people, the
              website gives users the ability to view each location on Google
              Maps, comment, like, and share posts, Dplace creates a dynamic and
              interactive community of explorers. Join us on our journey to see
              the beauty of the world through each other's experiences.
            </p>
          </div>

          <div className={styles.container__buttons}>
            <div className={styles.button__container}>
              <Button onText={"Demo"} onDplaceColor={true}></Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionOne;
