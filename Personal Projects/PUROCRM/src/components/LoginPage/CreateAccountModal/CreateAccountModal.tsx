"use client";

import React, { FC, useState } from "react";
import Modal from "react-modal";
import styles from "./CreateAccountModal.module.css";
import { useDispatch } from "react-redux";
import { toggleOpenCoachSignup1 } from "@/redux/slices/coachSignupSlice";
import { toggleOpenClientRegistration1 } from "@/redux/slices/clientRegistrationSlice";
import { toggleOpenCreateAccount } from "@/redux/slices/accountSlice";

interface Props {
  setIsOpen: (value: boolean) => void;
  modalIsOpen: boolean;
}

const CreateAccountModal: FC<Props> = ({ setIsOpen, modalIsOpen }) => {
  function closeModal() {
    setIsOpen(false);
  }

  function proceedLogin() {
    setIsOpen(false);
  }

  const [type, setType] = useState("");

  const dispatch = useDispatch();

  const continueNow = () => {
    dispatch(toggleOpenCreateAccount(false));

    //opens different modal based on the type of registration
    if (type === "client") {
      dispatch(toggleOpenClientRegistration1(true));
    } else {
      dispatch(toggleOpenCoachSignup1(true));
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={styles.modal}
      ariaHideApp={false}
    >
      <div className={styles.createAccount}>
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
              src="https://purocoach-crm-assets.s3.amazonaws.com/icons/logo.png"
              alt=""
            />
          </div>
          <p className={styles.info}>
            Helping individuals live with clarity, purpose, and passion. <br />{" "}
            <span>Begin your coaching journey now!</span>
          </p>
          <div
            className={`${styles.options} ${
              type ? styles.optionsSelected : ""
            }`}
          >
            <div className={styles.optionsContainer}>
              <div
                className={`${styles.optionContainer} ${
                  type === "client" ? styles.option__selected : null
                }`}
                onClick={() => setType("client")}
              >
                <h4>Register as a Client</h4>
                <input
                  type="radio"
                  name="account"
                  checked={type === "client"}
                  onChange={(event) =>
                    setType(event.target.checked ? "client" : "")
                  }
                />
              </div>
              <div
                className={`${styles.optionContainer} ${
                  type === "coach" ? styles.option__selected : null
                }`}
                onClick={() => setType("coach")}
              >
                <h4>Sign-up as a coach</h4>
                <input
                  type="radio"
                  name="account"
                  checked={type === "coach"}
                  onChange={(event) =>
                    setType(event.target.checked ? "coach" : "")
                  }
                />
              </div>
            </div>
            {type && (
              <div className={styles.messageContainer}>
                <div className={styles.message}>
                  {type === "client" ? (
                    <p>You have selected to register as a client</p>
                  ) : (
                    <p>You have selected to sign-up as a coach</p>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.continueButton} onClick={continueNow}>
              <span>Please continue</span>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-right.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateAccountModal;
