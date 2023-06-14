import React from "react";

import styles from "./SectionSix.module.css";

const SectionSix = () => {
  return (
    <div>
      <section className={styles.section__six__container}>
        <div className={styles.container__left__section}>
          <div className={styles.container__images}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685647872/Portfolio/projects/HealthyMindset/healthyMindsetSectionSixOne_vzpfsj.svg"
              alt="Healthy_Mindset_Section_Six_One_images"
              className={styles.social__media__image}
            />
          </div>
        </div>
        <div className={styles.container__right__section}>
          <div className={styles.container__images}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685647876/Portfolio/projects/HealthyMindset/healthyMindsetSectionSixTwo_p6selp.svg"
              alt="Healthy_Mindset_Section_Six_Two_images"
              className={styles.social__media__image}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionSix;