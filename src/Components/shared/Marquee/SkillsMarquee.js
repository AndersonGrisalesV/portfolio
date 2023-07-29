import React from "react";
import Marquee from "react-fast-marquee";

import IndividualAnimation from "../ScrollAnimation/IndividualAnimation";

import styles from "./SkillsMarquee.module.css";

const imageUrls = [
  {
    src: "https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/React_svihuw.png",
    alt: "React",
  },
  {
    src: "https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/NodeJS_bhqj1m.png",
    alt: "NodeJS",
  },
  {
    src: "https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/ExpressJS_zixpin.png",
    alt: "ExpressJS",
  },
  {
    src: "https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/ReactRouter_pbffiq.png",
    alt: "React Router",
  },
  {
    src: "https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373587/Portfolio/Javascript_evjufn.png",
    alt: "Javascript",
  },
  {
    src: "https://res.cloudinary.com/doa4qiuc2/image/upload/v1690671165/Portfolio/Typescript_eyzesv.png",
    alt: "Typecript",
  },
  {
    src: "https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373587/Portfolio/HTML_qp3lay.png",
    alt: "HTML",
  },
  {
    src: "https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373587/Portfolio/CSS_tjxjw6.png",
    alt: "CSS",
  },
  {
    src: "https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/Figma_mae3tv.png",
    alt: "Figma",
  },
  {
    src: "https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/AdobeXD_tm9nps.png",
    alt: "AdobeXD",
  },
  {
    src: "https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/MUI_sn6hbg.png",
    alt: "Material UI",
  },
  {
    src: "https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/Bootstrap_bpy4rx.png",
    alt: "Bootstrap",
  },
  {
    src: "https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/Bulma_zh4hui.png",
    alt: "Bulma",
  },
  {
    src: "https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/Git_f9gosr.png",
    alt: "Git",
  },
  {
    src: "https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/Github_cmuw6l.png",
    alt: "Github",
  },
  {
    src: "https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/JWT_zltie2.png",
    alt: "JWT",
  },
  {
    src: "https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/MongoDB_do4pfj.png",
    alt: "MongoDB",
  },
  {
    src: "https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373588/Portfolio/MySql_crmvz4.png",
    alt: "Mysql",
  },
  {
    src: "https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/Firebase_zub5xl.png",
    alt: "Firebase",
  },
  {
    src: "https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/Cloudinary_t9azol.png",
    alt: "Cloudinary",
  },
  {
    src: "https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/Postman_rv8vkf.png",
    alt: "Postman",
  },
  {
    src: "https://res.cloudinary.com/doa4qiuc2/image/upload/v1682373589/Portfolio/NPM_aspgog.png",
    alt: "Npm",
  },
  {
    src: "https://res.cloudinary.com/doa4qiuc2/image/upload/v1690670969/Portfolio/Python_zgbfm3.png",
    alt: "Python",
  },
];

const SkillsMarquee = () => {
  const halfLength = Math.ceil(imageUrls.length / 2);
  const firstHalf = imageUrls.slice(0, halfLength);
  const secondHalf = imageUrls.slice(halfLength);

  return (
    <div>
      <IndividualAnimation>
        <Marquee
          pauseOnClick={true}
          speed={80}
          delay={-20}
          direction="right"
          gradient={true}
          gradientColor={[13, 18, 23, 0.5]}
          gradientWidth={100}
        >
          {firstHalf.map((imageUrl, index) => (
            <div className={styles.image__wrapper} key={index}>
              <img src={imageUrl.src} alt={imageUrl.alt} />
            </div>
          ))}
        </Marquee>
      </IndividualAnimation>

      <IndividualAnimation>
        <Marquee
          pauseOnClick={true}
          speed={80}
          delay={-20}
          direction="left"
          gradient={true}
          gradientColor={[13, 18, 23, 0.5]}
        >
          {secondHalf.map((imageUrl, index) => (
            <div className={styles.image__wrapper} key={index}>
              <img src={imageUrl.src} alt={imageUrl.alt} />
            </div>
          ))}
        </Marquee>
      </IndividualAnimation>
    </div>
  );
};

export default SkillsMarquee;
