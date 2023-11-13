"use client";

import React, { FC, useState } from "react";
import styles from "./CreateProfileModal7.module.css";
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

const CreateProfileModal7: FC<Props> = ({
  modalIsOpen,
  nextStep,
  prevStep,
  closeModal,
}) => {
  const [openYearList, setOpenYearList] = useState(false);
  const [selectedYear, setSelectedYear] = useState(0);

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <h3>How many years in that field of coaching?</h3>

        <div className={styles.countryList}>
          <div className={styles.countryPickerContainer}>
            <label>Select years</label>
            <br />
            <div
              className={styles.countryPicker}
              onClick={() => setOpenYearList((curr) => !curr)}
            >
              <div className={styles.selectedOption}>
                <p
                  className={
                    selectedYear > 0
                      ? styles.countrySelected
                      : styles.countryUnSelected
                  }
                >
                  {selectedYear > 0 ? selectedYear : "Years of experience"}
                </p>
              </div>
              <img
                src={
                  openYearList
                    ? "https://purocoach-crm-assets.s3.amazonaws.com/client-registration/up-arrow-gray.png"
                    : "https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-down.png"
                }
                alt=""
                className={openYearList ? styles.upArrow : styles.downArrow}
              />
            </div>
          </div>

          {openYearList && (
            <div className={styles.countryOptions}>
              {Array.from(Array(15).keys()).map((_, index) => {
                return (
                  <p
                    key={index}
                    onClick={() => {
                      setSelectedYear(index + 1);
                    }}
                  >
                    {index + 1}
                  </p>
                );
              })}
            </div>
          )}
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

export default CreateProfileModal7;
