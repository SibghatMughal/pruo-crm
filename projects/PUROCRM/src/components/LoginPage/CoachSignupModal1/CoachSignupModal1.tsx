"use client";

import React, { FC, useState } from "react";
import Modal from "react-modal";
import styles from "./CoachSignupModal1.module.css";
import { Stepper } from "@/components";
import { useDispatch } from "react-redux";
import { toggleOpenCoachSignup2 } from "@/redux/slices/coachSignupSlice";
import {
  BASE_URL,
  GOOGLE_AUTH_ENDPOINT,
  LINKEDIN_AUTH_ENDPOINT,
} from "@/constants/endpoints";
import { checkUser, signupUser, verifyEmail } from "@/services/auth/auth";
import { toast } from "react-toastify";

interface Props {
  setIsOpen: (value: boolean) => void;
  modalIsOpen: boolean;
  emailValue: string;
  setEmailValue: (value: string) => void;
}

const CoachSignupModal: FC<Props> = ({
  setIsOpen,
  modalIsOpen,
  emailValue,
  setEmailValue,
}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function proceedLogin() {
    setIsOpen(false);
  }

  const validateEmail = (value: string) => {
    setEmailError("");

    if (!value) {
      setEmailError("Email is required");
      return;
    }

    const mailFormat = /^\S+@\S+\.\S+$/;

    if (!value.match(mailFormat)) {
      setEmailError("Proper email format is required");
      return;
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
      return;
    }
    setEmailError("");
  };

  const continueNow = async () => {
    setEmailError("");
    if (!email) {
      setEmailError("Email is required");
      return;
    }

    const mailFormat = /^\S+@\S+\.\S+$/;

    if (!email.match(mailFormat)) {
      setEmailError("Proper email format is required");
      return;
    }

    let domain = email.split("@")[1];
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
      return;
    }
    try {
      const { data }: any = await checkUser({
        emailAddress: email,
        userType: "COACH",
      });
      if (data.responseCode === 200) {
        const { data }: any = await verifyEmail({
          emailAddress: email,
        });
        if (data.responseCode) {
          setEmailValue(email);
          dispatch(toggleOpenCoachSignup2(true));
          toast.success(data.message);
        }
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={styles.modal}
      ariaHideApp={false}
    >
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
          <h1 className={styles.title}>Enter email to sign-up</h1>
          <h1 className={styles.title2}>
            Answer five more questions and we&apos;ll get you into your
            free-trial
          </h1>
          <Stepper activeStep={1} />
          <div className={styles.inputContainer}>
            <label>Email</label>
            <br />
            <div>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/email-password.png"
                alt=""
              />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Tab" && emailError) {
                    e.preventDefault();
                    validateEmail(email);
                  }
                }}
              />{" "}
            </div>
          </div>
          {emailError && (
            <div className={styles.errorContainer}>
              <p className={styles.error}>{emailError}</p>{" "}
            </div>
          )}

          <button className={styles.continueButton} onClick={continueNow}>
            Continue
          </button>

          <div className={styles.or}>
            <p>Or</p>
          </div>

          <div className={styles.buttonLayout}>
            <a href={BASE_URL + GOOGLE_AUTH_ENDPOINT + "/coach"}>
              <button className={styles.buttonContainer}>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/google-icon.png"
                  alt=""
                />
                <p>Sign-up with Google</p>
              </button>
            </a>
            <a href={BASE_URL + LINKEDIN_AUTH_ENDPOINT + "/coach"}>
              <button className={styles.buttonContainer}>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/linkedin-icon.png"
                  alt=""
                />
                <p>Sign-up with LinkedIn</p>
              </button>
            </a>
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

export default CoachSignupModal;
