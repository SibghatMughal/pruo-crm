"use client";

import React, { FC } from "react";
import styles from "./CancelModal.module.css";
import Modal from "react-modal";
import { IMAGE_URL } from "@/constants/endpoints";

interface Props {
  closeNow: () => void;
  modalIsOpen: boolean;
  stayHere: () => void;
}

const CancelModal: FC<Props> = ({ modalIsOpen, closeNow, stayHere }) => {
  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <img src={`${IMAGE_URL}/coach-portal/cancel-modal.svg`} alt="" />
          <h3>Cancel</h3>
          <p>Are you sure you want to cancel?</p>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.leftBtn} onClick={stayHere}>
            <span>No</span>
          </button>
          <button className={styles.rightBtn} onClick={closeNow}>
            <span>Yes</span>
          </button>
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

export default CancelModal;
