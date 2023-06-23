import React, { useEffect } from "react";

import Backdrop from "../UIElements/Backdrop";

import styles from "./Password.module.css";
import Button from "../UIElements/Button";
import { useRef } from "react";

const Password = ({ onCloseDrawerHandler }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 9 && !cardRef.current.contains(event.target)) {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <React.Fragment>
      <Backdrop onClick={onCloseDrawerHandler} onResume={true} />
      <div className={styles.container} ref={cardRef}>
        <div className={styles.card}>
          {/* <form onSubmit={handleButtonClick}> */}
          <form>
            <div className={styles.container__input__button}>
              <div className={styles.container__label__input}>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" />
              </div>
              <div className={styles.button__container}>
                <Button
                  onText={"Unlock"}
                  onChangebackground={true}
                  onUnlock={true}
                  onClose={onCloseDrawerHandler}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Password;
