"use client";

import React, { FC, useState } from "react";
import styles from "./CreateProfileModal4_1.module.css";
import Modal from "react-modal";
import Link from "next/link";
import { IMAGE_URL } from "@/constants/endpoints";
import {
  CancelModal,
  ModalBottomContainer,
} from "@/components/CoachPortal/CoachProfile";

interface Props {
  nextStep: () => void;
  modalIsOpen: boolean;
  prevStep: () => void;
  selectedOptions: any[];
  setLanguageLevel: (id: any, value: any) => void;
  setLanguage: (id: any, value: any) => void;
  addMoreLanguages: () => void;
  removeMoreLanguages: (id: any) => void;
  editMode: boolean;
  preloadedContent?: string | any;
  closeNow: () => void;
  cancelNow: () => void;
}

const fluencyLevel = ["Native", "Bilingual", "Intermediate", "Beginner"];
const languages = [
  "English",
  "French",
  "Spanish",
  "German",
  "Chinese",
  "Hindi",
];

const CreateProfileModal4_1: FC<Props> = ({
  modalIsOpen,
  nextStep,
  prevStep,
  selectedOptions,
  setLanguageLevel,
  setLanguage,
  addMoreLanguages,
  removeMoreLanguages,
  editMode = false,
  preloadedContent,
  closeNow,
  cancelNow,
}) => {
  console.log(selectedOptions);

  const [openCancelModal, setOpenCancelModal] = useState(false);

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <h3>Languages Known</h3>
        <div className={styles.addMoreBtn}>
          <button onClick={addMoreLanguages}>Add More Languages</button>
        </div>
        {selectedOptions.map((selectedOption, index) => {
          return (
            <LanguageSelector
              key={index}
              selectedOption={selectedOption}
              setLanguage={setLanguage}
              setLanguageLevel={setLanguageLevel}
              removeMoreLanguages={() => removeMoreLanguages(selectedOption.id)}
              id={index}
            />
          );
        })}
        {!editMode ? (
          <ModalBottomContainer nextStep={nextStep} prevStep={prevStep} />
        ) : (
          <div className={styles.bottomContainer}>
            <div>
              {/* <button className={styles.finishBtn}>
              <span>Finish Later</span>
            </button> */}
            </div>
            <div className={styles.buttonContainer}>
              <button
                className={styles.leftBtn}
                onClick={() => setOpenCancelModal(true)}
              >
                <span>Cancel</span>
              </button>
              {/* <Link href={"/coach-portal/coach-profile"}> */}
              <button className={styles.rightBtn} onClick={closeNow}>
                <span>Save</span>
                {/* <img src={`${IMAGE_URL}/coach-portal/arrow-right.svg`} alt="" /> */}
              </button>
              {/* </Link> */}
            </div>
          </div>
        )}
        <CancelModal
          stayHere={() => setOpenCancelModal(false)}
          modalIsOpen={openCancelModal}
          closeNow={() => {
            setOpenCancelModal(false);
            cancelNow();
          }}
        />
        <img
          src={`${IMAGE_URL}/coach-portal/close.svg`}
          alt=""
          className={styles.closeImg}
        />
      </div>
    </Modal>
  );
};

export default CreateProfileModal4_1;

const LanguageSelector = ({
  selectedOption,
  setLanguage,
  setLanguageLevel,
  removeMoreLanguages,
  id,
}: any) => {
  const [openYearList, setOpenYearList] = useState(false);
  const [openLanguageList, setOpenLanguageList] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const [currentFluency, setCurrentFluency] = useState("Native");
  return (
    <div className={styles.profileContainer}>
      <div className={styles.languageList}>
        <div className={styles.languagePickerContainer}>
          <label>Select your language</label>
          <br />
          <div
            className={styles.languagePicker}
            onClick={() => setOpenLanguageList((curr) => !curr)}
          >
            <div className={styles.selectedOption}>
              <p
                className={
                  // selectedOptions.length > 0
                  // ?
                  styles.languageSelected
                  // : styles.languageUnSelected
                }
              >
                {selectedOption?.name ? selectedOption?.name : currentLanguage}
              </p>
            </div>
            <img
              src={
                openLanguageList
                  ? "https://purocoach-crm-assets.s3.amazonaws.com/client-registration/up-arrow-gray.png"
                  : "https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-down.png"
              }
              alt=""
              className={openLanguageList ? styles.upArrow : styles.downArrow}
            />
          </div>
        </div>

        {openLanguageList && (
          <div className={styles.languageOptions}>
            {languages.map((language, ind) => {
              return (
                <p
                  key={ind}
                  onClick={() => {
                    // setCaseStudies(index + 1);
                    setLanguage(selectedOption.id, language);
                    setCurrentLanguage(language);
                    setOpenLanguageList(false);
                  }}
                >
                  {language}
                </p>
              );
            })}
          </div>
        )}
      </div>
      <div className={styles.fluencyList}>
        <div className={styles.languagePickerContainer}>
          <label>Select your fluency</label>
          <br />
          <div
            className={styles.languagePicker}
            onClick={() => setOpenYearList((curr) => !curr)}
          >
            <div className={styles.selectedOption}>
              <p
                className={
                  // selectedOptions.length > 0
                  // ?
                  styles.languageSelected
                  // : styles.languageUnSelected
                }
              >
                {selectedOption?.fluency
                  ? selectedOption?.fluency
                  : currentFluency}
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
          <div className={styles.languageOptions}>
            {fluencyLevel.map((fluency, ind) => {
              return (
                <p
                  key={ind}
                  onClick={() => {
                    // setCaseStudies(index + 1);
                    setLanguageLevel(selectedOption.id, fluency);
                    setCurrentFluency(fluency);
                    setOpenYearList(false);
                  }}
                >
                  {fluency}
                </p>
              );
            })}
          </div>
        )}
      </div>

      {id > 0 && (
        <div className={styles.trash} onClick={removeMoreLanguages}>
          <img src={`${IMAGE_URL}/coach-portal/trash.svg`} alt="" />
          <p>Remove</p>
        </div>
      )}
    </div>
  );
};
