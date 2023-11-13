"use client";

import React, { FC } from "react";
import styles from "./CreateProfileModal27.module.css";
import Modal from "react-modal";
import Link from "next/link";
import { IMAGE_URL } from "@/constants/endpoints";
import { ModalBottomContainer } from "@/components/CoachPortal/CoachProfile";

interface Props {
  nextStep: () => void;
  modalIsOpen: boolean;
  prevStep: () => void;
  deleteTestimonial: () => void;
  addNewTestimonial: () => void;
  closeModal: () => void;
  // selectedOptions: any[];
}

let selectedOptions = [
  {
    name: "Rochel Foose",
  },
  {
    name: "Lauralee Quintero",
  },
];

const CreateProfileModal27: FC<Props> = ({
  modalIsOpen,
  nextStep,
  prevStep,
  deleteTestimonial,
  addNewTestimonial,
  closeModal,
}) => {
  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <h3>
          Do you have some client testimonials you would like to submit with
          your profile?
        </h3>
        <p>Testimonials</p>
        <div className={styles.buttonContainer}>
          <button onClick={addNewTestimonial}>Add New Testimonial</button>
        </div>
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <td>
                  <img
                    src={`${IMAGE_URL}/coach-portal/testimonial-header.svg`}
                    alt=""
                  />
                </td>
                <td>Client</td>
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
                        src={`${IMAGE_URL}/coach-portal/testimonial-file.svg`}
                        alt=""
                      />
                    </td>
                    <td>{selectedOption.name}</td>
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
                            addNewTestimonial();
                          }}
                        />
                        <img src={`${IMAGE_URL}/coach-portal/eye.svg`} alt="" />
                        <img
                          src={`${IMAGE_URL}/coach-portal/trash.svg`}
                          alt=""
                          onClick={deleteTestimonial}
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

export default CreateProfileModal27;
