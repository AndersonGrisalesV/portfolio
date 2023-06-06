import React from "react";

import styles from "./SectionOne.module.css";

const SectionOne = () => {
  return (
    <div>
      <section className={styles.section__one__container}>
        <div className={styles.container__center__section}>
          <div className={styles.container__healthy__mindset__image__text}>
            <h1 className={styles.healthy__mindset__text}>Healthy</h1>
            <div className={styles.container__image__logo}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685647871/Portfolio/projects/HealthyMindset/healthyMindsetLogo_vdfbtg.svg"
                alt="Healthy_Mindset_Logo_Text"
              />
            </div>
            <h1 className={styles.healthy__mindset__text}>Mindset</h1>
          </div>

          <div className={styles.container__image}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685647875/Portfolio/projects/HealthyMindset/healthyMindsetSectionOne_rrrfb6.svg"
              alt="Healthy_Mindset_image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionOne;
