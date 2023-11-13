"use client";

import React, { FC, useState } from "react";
import styles from "./Screen3Modal.module.css";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { toggleScreen2, toggleScreen5 } from "@/redux/slices/twoFASlice";

interface Props {
  modalIsOpen: boolean;
}

const Screen3Modal: FC<Props> = ({ modalIsOpen }) => {
  const dispatch = useDispatch();

  function back() {
    dispatch(toggleScreen2(true));
  }

  function next() {
    if (phoneNumber.length === 14) {
      dispatch(toggleScreen5(true));
    }
    console.log(phoneNumber.length);
  }

  const [phoneNumber, setPhoneNumber] = useState("");

  const phoneFormat = (value: string) => {
    let input = value.replace(/\D/g, "");

    input = input.substring(0, 10);

    let size = input.length;
    let result = "";
    if (size == 0) {
      result = input;
    } else if (size == 3) {
      result = "(" + input + ")-";
    } else if (size < 3) {
      result = "(" + input;
    } else if (size < 6) {
      result = "(" + input.substring(0, 3) + ")-" + input.substring(3, 6);
    } else if (size == 6) {
      result = "(" + input.substring(0, 3) + ")-" + input.substring(3, 6) + "-";
    } else {
      result =
        "(" +
        input.substring(0, 3) +
        ")-" +
        input.substring(3, 6) +
        "-" +
        input.substring(6, 10);
    }
    setPhoneNumber(result);
  };

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <img
        src="https://purocoach-crm-assets.s3.amazonaws.com/icons/logo.png"
        alt=""
      />
      <div className={styles.container}>
        <div>
          <h1>Where do you want to receive your codes?</h1>
          <p>You’ll get a one-time code to make sure it’s working</p>

          <div className={styles.inputContainer}>
            <label>Phone number</label>
            <br />
            <input
              type="text"
              onChange={(e) => phoneFormat(e.target.value)}
              value={phoneNumber}
              placeholder="(000)-000-0000"
            />
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={back} className={styles.backButton}>
          Back
        </button>
        <button
          onClick={next}
          disabled={phoneNumber === ""}
          className={styles.continueBtn}
        >
          Continue
        </button>
      </div>
    </Modal>
  );
};

export default Screen3Modal;
