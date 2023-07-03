import React from "react";
import Marquee from "react-fast-marquee";

import IndividualAnimation from "../ScrollAnimation/IndividualAnimation";
import styles from "./SkillsMarquee.module.css";

const SkillsMarquee = () => {
  return (
    <div>
      <IndividualAnimation onDelay={0.8}>
        <Marquee
          pauseOnClick={true}
          speed={80}
          delay={-20}
          direction="right"
          gradient={true}
          gradientColor={[13, 18, 23, 0.5]}
          gradientWidth={100}
          style={{ transform: "translate3d(0, 0, 0)" }}
        >
          <div className={styles.image__wrapper}>
            <img
              // style={{ height: onSize ? "156px" : "241px" }}
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/React_svihuw.png"
              alt="React"
              loading="lazy"
            />
          </div>
          <div className={styles.image__wrapper}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/NodeJS_bhqj1m.png"
              alt="NodeJS"
              loading="lazy"
            />
          </div>
          <div className={styles.image__wrapper}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/ExpressJS_zixpin.png"
              alt="ExpressJS"
              loading="lazy"
            />
          </div>
          <div className={styles.image__wrapper}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/ReactRouter_pbffiq.png"
              alt="React Router"
              loading="lazy"
            />
          </div>
          <div className={styles.image__wrapper}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373587/Portfolio/Javascript_evjufn.png"
              alt="Javascript"
              loading="lazy"
            />
          </div>
          <div className={styles.image__wrapper}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373587/Portfolio/HTML_qp3lay.png"
              alt="HTML"
              loading="lazy"
            />
          </div>
          <div className={styles.image__wrapper}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373587/Portfolio/CSS_tjxjw6.png"
              alt="CSS"
              loading="lazy"
            />
          </div>
        </Marquee>
      </IndividualAnimation>

      <IndividualAnimation onDelay={0.6}>
        <Marquee
          pauseOnClick={true}
          speed={100}
          direction="left"
          gradient={true}
          gradientColor={[13, 18, 23, 0.5]}
          style={{ transform: "translate3d(0, 0, 0)" }}
        >
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
              loading="lazy"
            />
          </div>
          <div className={styles.image__wrapper}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/MUI_sn6hbg.png"
              alt="Material UI"
              loading="lazy"
            />
          </div>
          <div className={styles.image__wrapper}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/Bootstrap_bpy4rx.png"
              alt="Bootstrap"
              loading="lazy"
            />
          </div>
          <div className={styles.image__wrapper}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/Bulma_zh4hui.png"
              alt="Bulma"
              loading="lazy"
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
              loading="lazy"
            />
          </div>

          <div className={styles.image__wrapper}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/JWT_zltie2.png"
              alt="JWT"
              loading="lazy"
            />
          </div>

          <div className={styles.image__wrapper}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/MongoDB_do4pfj.png"
              alt="MongoDB"
              loading="lazy"
            />
          </div>
          <div className={styles.image__wrapper}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/MySql_crmvz4.png"
              alt="Mysql"
              loading="lazy"
            />
          </div>
          <div className={styles.image__wrapper}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/Firebase_zub5xl.png"
              alt="Firebase"
              loading="lazy"
            />
          </div>
          <div className={styles.image__wrapper}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/Cloudinary_t9azol.png"
              alt="Cloudinary"
              loading="lazy"
            />
          </div>

          <div className={styles.image__wrapper}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/Postman_rv8vkf.png"
              alt="Postman"
              loading="lazy"
            />
          </div>
          <div className={styles.image__wrapper}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/NPM_aspgog.png"
              alt="Npm"
              loading="lazy"
            />
          </div>
        </Marquee>
      </IndividualAnimation>
    </div>
  );
};

export default SkillsMarquee;
