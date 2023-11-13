"use client";

import React, { FC, MutableRefObject, useRef, useState } from "react";
import styles from "./ForgotPasswordModal.module.css";
import Link from "next/link";
import Modal from "react-modal";
import { forgotPassword } from "@/services/auth/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setForgotEmail } from "@/redux/slices/userSlice";

interface Props {
  setIsOpen: (value: boolean) => void;
  modalIsOpen: boolean;
  openCreateAccountModal: (value: boolean) => void;
}

const ForgotPasswordModal: FC<Props> = ({
  setIsOpen,
  modalIsOpen,
  openCreateAccountModal,
}) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const passwordRef = useRef(null) as MutableRefObject<HTMLInputElement | null>;
  const dispatch = useDispatch();

  const openCreateAccount = () => {
    openCreateAccountModal(true);
  };

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
    passwordRef?.current?.focus();
  };

  function closeModal() {
    setIsOpen(false);
  }

  function proceedLogin() {
    setIsOpen(false);
  }

  async function proceedForget() {
    setEmailError("");

    if (!email) {
      setEmailError("Email is required");
      return;
    }
    const { data }: any = await forgotPassword({
      emailAddress: email,
    });
    if (data?.responseCode === 200) {
      dispatch(setForgotEmail(email));
      toast.success(data.message);
      return setIsOpen(false);
    }
    return toast.error(data?.message);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={styles.modal}
    >
      <div className={styles.container}>
        <div className={styles.leftHeader__left} onClick={proceedLogin}>
          <div className={styles.backIcon}>
            <img
              src="https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-left.png"
              alt=""
            />
          </div>
          <h3>Back to Login</h3>
        </div>
        <div className={styles.left__logo}>
          <img
            src="https://purocoach-crm-assets.s3.amazonaws.com/logo2.png"
            alt=""
          />
        </div>
        <h1 className={styles.title}>
          Forgot your <span>password?</span>
        </h1>
        <div className={styles.inputContainer}>
          <label>Enter your login email</label>
          <br />
          <div>
            <img src="assets/icons/email-password.png" alt="" />
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
            />
          </div>
        </div>
        {emailError && (
          <div className={styles.errorContainer}>
            <p className={styles.error}>{emailError}</p>{" "}
          </div>
        )}

        <button className={styles.submitButton} onClick={proceedForget}>
          Submit
        </button>
        <div className={styles.createNewAccount}>
          <p>
            Not registered yet?{" "}
            <span onClick={openCreateAccount}>Create an account</span>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ForgotPasswordModal;
