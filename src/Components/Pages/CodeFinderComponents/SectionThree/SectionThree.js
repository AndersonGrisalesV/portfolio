import React from "react";

import Card from "../../../shared/UIElements/Card";
import styles from "./SectionThree.module.css";

const SectionThree = () => {
  return (
    <div>
      <section className={styles.section__three__container}>
        <div className={styles.container__left__section}>
          <div className={styles.container__images}>
            <Card
              onImg={
                "https://res.cloudinary.com/doa4qiuc2/image/upload/v1685742493/Portfolio/projects/CodeFinder/Group_194_cpmevy.svg"
              }
              onImgDescription={"code finder section three image"}
              onCardCodeFinder={true}
            />
          </div>
        </div>
        <div className={styles.container__right__section}>
          <div className={styles.container__identifying__requirements__text}>
            <h1 className={styles.identifying__text}>Identifying user</h1>
            <h1 className={styles.requirements__text}>requirements</h1>
          </div>

          <div className={styles.container__description__text}>
            <p className={styles.description__text}>
              After the emphasize phase and preliminary competitive audit with
              the user I gained a better understanding of the target user's
              needs and discovered that many of them struggle to find the right
              coding tutorials due to scattered information on the internet. I
              also found that many coding websites either offer lengthy courses
              or fail to provide tutorials or solutions that address the user's
              specific needs. As a result, what should be an enjoyable and
              productive learning experience becomes frustrating and defeating
              for users looking to advance their skills.
              <br />
              <br />A sitemap was created to tackle users' difficulties with
              website filters and sorting options, guiding information
              architecture decisions and improving overall navigation. The
              selected structure aimed to simplify the user experience, making
              it easy to use.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionThree;
