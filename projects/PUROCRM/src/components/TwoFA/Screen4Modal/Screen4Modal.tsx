"use client";

import React, { FC, useState } from "react";
import styles from "./Screen4Modal.module.css";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { toggleScreen2, toggleScreen6 } from "@/redux/slices/twoFASlice";

interface Props {
  modalIsOpen: boolean;
}

const Screen4Modal: FC<Props> = ({ modalIsOpen }) => {
  const dispatch = useDispatch();

  function back() {
    dispatch(toggleScreen2(true));
  }

  function next() {
    // dispatch(toggleScreen3(true));
    if (validateEmail(emailValue)) {
      dispatch(toggleScreen6(true));
    } else {
      return;
    }
  }

  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value: string) => {
    setEmailError("");

    if (!value) {
      setEmailError("Email is required");
      return false;
    }

    const mailFormat = /^\S+@\S+\.\S+$/;

    if (!value.match(mailFormat)) {
      setEmailError("Proper email format is required");
      return false;
    }

    let domain = value.split("@")[1];
    let domains = [
      "gmail.com",
      "yahoo.com",
      "outlook.com",
      "hotmail.com",
      "aol.com",
      "mail.com",
    ];

    let isThere = domains.find((val) => val === domain);

    if (!isThere) {
      setEmailError("Proper email format is required");
      return false;
    }
    setEmailError("");
    return true;
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      // onRequestClose={closeModal}
      className={styles.modal}
      ariaHideApp={false}
    >
      <img
        src="https://purocoach-crm-assets.s3.amazonaws.com/icons/logo.png"
        alt=""
      />
      <div className={styles.container}>
        <div>
          <h1>Where do you want to receive your codes?</h1>
          <p>You’ll get a one-time code to make sure it’s working</p>

          <div className={styles.inputContainer}>
            <label>Email</label>
            <br />
            <input
              type="email"
              onChange={(e) => setEmailValue(e.target.value)}
              value={emailValue}
              placeholder="youremail@domain.com"
            />
          </div>

          {emailError && (
            <div className={styles.errorContainer}>
              <p className={styles.error}>{emailError}</p>{" "}
            </div>
          )}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={back} className={styles.backButton}>
          Back
        </button>
        <button
          onClick={next}
          disabled={emailValue === ""}
          className={styles.continueBtn}
        >
          Continue
        </button>
      </div>
    </Modal>
  );
};

export default Screen4Modal;
