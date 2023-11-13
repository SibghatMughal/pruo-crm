"use client";

import React, { FC } from "react";
import styles from "./CreateProfileModal19.module.css";
import Modal from "react-modal";
import Link from "next/link";
import { IMAGE_URL } from "@/constants/endpoints";
import { ModalBottomContainer } from "@/components/CoachPortal/CoachProfile";

interface Props {
  nextStep: () => void;
  modalIsOpen: boolean;
  prevStep: () => void;
  selectedOptions: any[];
  closeModal: () => void;
}

const CreateProfileModal19: FC<Props> = ({
  modalIsOpen,
  nextStep,
  prevStep,
  selectedOptions,
  closeModal,
}) => {
  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <h3>What are your qualifications?</h3>
        <p>Certifications</p>
        <div className={styles.buttonContainer}>
          <button>Add New Certificate</button>
        </div>
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <td>
                  <img
                    src={`${IMAGE_URL}/coach-portal/certification-header.svg`}
                    alt=""
                  />
                </td>
                <td>Coach Certification</td>
                <td>Organization</td>
                <td>Status</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {selectedOptions.map((selectedOption, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={`${IMAGE_URL}/coach-portal/certification-file.svg`}
                        alt=""
                      />
                    </td>
                    <td>
                      <div className={styles.certificateContainer}>
                        <span>{selectedOption.name}</span>
                        <img
                          src={`${IMAGE_URL}/coach-portal/verified-file.svg`}
                          alt=""
                        />
                      </div>
                    </td>
                    <td>ICF</td>
                    <td>
                      <p className={styles.status}>
                        <img
                          src={`${IMAGE_URL}/coach-portal/status-pending.svg`}
                          alt=""
                        />
                        <span>Pending</span>
                      </p>
                    </td>
                    <td>
                      <div className={styles.actionsContainer}>
                        <img
                          src={`${IMAGE_URL}/coach-portal/edit-grey.svg`}
                          alt=""
                          onClick={() => {
                            //   editDoc();
                            //   fileInputRef.current?.click();
                          }}
                        />
                        <img src={`${IMAGE_URL}/coach-portal/eye.svg`} alt="" />
                        <img
                          src={`${IMAGE_URL}/coach-portal/trash.svg`}
                          alt=""
                          // onClick={deleteDoc}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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

export default CreateProfileModal19;
