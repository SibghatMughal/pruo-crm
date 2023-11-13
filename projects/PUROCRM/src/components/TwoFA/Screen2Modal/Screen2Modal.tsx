"use client";

import {
  toggleScreen1,
  toggleScreen3,
  toggleScreen4,
} from "@/redux/slices/twoFASlice";
import React, { FC, useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import styles from "./Screen2Modal.module.css";
import Option from "../Option/Option";
import { toast } from "react-toastify";

interface Props {
  modalIsOpen: boolean;
}

const Screen2Modal: FC<Props> = ({ modalIsOpen }) => {
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState("");

  const [firstTime, setFirstTime] = useState(true);

  function back() {
    dispatch(toggleScreen1(true));
  }

  function next() {
    if (selectedOption === "") {
      toast.error("Select an option");
      return;
    }

    if (selectedOption === "text") {
      dispatch(toggleScreen3(true));
    } else if (selectedOption === "email") {
      dispatch(toggleScreen4(true));
    } else if (selectedOption === "auth") {
      // dispatch(toggleScreen5(true));
    }
  }

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <img
          src="https://purocoach-crm-assets.s3.amazonaws.com/icons/logo.png"
          alt=""
        />
        <h1>How Would You Like to Secure Your Account?</h1>
        <div className={styles.container__content}>
          <p>
            This account is now protected by two-factor authentication (2FA).
          </p>
          <p>
            PUROCoach requires that you use 2FA to keep your high-value account
            and customer data safe. From now on, every time you log in to this
            account, you’ll need to enter a code from your mobile device.{" "}
            <span>Learn more.</span>
          </p>
        </div>
        <p>
          To continue logging in, set up 2FA below. If you’d like to access a
          different account, you can cancel this setup and return to login at
          any time.
        </p>

        <div className={styles.options}>
          <Option
            title="Text message"
            content="Enter a one-time code sent via text message"
            buttonTxt="Otp Verification"
            selected={selectedOption === "text"}
            setSelected={() => {
              setSelectedOption("text");
              setFirstTime(false);
            }}
            unSelected={!firstTime && selectedOption !== "text"}
          />
          <Option
            title="Email"
            content="Enter a one-time code sent via text message"
            buttonTxt="Otp Verification"
            selected={selectedOption === "email"}
            setSelected={() => {
              setSelectedOption("email");
              setFirstTime(false);
            }}
            unSelected={!firstTime && selectedOption !== "email"}
          />
          <Option
            title="Authentication app"
            content="Enter a one-time code from an app like Google Authenticator"
            buttonTxt="Security App"
            selected={selectedOption === "authapp"}
            setSelected={() => {
              setSelectedOption("authapp");
              setFirstTime(false);
            }}
            unSelected={!firstTime && selectedOption !== "authapp"}
          />
        </div>

        <div className={styles.buttonContainer}>
          <button onClick={back} className={styles.backButton}>
            Back
          </button>
          <button
            onClick={next}
            disabled={selectedOption === ""}
            className={styles.continueBtn}
          >
            Continue
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Screen2Modal;
