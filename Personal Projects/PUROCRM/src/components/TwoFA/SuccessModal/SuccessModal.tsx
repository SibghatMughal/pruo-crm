"use client";

import React, { FC } from "react";
import Modal from "react-modal";
import styles from "./SuccessModal.module.css";
import { useRouter } from "next/navigation";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalIsOpen: boolean;
}

const SuccessModal: FC<Props> = ({ setIsOpen, modalIsOpen }) => {
  const router = useRouter();

  function proceedLogin() {
    setIsOpen(false);
    router.push("/admin-portal");
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        className={styles.container}
        contentLabel="Example Modal"
      >
        <img
          src="https://purocoach-crm-assets.s3.amazonaws.com/icons/check.png"
          alt=""
        />
        <h3>2FA Enabled</h3>
        <p>
          Your two-factor authentication (2FA) has been setup successfully.
          Please proceed to the platform.
        </p>
        <button onClick={proceedLogin}>Proceed to portal</button>
      </Modal>
    </div>
  );
};

export default SuccessModal;
