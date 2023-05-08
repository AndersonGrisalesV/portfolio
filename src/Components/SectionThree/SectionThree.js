import React from "react";

import styles from "./SectionThree.module.css";
import Card from "../shared/UIElements/Card";

const SectionThree = () => {
  return (
    <div>
      <section className={styles.section__three__container}>
        <div className={styles.container__left__section}>
          <Card
            onImg={
              "https://res.cloudinary.com/doa4qiuc2/image/upload/v1683588535/Portfolio/projects/dplace_aromem.png"
            }
            onImgDescription={"dplace project"}
            onText={
              "Dplace is a web application to share and interact with other people's experiences around the world."
            }
          />
        </div>
        <div className={styles.container__right__section}></div>
      </section>
    </div>
  );
};

export default SectionThree;
