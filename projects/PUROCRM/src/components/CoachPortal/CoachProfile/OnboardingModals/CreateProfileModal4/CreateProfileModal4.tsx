"use client";

import React, { FC } from "react";
import styles from "./CreateProfileModal4.module.css";
import Modal from "react-modal";
import Link from "next/link";
import { IMAGE_URL } from "@/constants/endpoints";
import { ModalBottomContainer } from "@/components/CoachPortal/CoachProfile";

interface Props {
  nextStep: () => void;
  modalIsOpen: boolean;
  prevStep: () => void;
  closeModal: () => void;
}

const CreateProfileModal4: FC<Props> = ({
  modalIsOpen,
  nextStep,
  prevStep,
  closeModal,
}) => {
  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <h3>What is your Coach title?</h3>
        <p>ex: Business Executive Coach</p>
        <div className={styles.inputContainer}>
          <label>Title</label>
          <br />
          <input type="text" placeholder="Enter Title" />
        </div>

        <ModalBottomContainer nextStep={nextStep} prevStep={prevStep} />

        <img
          src={`${IMAGE_URL}/coach-portal/close.svg`}
          alt=""
          className={styles.closeImg}
          onClick={closeModal}
        />
      </div>
    </Modal>
  );
};

export default CreateProfileModal4;
