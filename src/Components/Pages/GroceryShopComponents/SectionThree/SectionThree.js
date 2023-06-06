import React from "react";

import Card from "../../../shared/UIElements/Card";
import styles from "./SectionThree.module.css";

const SectionThree = () => {
  return (
    <div>
      <section className={styles.section__three__container}>
        <div className={styles.container__left__section}>
          <div className={styles.container__starting__understanding__the__text}>
            <h1 className={styles.starting__text}>Starting</h1>
            <h1 className={styles.the__text}>the design</h1>
          </div>

          <div className={styles.container__description__text}>
            <p className={styles.description__text}>
              My process starts with researching and analyzing user needs. After
              sketching out the basic layout, I create paper wireframes and then
              move on to digital wireframes using tools such as Figma or
              AdobeXD. Next, I create a low-fidelity prototype to test user flow
              and interactions. Finally, I conduct usability studies with a
              small group of users and iterate the process until the design
              meets their needs.
            </p>
          </div>
        </div>
        <div className={styles.container__right__section}>
          <div className={styles.container__images}>
            <Card
              onImg={
                "https://res.cloudinary.com/doa4qiuc2/image/upload/v1685742985/Portfolio/projects/GroceryShop/GroceryShopimageSectionThree_jimsx4.svg"
              }
              onImgDescription={"grocery shop section three images"}
              onCardHealthyMindset={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionThree;
