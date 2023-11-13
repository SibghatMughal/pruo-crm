"use client";

import React, {
  ChangeEvent,
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./CreateProfileModal25.module.css";
import Modal from "react-modal";
import Link from "next/link";
import { IMAGE_URL } from "@/constants/endpoints";
import { ModalBottomContainer } from "@/components/CoachPortal/CoachProfile";
import CancelModal from "../../CancelModal/CancelModal";

interface Props {
  nextStep: () => void;
  modalIsOpen: boolean;
  prevStep: () => void;
  editMode: boolean;
  loadedDoc: any;
  closeNow: () => void;
  cancelNow: () => void;
  closeModal: () => void;
}

const CreateProfileModal25: FC<Props> = ({
  modalIsOpen,
  nextStep,
  prevStep,
  editMode,
  closeNow,
  loadedDoc,
  cancelNow,
  closeModal,
}) => {
  const fileInputRef = useRef(
    null
  ) as MutableRefObject<HTMLInputElement | null>;
  const dropRef = useRef(null) as MutableRefObject<HTMLInputElement | null>;

  const [doc, setDoc] = useState<any>(null);
  const [clientName, setClientName] = useState("");

  const [openCancelModal, setOpenCancelModal] = useState(false);

  useEffect(() => {
    if (loadedDoc) {
      setDoc(loadedDoc);
      setClientName(loadedDoc.name);
    }
  }, [loadedDoc]);

  // useEffect(() => {
  //   dropRef.current?.addEventListener("dragover", handleDragOver);
  //   dropRef.current?.addEventListener("drop", handleDrop);
  // }, []);

  // const handleDragOver = (e: DragEvent) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  // };

  // const handleDrop = (e: DragEvent) => {
  //   e.preventDefault();
  //   e.stopPropagation();

  //   const files = e.dataTransfer?.files;

  //   if (files && files.length === 1) {
  //     setDoc(files[0]);
  //   } else if (files && files.length > 1) {
  //     console.log("You can't add multiple files");
  //   }
  // };

  // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   const files = e.target?.files;

  //   if (files && files.length === 1) {
  //     setDoc(files[0]);
  //   } else if (files && files.length > 1) {
  //     console.log("You can't add multiple files");
  //   }
  // };

  // const deleteDoc = () => {
  //   setDoc(null);
  // };

  // const nextCaseStudy = () => {
  //   if (currentCase + 1 < numberOfCaseStudies) {
  //     setCurrentCase((curr: any) => curr + 1);
  //     // const docData = docs.find(
  //     //   (doc, index) => doc.name == selectedOptions[currentDoc + 1].name
  //     // );
  //     // setDoc(docData ? docData.doc : null);
  //   } else {
  //     nextStep();
  //   }
  // };

  // const prevCaseStudy = () => {
  //   if (currentCase === 0) {
  //     prevStep();
  //   } else {
  //     setCurrentCase((curr: any) => curr - 1);
  //     // const docData = docs.find(
  //     //   (doc, index) => doc.name == selectedOptions[currentDoc - 1].name
  //     // );
  //     // setDoc(docData ? docData.doc : null);
  //   }
  // };

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <h3>
          Please upload your client testimonial video if your have have one.{" "}
        </h3>

        <div className={styles.inputContainer}>
          <label>Client Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter Client Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </div>
        <div className={styles.certificateUploadContainer}>
          <p>Testimonial Videos</p>
          <div className={styles.testimonialUploadContainer}>
            <div className={styles.testimonialUpload}>
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
                    <img src={`${IMAGE_URL}/coach-portal/upload.svg`} alt="" />
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
                          fileInputRef.current?.click();
                        }}
                      />
                      <img
                        src={`${IMAGE_URL}/coach-portal/eye.svg`}
                        alt=""
                        onClick={() => {
                          // setReviewDoc(doc);
                        }}
                      />
                      <img
                        src={`${IMAGE_URL}/coach-portal/trash.svg`}
                        alt=""
                        // onClick={() => deleteDoc()}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.or}>or</div>
            <div className={styles.continue}>
              <button>
                <img
                  src={`${IMAGE_URL}/coach-portal/request-testimonial.svg`}
                  alt=""
                />
                <span>Request for Testimonial Videos</span>
              </button>
            </div>
          </div>
        </div>

        <input
          type="file"
          hidden
          ref={fileInputRef}
          // onChange={handleFileChange}
          onChange={() => {}}
        />

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
          onClick={closeModal}
        />
      </div>
    </Modal>
  );
};

export default CreateProfileModal25;
