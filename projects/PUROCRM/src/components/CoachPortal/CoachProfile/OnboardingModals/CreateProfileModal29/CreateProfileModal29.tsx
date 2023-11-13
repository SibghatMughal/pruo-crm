"use client";

import React, { FC } from "react";
import styles from "./CreateProfileModal29.module.css";
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

const CreateProfileModal29: FC<Props> = ({
  modalIsOpen,
  nextStep,
  prevStep,
  closeModal,
}) => {
  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <h3>
          Include some of the most frequently asked questions which most of your
          clients would normally ask. <span>Learn More</span>
        </h3>
        <div className={styles.inputContainer}>
          <label>Question 1</label>
          <br />
          <input type="text" placeholder="Enter Question" />
        </div>
        <div className={styles.answerContainer}>
          <label>Answer 1</label>
          <br />
          <textarea placeholder="Enter Answer" rows={6}></textarea>
        </div>
        <div className={styles.buttonContainer}>
          <button>Add New Question & Answer</button>
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

export default CreateProfileModal29;
