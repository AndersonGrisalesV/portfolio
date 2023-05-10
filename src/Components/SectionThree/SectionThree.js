import React from "react";

import styles from "./SectionThree.module.css";
import Card from "../shared/UIElements/Card";

const SectionThree = () => {
  return (
    <div>
      <section className={styles.section__three__container}>
        <div className={styles.container__cards__left}>
          <Card
            onImg={
              "https://res.cloudinary.com/doa4qiuc2/image/upload/v1683588535/Portfolio/projects/dplace_aromem.png"
            }
            onImgDescription={"dplace project"}
            onText={
              "Dplace is a web application to share and interact with other people's experiences around the world."
            }
          />

          <Card
            onImg={
              "https://res.cloudinary.com/doa4qiuc2/image/upload/v1683588597/Portfolio/projects/code_finder_k0s0ze.png"
            }
            onImgDescription={"codefinder project"}
            onText={
              "CodeFinder's cross-platform design offers coding tutorials, official documentation, and more to help people learn how to code."
            }
          />
        </div>

        <div className={styles.container__cards__right}>
          <Card
            onImg={
              "https://res.cloudinary.com/doa4qiuc2/image/upload/v1683588571/Portfolio/projects/healthy_mindset_ee0fsi.png"
            }
            onImgDescription={"healthy mindset project"}
            onText={
              "Healthy Mindset's cross-platform design provides counseling services, mental health assessments, and self-help tools for people in need."
            }
          />

          <Card
            onImg={
              "https://res.cloudinary.com/doa4qiuc2/image/upload/v1683676476/Image_drj61f.svg"
            }
            onImgDescription={"grocery shop project"}
            onText={
              "The Grocery Shop is an app design that offers affordable grocery products, with a focus on convenience and easy payment options."
            }
          />
        </div>
      </section>
    </div>
  );
};

export default SectionThree;
