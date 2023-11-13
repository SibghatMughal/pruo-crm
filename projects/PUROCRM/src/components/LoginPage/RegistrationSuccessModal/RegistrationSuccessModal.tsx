"use client";

import React, { FC } from "react";
import Modal from "react-modal";
import styles from "./RegistrationSuccessModal.module.css";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toggleOpenCoachSignup4 } from "@/redux/slices/coachSignupSlice";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalIsOpen: boolean;
  setLoading: (value: boolean) => void;
  setLoaderMsg: (value: string) => void;
}

const RegistrationSuccessModal: FC<Props> = ({
  setIsOpen,
  modalIsOpen,
  setLoaderMsg,
  setLoading,
}) => {
  const router = useRouter();

  const dispatch = useDispatch();

  function closeModal() {
    setIsOpen(false);
  }

  function proceedLogin() {
    setLoading(true);
    setLoaderMsg("Please wait while we setup your account...");
    setIsOpen(false);
    dispatch(toggleOpenCoachSignup4(false));
    router.push("/client-portal");
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
        <h3>You are successfully registered</h3>
        <p>Start browsing for coaches or post job to hire</p>
        <div className={styles.buttonLayout}>
          <button className={styles.nextButton} onClick={proceedLogin}>
            Login
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default RegistrationSuccessModal;
