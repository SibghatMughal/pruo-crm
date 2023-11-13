"use client";

import React, { FC } from "react";
import styles from "./CertificationsReviewModal.module.css";
import Modal from "react-modal";
import Link from "next/link";
import { IMAGE_URL } from "@/constants/endpoints";

interface Props {
  confirm: () => void;
  modalIsOpen: boolean;
  reviewDoc: any;
}

const CertificationsReviewModal: FC<Props> = ({
  modalIsOpen,
  reviewDoc,
  confirm,
}) => {
  console.log(reviewDoc);

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <h3>Review your qualification</h3>
        <h4>
          <span>1. ICF: </span>Master Certified Coach (MCC)
        </h4>
        <div className={styles.certificateContainer}>
          <img src={`${IMAGE_URL}/coach-portal/test-certificate.svg`} />
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={confirm}>Confirm</button>
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

export default CertificationsReviewModal;
