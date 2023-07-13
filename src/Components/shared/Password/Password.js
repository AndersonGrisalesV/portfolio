import React, { useState, useEffect, useRef } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";

import { motion } from "framer-motion";
import Backdrop from "../UIElements/Backdrop";

import styles from "./Password.module.css";

const Password = ({ onCloseDrawerHandler }) => {
  const cardRef = useRef(null);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 9 && !cardRef.current.contains(event.target)) {
        event.preventDefault();
      }
    };

    if (typeof document !== "undefined") {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (typeof document !== "undefined") {
        document.removeEventListener("keydown", handleKeyDown);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (password === process.env.REACT_APP_LETTER) {
      setErrorMessage("");
      window.open(process.env.REACT_APP_DOCUMENT_URL, "_blank");
      onCloseDrawerHandler();
    } else {
      setErrorMessage("You need access to see this.");
    }
  };

  return (
    <>
      <Backdrop onClick={onCloseDrawerHandler} onResume={true} />
      <div ref={cardRef}>
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
                  className={`${styles.button} ${styles.button__light}`}
                  whileTap={{ scale: 0.98, x: 0 }}
                >
                  Unlock
                </motion.button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Password;
