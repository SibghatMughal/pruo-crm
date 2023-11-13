"use client";

import React, { FC, useState } from "react";
import styles from "./CreateProfileModal24.module.css";
import Modal from "react-modal";
import Link from "next/link";
import { IMAGE_URL } from "@/constants/endpoints";
import { ModalBottomContainer } from "@/components/CoachPortal/CoachProfile";

interface Props {
  nextStep: () => void;
  modalIsOpen: boolean;
  prevStep: () => void;
  closeModal: () => void;
}

const CreateProfileModal24: FC<Props> = ({
  modalIsOpen,
  nextStep,
  prevStep,
  closeModal,
}) => {
  const [isProvided, setIsProvided] = useState("");

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <h3>
          Do you have some client testimonials you would like to submit with
          your profile?
          {/* <span>Learn More</span> */}
        </h3>
        <div className={styles.inputsContainer}>
          <p
            className={
              isProvided === "true" ? styles.selected : styles.unSelected
            }
            onClick={() => setIsProvided("true")}
          >
            Yes
          </p>
          <p
            className={
              isProvided === "false" ? styles.selected : styles.unSelected
            }
            onClick={() => setIsProvided("false")}
          >
            No
          </p>
        </div>

        <ModalBottomContainer nextStep={nextStep} prevStep={prevStep} />
        <img
          src={`${IMAGE_URL}/coach-portal/close.svg`}
          alt=""
          className={styles.closeImg}
          onClick={closeModal}
        />
      </div>
    </Modal>
  );
};

export default CreateProfileModal24;
