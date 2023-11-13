"use client";

import React, { FC } from "react";
import Modal from "react-modal";
import styles from "./SignupSuccessModal.module.css";
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

const SignupSuccessModal: FC<Props> = ({
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
    router.push("/coach-portal");
    setLoading(false);
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
        <h3>You are successfully signed-up</h3>
        <p>
          Our product team will be in touch to help you make the most of your
          trial.
        </p>
        <div className={styles.buttonLayout}>
          <button className={styles.backButton} onClick={() => {}}>
            Start Onboarding
          </button>
          <button className={styles.nextButton} onClick={proceedLogin}>
            Explore the CRM
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default SignupSuccessModal;
