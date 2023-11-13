"use client";

import React, { FC, useEffect, useState } from "react";
import styles from "./AddAboutMeModal.module.css";
import Modal from "react-modal";
import { IMAGE_URL } from "@/constants/endpoints";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import type ReactQuill from "react-quill";
const QuillWrapper = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    // eslint-disable-next-line react/display-name
    return ({ ...props }) => <RQ {...props} />;
  },
  {
    ssr: false,
  }
) as typeof ReactQuill;
import "quill/dist/quill.snow.css";
import BottomContainer from "../BottomContainer/BottomContainer";
import CancelModal from "../CancelModal/CancelModal";

interface Props {
  nextStep: () => void;
  modalIsOpen: boolean;
  prevStep: () => void;
  editMode: boolean;
  preloadedContent?: string | any;
  closeNow: () => void;
  cancelNow: () => void;
}

const AddAboutMeModal: FC<Props> = ({
  modalIsOpen,
  nextStep,
  prevStep,
  editMode = false,
  preloadedContent,
  closeNow,
  cancelNow,
}) => {
  const [content, setContent] = useState("");
  const [contentLength, setContentLength] = useState(0);

  const [openCancelModal, setOpenCancelModal] = useState(false);

  useEffect(() => {
    if (editMode && modalIsOpen) {
      setContent(preloadedContent);
      setContentLength(1200);
    }
  }, [editMode, modalIsOpen]);

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ size: ["small", false, "large", "huge"] }],
      ["link"],
      [{ color: [] }, { background: [] }],
    ],
  };

  const placeholder = "Brief about you...";

  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "align",
    "list",
    "indent",
    "size",
    "link",
    "background",
    "color",
  ];

  console.log(content, contentLength);

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <h3>
          Write about yourself, your services and describe all that make you
          different among other coaches.
        </h3>
        <p>
          Be create, be unique, be yourself! <span>View Example</span>
        </p>
        <h4>About Me</h4>
        <div className={styles.descriptionContainer}>
          <div className={styles.quillContainer}>
            <QuillWrapper
              theme="snow"
              placeholder={placeholder}
              defaultValue={content}
              value={content}
              onChange={(value) => setContent(value)}
              modules={modules}
              formats={formats}
            />
          </div>
          <div className={styles.inputBottomContainer}>
            <p>{contentLength} / 1500</p>
          </div>
        </div>
        {!editMode ? (
          <BottomContainer nextStep={nextStep} prevStep={prevStep} />
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

export default AddAboutMeModal;
