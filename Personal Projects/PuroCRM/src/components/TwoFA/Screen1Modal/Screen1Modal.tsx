"use client";

import React, { FC } from "react";
import styles from "./Screen1Modal.module.css";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { toggleScreen2 } from "@/redux/slices/twoFASlice";

interface Props {
  modalIsOpen: boolean;
}

const Screen1Modal: FC<Props> = ({ modalIsOpen }) => {
  const dispatch = useDispatch();

  function next() {
    dispatch(toggleScreen2(true));
  }

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <img
        src="https://purocoach-crm-assets.s3.amazonaws.com/icons/logo.png"
        alt=""
      />

      <div className={styles.container}>
        <div>
          <h1>Let's secure your account</h1>
          <p>
            PUROCoach requires two-factor authentication (2FA) to keep your
            account and customer data safe
          </p>

          <div className={styles.buttonContainer}>
            <button onClick={next}>Continue</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Screen1Modal;
