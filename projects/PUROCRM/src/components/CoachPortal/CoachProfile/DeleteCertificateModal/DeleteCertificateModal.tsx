import React, { FC } from "react";
import styles from "./DeleteCertificateModal.module.css";
import Modal from "react-modal";
import { IMAGE_URL } from "@/constants/endpoints";

interface Props {
  confirm: () => void;
  modalIsOpen: boolean;
  cancel: () => void;
}

const DeleteCertificateModal: FC<Props> = ({
  confirm,
  cancel,
  modalIsOpen,
}) => {
  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <img src={`${IMAGE_URL}/coach-portal/delete-can.svg`} alt="" />
        <h2>Delete</h2>
        <p>Are you sure you want to delete?</p>
        <div className={styles.buttonContainer}>
          <button className={styles.leftBtn} onClick={cancel}>
            <img src={`${IMAGE_URL}/coach-portal/cancel.svg`} alt="" />
            <span>Cancel</span>
          </button>
          <button className={styles.rightBtn} onClick={confirm}>
            <span>Confirm</span>
            <img src={`${IMAGE_URL}/coach-portal/arrow-right.svg`} alt="" />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteCertificateModal;
