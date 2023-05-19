import React from "react";

import styles from "./SectionTwo.module.css";

const SectionTwo = () => {
  return (
    <div>
      <section className={styles.section__two__container} id="contact">
        <div className={styles.container__center__section}>
          <div className={styles.container__image}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1684444225/Dplace_SectionTwo_ak0ydx.svg"
              alt="Dplace_sectiontwo_image"
              className={styles.social__media__image}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionTwo;
