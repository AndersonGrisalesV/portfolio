import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./SkillsMarquee.module.css";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const SkillsMarquee = () => {
  return (
    <div>
      <ScrollAnimation>
        <Marquee
          pauseOnClick={true}
          speed={80}
          delay={-20}
          direction="right"
          gradient={true}
          gradientColor={[13, 18, 23, 0.5]}
          gradientWidth={100}

          // style={{ minWidth: "50%" }}
        >
          <div className={styles.image__wrapper}>
            <img
              // style={{ height: onSize ? "156px" : "241px" }}
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/React_svihuw.png"
              alt="React"
            />
          </div>
          <div className={styles.image__wrapper}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/NodeJS_bhqj1m.png"
              alt="NodeJS"
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
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/ReactRouter_pbffiq.png"
              alt="React Router"
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
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373587/Portfolio/HTML_qp3lay.png"
              alt="HTML"
            />
          </div>
          <div className={styles.image__wrapper}>
            <img
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373587/Portfolio/CSS_tjxjw6.png"
              alt="CSS"
            />
          </div>
        </Marquee>
      </ScrollAnimation>

      <ScrollAnimation>
        <Marquee
          pauseOnClick={true}
          speed={100}
          direction="left"
          gradient={true}
          gradientColor={[13, 18, 23, 0.5]}
          // style={{ minWidth: "50%" }}
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
              src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/JWT_zltie2.png"
              alt="JWT"
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
      </ScrollAnimation>
    </div>
  );
};

export default SkillsMarquee;
