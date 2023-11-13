"use client";

import React, { FC, useRef, useState } from "react";
import Modal from "react-modal";
import styles from "./CoachSignupModal2.module.css";
import { Stepper, OtpInput } from "@/components";
import { toggleOpenCoachSignup3 } from "@/redux/slices/coachSignupSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { verifyEmail, verifyEmailToken } from "@/services/auth/auth";

interface Props {
  setIsOpen: (value: boolean) => void;
  modalIsOpen: boolean;
  emailValue: string;
}

const CoachSignupModal2: FC<Props> = ({ setIsOpen, modalIsOpen, emailValue }) => {
  const dispatch = useDispatch();

  function proceedLogin() {
    setIsOpen(false);
  }

  const continueNow = async () => {
    if (otp.length === 6) {
      try {
        const { data }: any = await verifyEmailToken({
          emailAddress: emailValue,
          token: otp,
        });
        console.log(data);
        if (data.responseCode === 200) {
          toast.success('Email verification successful for ' + emailValue);
          return dispatch(toggleOpenCoachSignup3(true));
        } else {
          toast.error(data.message);
        }
      } catch (error: any) {
        toast.error(error.response.data.data.message || error.response.data.message);
      }
    } else {
      toast.error("Please enter your verification code.");
    }
  };

  const resendCode = async () => {
    setOtp("");

    try {
      const { data }: any = await verifyEmail({ emailAddress: emailValue });
      console.log(data);
      toast.success(data.message);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.data.message);
    }
  };

  const [otp, setOtp] = useState("");

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.leftHeader__left} onClick={proceedLogin}>
            <img
              src="https://purocoach-crm-assets.s3.amazonaws.com/create-account/back.png"
              alt=""
            />
            <h3>Back to Login</h3>
          </div>
          <div className={styles.left__logo}>
            <img
              src="https://purocoach-crm-assets.s3.amazonaws.com/logo2.png"
              alt=""
            />
          </div>
          <h1 className={styles.title}>Sign-up</h1>
          <h1 className={styles.title2}>
            Answer five more questions and we&apos;ll get you into your
            free-trial
          </h1>
          <Stepper activeStep={2} />
          <p className={styles.info}>
            We sent a 6 digit security code to the email provided. Please double
            check spam folders
          </p>

          <div className={styles.inputContainer}>
            <OtpInput
              size={6}
              value={otp}
              onChange={(val) => {
                setOtp(val);
              }}
            />
            <div className={styles.resendCode} onClick={resendCode}>
              <h3>Resend Code</h3>
            </div>
          </div>

          <div className={styles.buttonLayout}>
            <button className={styles.nextButton} onClick={continueNow}>
              Verify
            </button>
          </div>
        </div>
        <div className={styles.copyright}>
          <img
            src="https://purocoach-crm-assets.s3.amazonaws.com/icons/reserved-vector.png"
            alt=""
          />
          <p>2023 PUROCoach. All rights reserved</p>
        </div>
      </div>
    </Modal>
  );
};

export default CoachSignupModal2;
