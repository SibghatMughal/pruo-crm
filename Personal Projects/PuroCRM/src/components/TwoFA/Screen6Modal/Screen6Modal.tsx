"use client";

import React, { FC, useState } from "react";
import styles from "./Screen6Modal.module.css";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { toggleScreen4 } from "@/redux/slices/twoFASlice";
import OtpInput from "../../common/OtpInput/OtpInput";

interface Props {
  modalIsOpen: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const Screen6Modal: FC<Props> = ({ modalIsOpen, setSuccess }) => {
  const dispatch = useDispatch();

  function back() {
    dispatch(toggleScreen4(true));
  }

  function next() {
    setSuccess(true);
  }

  const [otp, setOtp] = useState("");

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <img
        src="https://purocoach-crm-assets.s3.amazonaws.com/icons/logo.png"
        alt=""
      />

      <div className={styles.container}>
        <div>
          <h1>Verify Your Email Address</h1>
          <div className={styles.info}>
            <h3>Enter 6-digit code</h3>
          </div>

          <div className={styles.center}>
            <p>Enter Verification Code</p>
            <OtpInput size={6} value={otp} onChange={(text) => setOtp(text)} />
            <div className={styles.resend}>
              <h5>Resend</h5>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={back} className={styles.backButton}>
          Back
        </button>
        <button onClick={next} className={styles.continueBtn}>
          Continue
        </button>
      </div>
    </Modal>
  );
};

export default Screen6Modal;
