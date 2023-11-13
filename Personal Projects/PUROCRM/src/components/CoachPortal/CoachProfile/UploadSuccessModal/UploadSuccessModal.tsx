"use client";

import React, { FC } from "react";
import styles from "./UploadSuccessModal.module.css";
import Modal from "react-modal";
import { IMAGE_URL } from "@/constants/endpoints";

interface Props {
  nextStep: () => void;
  modalIsOpen: boolean;
  prevStep: () => void;
}

const UploadSuccessModal: FC<Props> = ({ modalIsOpen, nextStep, prevStep }) => {
  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <img src={`${IMAGE_URL}/coach-portal/success-tick.svg`} alt="" />
          <h3>Image Uploaded</h3>
          <p>Your image successfully</p>
        </div>

        <div className={styles.bottomContainer}>
          <div>
            <button className={styles.finishBtn}>
              <img src={`${IMAGE_URL}/coach-portal/arrow-left.svg`} alt="" />
              <span>Back</span>
            </button>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.leftBtn} onClick={() => {}}>
              <img src={`${IMAGE_URL}/coach-portal/preview.svg`} alt="" />
              <span>Click to preview</span>
            </button>
            <button className={styles.rightBtn} onClick={nextStep}>
              <span>Continue</span>
              <img src={`${IMAGE_URL}/coach-portal/arrow-right.svg`} alt="" />
            </button>
          </div>
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

export default UploadSuccessModal;
