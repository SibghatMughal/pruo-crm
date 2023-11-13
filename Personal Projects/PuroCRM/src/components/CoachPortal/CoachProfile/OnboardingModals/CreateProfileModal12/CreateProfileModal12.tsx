"use client";

import React, { FC, MutableRefObject, useRef, useState } from "react";
import styles from "./CreateProfileModal12.module.css";
import Modal from "react-modal";
import Link from "next/link";
import { IMAGE_URL } from "@/constants/endpoints";

interface Props {
  nextStep: () => void;
  modalIsOpen: boolean;
  prevStep: () => void;
  handleSelectedImg: (value: React.ChangeEvent<HTMLInputElement>) => void;
  closeModal: () => void;
}

const CreateProfileModal12: FC<Props> = ({
  modalIsOpen,
  nextStep,
  prevStep,
  handleSelectedImg,
  closeModal,
}) => {
  const inputRef = useRef(null) as MutableRefObject<HTMLInputElement | null>;

  const handleChange = (event: any) => {
    // console.log(event.target.files);

    // const objectUrl = URL.createObjectURL(event.target.files[0]);
    handleSelectedImg(event);
    nextStep();
  };

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <h3>Upload your coach profile image</h3>

        <div className={styles.contentContainer}>
          <div className={styles.profileImage}>
            <img
              src={`${IMAGE_URL}/coach-portal/image-placeholder.svg`}
              alt=""
            />
          </div>
          <h4>Kiera Botosh</h4>
          <h5>Business Executive Coach</h5>
          <p>Nashville, Tennessee, United States</p>

          <button
            className={styles.addButton}
            onClick={() => inputRef.current?.click()}
          >
            <img src={`${IMAGE_URL}/coach-portal/add-icon.svg`} alt="" />
            <span>Add Your Profile Image</span>
          </button>
        </div>

        <input
          type="file"
          hidden
          ref={inputRef}
          accept="image/*"
          onChange={handleChange}
        />

        <div className={styles.bottomContainer}>
          <div>
            <button className={styles.finishBtn}>
              <span>Finish Later</span>
            </button>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.leftBtn} onClick={prevStep}>
              <img src={`${IMAGE_URL}/coach-portal/arrow-left.svg`} alt="" />
              <span>Back</span>
            </button>
            {/* <button className={styles.rightBtn} onClick={nextStep}>
              <span>Continue</span>
              <img src={`${IMAGE_URL}/coach-portal/arrow-right.svg`} alt="" />
            </button> */}
          </div>
        </div>
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

export default CreateProfileModal12;
