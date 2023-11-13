"use client";

import React, { FC, MutableRefObject, useEffect, useRef } from "react";
import Modal from "react-modal";
import styles from "./Modal.module.css";
import { useRouter, useSearchParams } from "next/navigation";


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalIsOpen: boolean;
}

const CustomModal: FC<Props> = ({ setIsOpen, modalIsOpen }) => {
  const router = useRouter();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function proceedLogin() {
    setIsOpen(false);
    router.push("/login");
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.container}
        contentLabel="Example Modal"
      >
        <img
          src="https://purocoach-crm-assets.s3.amazonaws.com/icons/check.png"
          alt=""
        />
        <h3>
          Your password <br /> has been reset successfully
        </h3>
        <p>
          Your password has been updated. Use your new password to log in to
          your PUROCoach Portal.
        </p>
        <button onClick={proceedLogin}>Proceed with login</button>
      </Modal>
    </div>
  );
};

export default CustomModal;
