"use client";

import React, {
  ChangeEvent,
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./CreateProfileModal7_1.module.css";
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
  preloadedContent?: string | any;
  closeNow: () => void;
  cancelNow: () => void;
}

const employeesCountOptions = [
  "No Employees yet",
  "1 - 5",
  "5 - 10",
  "10 - 20",
  "More than 20",
];

const CreateProfileModal7_1: FC<Props> = ({
  modalIsOpen,
  nextStep,
  prevStep,
  editMode = false,
  preloadedContent,
  closeNow,
  cancelNow,
}) => {
  const [doc, setDoc] = useState<any>();
  const dropRef = useRef(null) as MutableRefObject<HTMLInputElement | null>;
  const fileInputRef = useRef(
    null
  ) as MutableRefObject<HTMLInputElement | null>;

  const [openEmployeeList, setOpenEmployeeList] = useState(false);
  const [employeesCount, setEmployeesCount] = useState("");

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

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <h3>Business Info</h3>

        <div className={styles.inputContainer}>
          <label>Search by Business Name</label>
          <br />
          <input type="text" placeholder="Enter Business Name" />
        </div>

        <div className={styles.or}>
          <p>or</p>
        </div>

        <div>
          <div className={styles.certificateUploadContainer}>
            <p>Upload Logo</p>
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
                      onClick={() => setDoc(null)}
                    />
                  </div>
                </div>
              </div>
            )}
            <input
              type="file"
              hidden
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </div>

          <div className={styles.inputContainer}>
            <label>Business Name</label>
            <br />
            <input type="text" placeholder="Enter your Business Name" />
          </div>

          <div className={styles.inputContainer}>
            <label>Business Email</label>
            <br />
            <input type="email" placeholder="Enter your Business Email" />
          </div>

          <div className={styles.inputContainer}>
            <label>Business Address</label>
            <br />
            <input type="text" placeholder="Enter your Business Address" />
          </div>

          <div className={styles.inputContainer}>
            <label>Business Phone Number</label>
            <br />
            <input type="text" placeholder="Enter your Business Phone Number" />
          </div>

          <div className={styles.inputContainer}>
            <label>Business Website</label>
            <br />
            <input type="text" placeholder="Enter your Business Website" />
          </div>

          <div className={styles.inputContainer}>
            <label>Years of Operation</label>
            <br />
            <input type="text" placeholder="Business Years of Operation" />
          </div>

          <div className={styles.countryList}>
            <div className={styles.countryPickerContainer}>
              <label>Number of employees</label>
              <br />
              <div
                className={styles.countryPicker}
                onClick={() => setOpenEmployeeList((curr) => !curr)}
              >
                <div className={styles.selectedOption}>
                  <p
                    className={
                      employeesCount
                        ? styles.countrySelected
                        : styles.countryUnSelected
                    }
                  >
                    {employeesCount ? employeesCount : "Employees Count"}
                  </p>
                </div>
                <img
                  src={
                    openEmployeeList
                      ? "https://purocoach-crm-assets.s3.amazonaws.com/client-registration/up-arrow-gray.png"
                      : "https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-down.png"
                  }
                  alt=""
                  className={
                    openEmployeeList ? styles.upArrow : styles.downArrow
                  }
                />
              </div>
            </div>

            {openEmployeeList && (
              <div className={styles.countryOptions}>
                {employeesCountOptions.map((option, index) => {
                  return (
                    <p
                      key={index}
                      onClick={() => {
                        setEmployeesCount(option);
                        setOpenEmployeeList(false);
                      }}
                    >
                      {option}
                    </p>
                  );
                })}
              </div>
            )}
          </div>

          <div className={styles.inputContainer}>
            <label>Your Role</label>
            <br />
            <input type="text" placeholder="Enter your Role" />
          </div>
        </div>

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
          onClick={prevStep}
        />
      </div>
    </Modal>
  );
};

export default CreateProfileModal7_1;
