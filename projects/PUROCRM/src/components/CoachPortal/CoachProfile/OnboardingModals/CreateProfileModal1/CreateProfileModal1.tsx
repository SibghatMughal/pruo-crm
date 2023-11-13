"use client";

import React, { FC } from "react";
import styles from "./CreateProfileModal1.module.css";
import Modal from "react-modal";
import Link from "next/link";
import { IMAGE_URL } from "@/constants/endpoints";
import { ModalBottomContainer } from "@/components/CoachPortal/CoachProfile";

interface Props {
  modalIsOpen: boolean;
  nextStep: () => void;
  prevStep: () => void;
}

const CreateProfileModal1: FC<Props> = ({
  modalIsOpen,
  nextStep,
  prevStep,
}) => {
  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <h3>Welcome, Kiera! What is your location?</h3>
        <p>This will help your prospect clients to find you much faster</p>
        <div className={styles.inputContainer}>
          <label>
            Country/Region <sup>*</sup>
          </label>
          <br />
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label>
            Postal Code<sup>*</sup>
          </label>
          <br />
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label>
            Location within this areas <sup>*</sup>
          </label>
          <br />
          <input type="text" />
        </div>

        <ModalBottomContainer nextStep={nextStep} prevStep={prevStep} />

        <img
          src={`${IMAGE_URL}/coach-portal/close.svg`}
          alt=""
          className={styles.closeImg}
          onClick={prevStep}
        />
      </div>
    </Modal>
  );
};

export default CreateProfileModal1;
