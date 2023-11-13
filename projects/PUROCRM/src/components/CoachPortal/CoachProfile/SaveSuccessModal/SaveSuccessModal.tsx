"use client";

import React, { FC } from "react";
import styles from "./SaveSuccessModal.module.css";
import Modal from "react-modal";
import { IMAGE_URL } from "@/constants/endpoints";

interface Props {
  closeNow: () => void;
  modalIsOpen: boolean;
}

const SaveSuccessModal: FC<Props> = ({ modalIsOpen, closeNow }) => {
  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <img src={`${IMAGE_URL}/coach-portal/celebration.svg`} alt="" />
          <h3>Changes Saved Successfully</h3>
          <p>Your changes has been saved successfully</p>
        </div>

        <div className={styles.bottomContainer}>
          <button onClick={closeNow}>Exit</button>
        </div>

        <img
          src={`${IMAGE_URL}/coach-portal/close.svg`}
          alt=""
          className={styles.closeImg}
        />
      </div>
    </Modal>
  );
};

export default SaveSuccessModal;
