import React from "react";

import styles from "./SectionThree.module.css";

const SectionThree = () => {
  return (
    <div>
      <section className={styles.section__two__container} id="contact">
        <div className={styles.container__center__section}>
          <div className={styles.responsive__some__features__text}>
            <h1 className={styles.skills__some}>Some</h1>
            <h1 className={styles.expertise__features}>Features</h1>
          </div>

          <div className={styles.container__description__text}>
            <ul>
              <li></li>
            </ul>
            <p className={styles.description__text}>
              Login/SignUp User Account Login SingIn With Email Update Profile
              Name/Email/Password/ProfilePicture Delete Own User Add New Posts
              Update Post Title/Description/Address/Image/PostDate Like/Unlike
              Posts Search Posts by Title Delete Own Posts Add New Comments on
              Posts Update Comment Text/CommentDate Delete Own Comments Map
              integration: Places shared by users are displayed on Google maps
              for easy navigation and visualization
            </p>
          </div>

          <div className={styles.container__images}>
            <div className={styles.images__left}></div>
            <div className={styles.images__right}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionThree;
