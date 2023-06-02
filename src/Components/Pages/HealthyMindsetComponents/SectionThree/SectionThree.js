import React from "react";

import styles from "./SectionThree.module.css";
import Card from "../../../shared/UIElements/Card";

const SectionTwo = () => {
  return (
    <div>
      <section className={styles.section__three__container}>
        <div className={styles.container__left__section}>
          <div className={styles.container__exploring__user__text}>
            <h1 className={styles.exploring__text}>Exploring</h1>
            <h1 className={styles.user__text}>user needs</h1>
          </div>

          <div className={styles.container__description__text}>
            <p className={styles.description__text}>
              The research stage aimed to gather insights about the mental
              health needs and pain points of the target users. This was
              achieved through user interviews with a diverse group of
              individuals with varying experiences in mental health. The
              interviews revealed that users desired not just access to mental
              health services but also a sense of community and peer support.
              Based on the findings, an easy-to-use tool was design, one that
              integrates counseling services, self-help tools, and peer support
              to promote structured management of mental health services. The
              study prioritized the user's needs, which helped inform design
              decisions for the app and responsive website.
            </p>
          </div>
        </div>
        <div className={styles.container__right__section}>
          <div className={styles.container__images}>
            <Card
              onImg={
                "https://res.cloudinary.com/doa4qiuc2/image/upload/v1685647874/Portfolio/projects/HealthyMindset/healthyMindsetSectionThree_nsoqle.svg"
              }
              onImgDescription={"healthy mindset section three image"}
              onCardHealthyMindset={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionTwo;
