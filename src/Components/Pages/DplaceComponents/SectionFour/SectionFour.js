import React from "react";

import styles from "./SectionFour.module.css";
import DplaceMarquee from "../../../shared/Marquee/DplaceMarquee";
import Button from "../../../shared/UIElements/Button";

const SectionFour = () => {
  return (
    <div>
      <section className={styles.section__four__container} id="contact">
        <div className={styles.container__center__section}>
          <div className={styles.responsive__some__features__text}>
            <h1 className={styles.tech__text}>Tech</h1>
            <h1 className={styles.stack__text}>Stack</h1>
          </div>

          <div className={styles.container__tech__stack}>
            <DplaceMarquee />
          </div>
        </div>

        <div className={styles.container__buttons}>
          <div className={styles.button__container}>
            <Button onText={"Github"} onDplaceColor={true}></Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionFour;
