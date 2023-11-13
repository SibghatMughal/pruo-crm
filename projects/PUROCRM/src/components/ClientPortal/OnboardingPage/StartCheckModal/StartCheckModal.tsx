"use client";

import React, { FC } from "react";
import styles from "./StartCheckModal.module.css";
import Modal from "react-modal";
import Link from "next/link";

interface Props {
  setIsOpen: (value: boolean) => void;
  modalIsOpen: boolean;
}

const StartCheckModal: FC<Props> = ({ modalIsOpen, setIsOpen }) => {
  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <p>
          This onboarding process will take approximately 15 minutes to 1hr to
          complete.
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.leftBtn}>Explore the CRM</button>
          <button className={styles.rightBtn} onClick={() => setIsOpen(false)}>
            <Link href="/coach-portal/onboardings/welcome">
              Proceed with the onboarding now
            </Link>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default StartCheckModal;
