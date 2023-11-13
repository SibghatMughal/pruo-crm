"use client";

import React, { FC } from "react";
import styles from "./CreateProfileModal2.module.css";
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

const CreateProfileModal2: FC<Props> = ({
  modalIsOpen,
  nextStep,
  prevStep,
  closeModal,
}) => {
  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <h3>Add your profile name</h3>
        <div className={styles.inputContainer}>
          <label>Profile Name</label>
          <br />
          <div className={styles.input}>
            <p>My</p>
            <input type="text" placeholder="Profile name" />
          </div>
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

export default CreateProfileModal2;
