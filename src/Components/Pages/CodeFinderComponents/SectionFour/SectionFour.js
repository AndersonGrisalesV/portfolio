import React from "react";

import Card from "../../../shared/UIElements/Card";
import styles from "./SectionFour.module.css";

const SectionFour = () => {
  return (
    <div>
      <section className={styles.section__four__container}>
        <div className={styles.container__left__section}>
          <div className={styles.container__images}>
            <Card
              onImg={
                "https://res.cloudinary.com/doa4qiuc2/image/upload/v1685742499/Portfolio/projects/CodeFinder/Group_195_xvcyks.svg"
              }
              onImgDescription={"code finder section four image"}
              onCardCodeFinder={true}
            />
          </div>
        </div>
        <div className={styles.container__right__section}>
          <div className={styles.container__digital__wireframes__text}>
            <h1 className={styles.digital__text}>Digital</h1>
            <h1 className={styles.wireframes__text}>wireframes</h1>
          </div>

          <div className={styles.container__description__text}>
            <p className={styles.description__text}>
              To improve the user experience of CodeFinder users, I created
              paper wireframes for each screen and prioritized taking in mind a
              possible dark theme as well as efficiency, filtering and sorting
              flow. Designs for additional screen sizes were developed to ensure
              the site's full responsiveness. Low-fidelity prototypes were
              created, and feedback from team members was taken into account to
              address user pain points.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionFour;
