"use client";

import React, { FC, useRef, useState } from "react";
import Modal from "react-modal";
import styles from "./ClientRegistrationModal2.module.css";
import { OtpInput } from "@/components";
import {
  toggleOpenClientRegistration1,
  toggleOpenClientRegistration3,
} from "@/redux/slices/clientRegistrationSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { verifyEmail, verifyEmailToken } from "@/services/auth/auth";

interface Props {
  modalIsOpen: boolean;
  emailValue: string;
}

const ClientRegistrationModal2: FC<Props> = ({ modalIsOpen, emailValue }) => {
  const dispatch = useDispatch();

  const [otp, setOtp] = useState("");

  function proceedLogin() {
    dispatch(toggleOpenClientRegistration1(true));
  }

  //verifies the otp entered
  const continueNow = async () => {
    if (otp.length === 6) {
      try {
        const { data }: any = await verifyEmailToken({
          emailAddress: emailValue,
          token: otp,
        });
        console.log(data);
        if (data.responseCode === 200) {
          // toast.success(data.message);
          dispatch(toggleOpenClientRegistration3(true));
        } else {
          toast.error(data.message);
        }
        //
      } catch (error) {
        // console.log(error);
      }
    } else {
      toast.error("Please enter your verification code.");
    }
  };

  //resends the otp
  const resendCode = async () => {
    setOtp("");

    try {
      const { data }: any = await verifyEmail({ emailAddress: emailValue });
      console.log(data);
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.error("Please return as we are running into a problem");
    }
  };

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
              src="https://purocoach-crm-assets.s3.amazonaws.com/icons/logo.png"
              alt=""
            />
          </div>
          <h1 className={styles.title}>Client Registration</h1>

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
            <button
              className={styles.nextButton}
              onClick={continueNow}
              disabled={otp.length < 6}
            >
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

export default ClientRegistrationModal2;
