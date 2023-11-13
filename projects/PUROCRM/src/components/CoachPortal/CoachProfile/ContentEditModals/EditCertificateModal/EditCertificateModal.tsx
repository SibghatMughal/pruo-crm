"use client";

import React, {
  ChangeEvent,
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./EditCertificateModal.module.css";
import Modal from "react-modal";
import Link from "next/link";
import { IMAGE_URL } from "@/constants/endpoints";
import { getCoachingCategories } from "@/services/coaching-categories";
import { ModalBottomContainer } from "@/components/CoachPortal/CoachProfile";
import CancelModal from "../../CancelModal/CancelModal";

interface Props {
  modalIsOpen: boolean;
  deleteDoc: () => void;
  setReviewDoc: (value: any) => void;
  doc: any;
  docName: string;
  setDoc: React.Dispatch<React.SetStateAction<any>>;
  closeNow: () => void;
  cancelNow: () => void;
}

const EditCertificateModal: FC<Props> = ({
  modalIsOpen,
  setReviewDoc,
  doc,
  docName,
  setDoc,
  deleteDoc,
  closeNow,
  cancelNow,
}) => {
  const dropRef = useRef(null) as MutableRefObject<HTMLInputElement | null>;
  const fileInputRef = useRef(
    null
  ) as MutableRefObject<HTMLInputElement | null>;

  const [openCancelModal, setOpenCancelModal] = useState(false);

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
    } else if (files && files.length > 1) {
      console.log("You can't add multiple files");
    }
  };

  const editDoc = () => {};

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.profileModal}>
        <div className={styles.container}>
          <h3>Upload supporting document</h3>
          <p>Upload certification</p>
          <div className={styles.certificateNameContainer}>
            <p>Certification Name</p>
            <div>
              <h4>{docName}</h4>
            </div>
          </div>
          <div className={styles.certificateUploadContainer}>
            <p>Upload Certification</p>
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
      </div>
    </Modal>
  );
};

export default EditCertificateModal;
