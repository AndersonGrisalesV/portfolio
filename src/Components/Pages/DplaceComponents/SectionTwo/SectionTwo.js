import { React } from "react";

import IndividualAnimation from "../../../shared/ScrollAnimation/IndividualAnimation";

import styles from "./SectionTwo.module.css";

const SectionTwo = () => {
  return (
    <section className={styles.section__two__container}>
      <div className={styles.container__center__section}>
        <div className={styles.container__image}>
          <IndividualAnimation onDelay={0.6}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1684444225/Portfolio/projects/Dplace/Dplace_SectionTwo_ak0ydx.svg"
              alt="Dplace_sectiontwo_image"
              className={styles.social__media__image}
              loading="lazy"
            />
          </IndividualAnimation>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
