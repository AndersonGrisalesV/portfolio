import React from "react";

import styles from "./SectionThree.module.css";

const SectionThree = () => {
  return (
    <div>
      <section className={styles.section__three__container} id="contact">
        <div className={styles.container__center__section}>
          <div className={styles.responsive__some__features__text}>
            <h1 className={styles.some__text}>Some</h1>
            <h1 className={styles.features__text}>Features</h1>
          </div>

          <div className={styles.container__description__text}>
            <ul className={styles.description__text}>
              <li>Login/SignUp User Account</li>
              <li>Login SingIn With Email</li>
              <li>Update Profile Name/Email/Password/ProfilePicture</li>
              <li>Delete Own User</li>
              <li>Add New Posts</li>
              <li>Update Post Title/Description/Address/Image/PostDate</li>
              <li>Like/Unlike Posts</li>
              <li>Search Posts by Title</li>
              <li>Delete Own Posts</li>
              <li>Add New Comments on Posts</li>
              <li>Update Comment Text/CommentDate</li>
              <li>Delete Own Comments</li>
              <li>
                Map integration: Places shared by users are displayed on Google
                maps for easy navigation and visualization
              </li>
            </ul>
          </div>

          <div className={styles.container__images}>
            <div className={styles.images__left}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685400194/LeftImages_syimlg.svg"
                alt="Dplace_left_images"
                className={styles.social__media__image}
              />
            </div>
            <div className={styles.images__right}>
              <img
                src="https://res.cloudinary.com/doa4qiuc2/image/upload/v1685400195/RightImages_rtbmi4.svg"
                alt="Dplace_right_images"
                className={styles.social__media__image}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionThree;
