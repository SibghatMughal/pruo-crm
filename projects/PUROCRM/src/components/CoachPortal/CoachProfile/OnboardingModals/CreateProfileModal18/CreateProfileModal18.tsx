"use client";

import React, {
  ChangeEvent,
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./CreateProfileModal18.module.css";
import Modal from "react-modal";
import Link from "next/link";
import { IMAGE_URL } from "@/constants/endpoints";
import { getCoachingCategories } from "@/services/coaching-categories";
import { ModalBottomContainer } from "@/components/CoachPortal/CoachProfile";

interface Props {
  nextStep: () => void;
  modalIsOpen: boolean;
  prevStep: () => void;
  deleteDoc: () => void;
  setReviewDoc: (value: any) => void;
  selectedOptions: any[];
  docs: any[];
  setDocs: React.Dispatch<React.SetStateAction<any[]>>;
  currentDoc: any;
  setCurrentDoc: React.Dispatch<React.SetStateAction<number>>;
  doc: any;
  setDoc: React.Dispatch<React.SetStateAction<any>>;
  closeModal: () => void;
}

const CreateProfileModal18: FC<Props> = ({
  modalIsOpen,
  nextStep,
  prevStep,
  selectedOptions,
  setReviewDoc,
  docs,
  setDocs,
  doc,
  setDoc,
  currentDoc,
  setCurrentDoc,
  deleteDoc,
  closeModal,
}) => {
  const dropRef = useRef(null) as MutableRefObject<HTMLInputElement | null>;
  const fileInputRef = useRef(
    null
  ) as MutableRefObject<HTMLInputElement | null>;

  useEffect(() => {
    dropRef.current?.addEventListener("dragover", handleDragOver);
    dropRef.current?.addEventListener("drop", handleDrop);
  }, []);

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer?.files;

    if (files && files.length === 1) {
      setDoc(files[0]);
      setDocs((curr: any) => {
        return [
          ...curr,
          {
            name: selectedOptions[currentDoc].name,
            doc: files[0],
          },
        ];
      });
    } else if (files && files.length > 1) {
      console.log("You can't add multiple files");
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.target?.files;

    if (files && files.length === 1) {
      setDoc(files[0]);
      setDocs((curr: any) => {
        return [
          ...curr,
          {
            name: selectedOptions[currentDoc].name,
            doc: files[0],
          },
        ];
      });
    } else if (files && files.length > 1) {
      console.log("You can't add multiple files");
    }
  };

  const nextDoc = () => {
    if (currentDoc + 1 < selectedOptions.length) {
      setCurrentDoc((curr) => curr + 1);
      const docData = docs.find(
        (doc, index) => doc.name == selectedOptions[currentDoc + 1].name
      );
      setDoc(docData ? docData.doc : null);
    } else {
      nextStep();
    }
  };

  const prevDoc = () => {
    if (currentDoc === 0) {
      prevStep();
    } else {
      setCurrentDoc((curr) => curr - 1);
      const docData = docs.find(
        (doc, index) => doc.name == selectedOptions[currentDoc - 1].name
      );
      setDoc(docData ? docData.doc : null);
    }
  };

  const editDoc = () => {
    setDocs((currDocs) => {
      return currDocs.filter(
        (doc) => doc.name !== selectedOptions[currentDoc].name
      );
    });
  };

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.profileModal}>
        {selectedOptions.map((selectedOption, index) => {
          if (index === currentDoc) {
            return (
              <div key={index} className={styles.container}>
                <h3>Upload supporting document {currentDoc + 1} </h3>
                <p>Upload certification</p>
                <div className={styles.certificateNameContainer}>
                  <p>Certification Name {currentDoc + 1}</p>
                  <div>
                    <h4>{selectedOption.name}</h4>
                  </div>
                </div>
                <div className={styles.certificateUploadContainer}>
                  <p>Upload Certification {currentDoc + 1}</p>
                  {!doc ? (
                    <div
                      className={styles.uploadContainer}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <div
                        ref={dropRef}
                        className={styles.upload}
                        // onClick={() => fileInputRef.current?.click()}
                      >
                        <img
                          src={`${IMAGE_URL}/coach-portal/upload.svg`}
                          alt=""
                        />
                        <p>
                          Click to Upload or <br />
                          drag & drop
                        </p>
                        <h5>
                          Max file size: <span>15MB</span>
                        </h5>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.uploadedContainer}>
                      <img
                        src={`${IMAGE_URL}/coach-portal/uploaded-file.svg`}
                        alt=""
                      />
                      <p>{doc.name}</p>
                      <div className={styles.uploadedFileInfo}>
                        <h3>
                          {doc.size > 1048574
                            ? `${(doc.size / 1048576).toFixed(2)}MB`
                            : `${(doc.size / 1000).toFixed(2)}KB`}
                        </h3>
                        <div className={styles.uploadedActionContainer}>
                          <img
                            src={`${IMAGE_URL}/coach-portal/edit-grey.svg`}
                            alt=""
                            onClick={() => {
                              editDoc();
                              fileInputRef.current?.click();
                            }}
                          />
                          <img
                            src={`${IMAGE_URL}/coach-portal/eye.svg`}
                            alt=""
                            onClick={() => {
                              setReviewDoc(doc);
                            }}
                          />
                          <img
                            src={`${IMAGE_URL}/coach-portal/trash.svg`}
                            alt=""
                            onClick={() => deleteDoc()}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  hidden
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                <ModalBottomContainer nextStep={nextDoc} prevStep={prevDoc} />
              </div>
            );
          }
        })}

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

export default CreateProfileModal18;
