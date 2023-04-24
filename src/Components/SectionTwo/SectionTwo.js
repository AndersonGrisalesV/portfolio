import React from "react";
import Button from "../shared/UIElements/Button";
import Spline from "@splinetool/react-spline";
import Marquee from "react-fast-marquee";
import styles from "./SectionTwo.module.css";

const SectionTwo = () => {
  return (
    <div>
      <section className={styles.section__two__container}>
        <div className={styles.container__left__section}>
          <div className={styles.responsive__skills__expertise__text}>
            <h1 className={styles.skills__text}>Skills &</h1>
            <h1 className={styles.expertise__text}>Expertise</h1>
          </div>

          <div>
            <p className={styles.description__text}>
              Ever since my high school years, I have been fascinated by
              technology and the boundless possibilities of the internet.
              Building websites is one of the most exciting things for me, and I
              approach both front-end and back-end development with a relentless
              drive to learn and innovate.
              <br />
              <br />
              Additionally, my proficiency in the MERN stack as well as UX/UI
              design skills allows me to seamlessly integrate my knowledge,
              resulting in the best possible solutions.
              <br />
              <br />
              Here are a few technologies I've been working with recently:
            </p>
          </div>
        </div>
        {/* <div className={styles.container__right__section}> */}
        {/* <Spline
            style={{ width: "100%", height: "100%" }}
            scene="https://draft.spline.design/cKkZ8nclvPv8ZdJ6/scene.splinecode"
          /> */}

        <div className={styles.container__skills__section}>
          <Marquee speed={100}>
            <div className={styles.image__wrapper}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/React_svihuw.png"
                alt="React"
              />
            </div>
          </Marquee>
          <Marquee speed={100}>
            <div className={styles.image__wrapper}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/NodeJS_bhqj1m.png"
                alt="NodeJS"
              />
            </div>
            <div className={styles.image__wrapper}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373587/Portfolio/HTML_qp3lay.png"
                alt="HTML"
              />
            </div>
          </Marquee>
          <Marquee speed={100}>
            <div className={styles.image__wrapper}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373587/Portfolio/CSS_tjxjw6.png"
                alt="CSS"
              />
            </div>
            <div className={styles.image__wrapper}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373587/Portfolio/Javascript_evjufn.png"
                alt="Javascript"
              />
            </div>
            <div className={styles.image__wrapper}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/ExpressJS_zixpin.png"
                alt="ExpressJS"
              />
            </div>
            <div className={styles.image__wrapper}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/JWT_zltie2.png"
                alt="JWT"
              />
            </div>
            <div className={styles.image__wrapper}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/ReactRouter_pbffiq.png"
                alt="React Router"
              />
            </div>
            <div className={styles.image__wrapper}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/Figma_mae3tv.png"
                alt="Figma"
              />
            </div>
            <div className={styles.image__wrapper}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/AdobeXD_tm9nps.png"
                alt="AdobeXD"
              />
            </div>
            <div className={styles.image__wrapper}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/MUI_sn6hbg.png"
                alt="Material UI"
              />
            </div>
            <div className={styles.image__wrapper}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/Bootstrap_bpy4rx.png"
                alt="Bootstrap"
              />
            </div>
            <div className={styles.image__wrapper}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/Bulma_zh4hui.png"
                alt="Bulma"
              />
            </div>

            <div className={styles.image__wrapper}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/MongoDB_do4pfj.png"
                alt="MongoDB"
              />
            </div>
            <div className={styles.image__wrapper}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/MySql_crmvz4.png"
                alt="Mysql"
              />
            </div>
            <div className={styles.image__wrapper}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/Firebase_zub5xl.png"
                alt="Firebase"
              />
            </div>
            <div className={styles.image__wrapper}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/Cloudinary_t9azol.png"
                alt="Cloudinary"
              />
            </div>
            <div className={styles.image__wrapper}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/Git_f9gosr.png"
                alt="Git"
              />
            </div>
            <div className={styles.image__wrapper}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/Github_cmuw6l.png"
                alt="Github"
              />
            </div>
            <div className={styles.image__wrapper}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/Postman_rv8vkf.png"
                alt="Postman"
              />
            </div>
            <div className={styles.image__wrapper}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/NPM_aspgog.png"
                alt="Npm"
              />
            </div>
          </Marquee>
        </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default SectionTwo;
