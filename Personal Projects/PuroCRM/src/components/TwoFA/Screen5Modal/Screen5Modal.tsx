"use client";

import React, { FC, useState } from "react";
import styles from "./Screen5Modal.module.css";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { toggleScreen3 } from "@/redux/slices/twoFASlice";
import OtpInput from "../../common/OtpInput/OtpInput";

interface Props {
  modalIsOpen: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const Screen5Modal: FC<Props> = ({ modalIsOpen, setSuccess }) => {
  const dispatch = useDispatch();
  function back() {
    dispatch(toggleScreen3(true));
  }

  function next() {
    // dispatch(toggleScreen2(true));
    setSuccess(true);
  }

  const [otp, setOtp] = useState("");

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
          <h1>Verify Your Phone Number</h1>
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
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default Screen5Modal;
