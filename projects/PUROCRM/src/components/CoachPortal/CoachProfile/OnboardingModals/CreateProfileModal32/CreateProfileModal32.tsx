"use client";

import React, { FC, useState } from "react";
import styles from "./CreateProfileModal32.module.css";
import Modal from "react-modal";
import { IMAGE_URL } from "@/constants/endpoints";

interface Props {
  nextStep: () => void;
  modalIsOpen: boolean;
  prevStep: () => void;
  closeModal: () => void;
}

const CreateProfileModal32: FC<Props> = ({
  modalIsOpen,
  nextStep,
  prevStep,
  closeModal,
}) => {
  const [openLearnMore, setOpenLearnMore] = useState(false);

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        {openLearnMore ? (
          <>
            <h3>Learn More</h3>
            <p>
              3D Face Authentication detects your face in your video selfie and
              your profile photos, and extracts facial geometries using facial
              recognition technology to generate a unique number or facial
              geometry “template.” These templates are used to help check
              whether the person in your video selfie is the same person as in
              your profile photos.
            </p>
            <p>
              Your facial geometry templates are deleted within 24 hours. Your
              video selfie is deleted and is not added to your profile, but we
              keep three screenshots from your video selfie for the purposes of
              auditing and managing this feature.
            </p>

            <div
              className={styles.exitButton}
              onClick={() => setOpenLearnMore(false)}
            >
              <button>Exit</button>
            </div>
          </>
        ) : (
          <>
            <h3>
              Please verify your identity{" "}
              <span onClick={() => setOpenLearnMore(true)}>Learn More</span>
            </h3>
            <div className={styles.contentContainer}>
              <div className={styles.contentContainerLeft}>
                <p>Face-based Identification</p>
                <img
                  src={`${IMAGE_URL}/coach-portal/face-recognition.svg`}
                  alt=""
                />
              </div>
              <div className={styles.contentContainerRight}>
                <h3>How does Selfie Verification work?</h3>
                <p>
                  Selfie Verification consists of one simple step: taking a
                  video selfie. You will receive "verified" status if the person
                  in your video selfie passes both the Liveness Check and 3D
                  Face Authentication step.
                </p>
                <h4>
                  Click on “Scan your face with your camera” button to begin.
                </h4>
              </div>
            </div>
            <img
              src={`${IMAGE_URL}/coach-portal/close.svg`}
              alt=""
              className={styles.closeImg}
              onClick={closeModal}
            />

            <div className={styles.bottomContainer}>
              <div>
                <button className={styles.specialBtn} onClick={prevStep}>
                  <img
                    src={`${IMAGE_URL}/coach-portal/arrow-left.svg`}
                    alt=""
                  />
                  <span>Back</span>
                </button>
                <button className={styles.specialBtn}>
                  <img
                    src={`${IMAGE_URL}/coach-portal/video-save.svg`}
                    alt=""
                  />
                  <span>Skip</span>
                </button>
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.leftBtn} onClick={() => {}}>
                  {/* <img src={`${IMAGE_URL}/coach-portal/record.svg`} alt="" /> */}
                  <span>Save your face with camera</span>
                </button>
                {/* <Link href={"/coach-portal/coach-profile"}> */}
                <button className={styles.rightBtn} onClick={nextStep}>
                  <span>Continue</span>
                  <img
                    src={`${IMAGE_URL}/coach-portal/arrow-right.svg`}
                    alt=""
                  />
                </button>
                {/* </Link> */}
              </div>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default CreateProfileModal32;
