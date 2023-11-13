"use client";

import React, { FC, MutableRefObject, useRef, useState } from "react";
import styles from "./CreateProfileModal13.module.css";
import Modal from "react-modal";
import Link from "next/link";
import { IMAGE_URL } from "@/constants/endpoints";
import { CoachImageCropper } from "@/components/CoachPortal/CoachProfile";

interface Props {
  nextStep: () => void;
  modalIsOpen: boolean;
  prevStep: () => void;
  selectedImg?: any;
  setSelectedImg: (value: string) => void;
  closeModal: () => void;
}

const CreateProfileModal13: FC<Props> = ({
  modalIsOpen,
  nextStep,
  prevStep,
  selectedImg,
  setSelectedImg,
  closeModal,
}) => {
  const inputRef = useRef(null) as MutableRefObject<HTMLInputElement | null>;

  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);

  const handleSelectedImg = (e: any) => {
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setSelectedImg(objectUrl);
  };

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <h3>Profile Photo</h3>

        <div className={styles.contentContainer}>
          {/* <img src={selectedImg} alt="" /> */}
          <CoachImageCropper
            imgValue={selectedImg}
            scale={scale}
            rotate={rotate}
          />
        </div>

        <div className={styles.filterContainer}>
          <div className={styles.filtersHeader}>
            <div className={styles.filterHeaderItem}>
              <img src={`${IMAGE_URL}/coach-portal/crop-selected.svg`} alt="" />
              <p>Crop</p>
            </div>
            <div className={styles.filterHeaderItem}>
              <img src={`${IMAGE_URL}/coach-portal/filters.svg`} alt="" />
              <p>Filters</p>
            </div>
            <div className={styles.filterHeaderItem}>
              <img src={`${IMAGE_URL}/coach-portal/adjust.svg`} alt="" />
              <p>Adjust</p>
            </div>
          </div>

          <div className={styles.filterOptionsContainer}>
            <div className={styles.filterOptionContainer}>
              <h4>Zoom</h4>
              <div>
                <p>-</p>
                <input
                  type="range"
                  step={0.1}
                  onChange={(e) => setScale(Number(e.target.value))}
                  min={1}
                  max={3}
                />
                <p>+</p>
              </div>
            </div>
            <div className={styles.filterOptionContainer}>
              <h4>Straighten</h4>
              <div>
                <p>-</p>
                <input
                  type="range"
                  onChange={(e) =>
                    setRotate(
                      Math.min(180, Math.max(-180, Number(e.target.value)))
                    )
                  }
                />
                <p>+</p>
              </div>
            </div>
          </div>
        </div>

        <input
          type="file"
          hidden
          ref={inputRef}
          accept="image/*"
          onChange={handleSelectedImg}
        />

        <div className={styles.bottomContainer}>
          <div>
            <button className={styles.finishBtn}>
              <span>Finish Later</span>
            </button>
          </div>
          <div className={styles.buttonContainer}>
            <button
              className={styles.leftBtn}
              onClick={() => inputRef?.current?.click()}
            >
              <span>Change Photo</span>
            </button>
            <button className={styles.rightBtn} onClick={nextStep}>
              <span>Save Photo</span>
            </button>
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

export default CreateProfileModal13;
