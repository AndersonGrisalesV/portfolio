import React, { useState, useEffect, useRef } from "react";

import Backdrop from "../UIElements/Backdrop";
import Button from "../UIElements/Button";

import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

import styles from "./Password.module.css";

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

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const correctPassword = "1234";

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (password === correctPassword) {
      setErrorMessage("");
      // Password is correct, redirect to resume
      // window.location.href = "/resume.pdf";
    } else {
      // Password is incorrect, display error message
      setErrorMessage("You need access to see this.");
    }
  };

  return (
    <React.Fragment>
      <Backdrop onClick={onCloseDrawerHandler} onResume={true} />
      <div className={styles.container} ref={cardRef}>
        <div className={styles.card}>
          <div className={styles.close__icon} onClick={onCloseDrawerHandler}>
            <FaTimes />
          </div>
          <form action="submit" onSubmit={handleSubmitForm}>
            <div className={styles.container__input__button}>
              <div className={styles.container__label__input}>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  value={password}
                  type={showPassword ? "text" : "password"}
                  onChange={handlePasswordChange}
                />

                <div
                  className={styles.container__icon}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEyeSlash className={styles.icon} />
                  ) : (
                    <FaEye className={styles.icon} />
                  )}
                </div>
                {errorMessage && <p className={styles.error}>{errorMessage}</p>}
              </div>
              <div className={styles.button__container}>
                <motion.button
                  type="submit"
                  className={`${styles.button} "" ${styles.button__light}}`}
                  whileTap={{ scale: 0.98, x: 0 }}
                  // onClick={handleButtonClick}
                >
                  Unlock
                </motion.button>
                {/* <Button
                  onText={"Unlock"}
                  onChangebackground={true}
                  onUnlock={true}
                  // onPassword={handlePassword}
                  onClose={onCloseDrawerHandler}
                /> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Password;
