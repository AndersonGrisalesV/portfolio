import React, { useState, useEffect } from "react";

import Card from "../../../shared/UIElements/Card";
import styles from "./SectionThree.module.css";

const SectionThree = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    handleResize(); // Call it initially to set the initial state

    window.addEventListener("resize", handleResize); // Attach the event listener

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardCodeFinder = (
    <Card
      onImg={
        "https://res.cloudinary.com/doa4qiuc2/image/upload/v1683749039/codefinder_s8egbl.svg"
      }
      onImgDescription={"codefinder project"}
      onText={
        "CodeFinder's cross-platform design offers coding tutorials, official documentation, and more to help people learn how to code."
      }
    />
  );

  const cardHealthyMindset = (
    <Card
      onImg={
        "https://res.cloudinary.com/doa4qiuc2/image/upload/v1683748837/healthy_mindset_zf4jwe.svg"
      }
      onImgDescription={"healthy mindset project"}
      onText={
        "Healthy Mindset's cross-platform design provides counseling services, mental health assessments, and self-help tools for people in need."
      }
      onHealthyMindset={true}
    />
  );

  return (
    <div>
      <div className={styles.responsive__my__projects__text}>
        <h1 className={styles.my__text}>My</h1>
        <h1 className={styles.projects__text}>Projects</h1>
      </div>
      <section className={styles.section__three__container} id="work">
        <div className={styles.container__cards__left}>
          <Card
            onImg={
              "https://res.cloudinary.com/doa4qiuc2/image/upload/v1683748938/dplace_baoklg.svg"
            }
            onImgDescription={"dplace project"}
            onText={
              "Dplace is a web application to share and interact with other people's experiences around the world."
            }
            onDplace={true}
          />
          {isMobile ? cardHealthyMindset : cardCodeFinder}
        </div>

        <div className={styles.container__cards__right}>
          <div className={styles.my__projects__text__container}>
            <h1 className={styles.my__text}>My</h1>
            <h1 className={styles.projects__text}>Projects</h1>
          </div>
          {isMobile ? cardCodeFinder : cardHealthyMindset}

          <Card
            onImg={
              "https://res.cloudinary.com/doa4qiuc2/image/upload/v1683748742/grocery_shop_gliuhh.svg"
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
