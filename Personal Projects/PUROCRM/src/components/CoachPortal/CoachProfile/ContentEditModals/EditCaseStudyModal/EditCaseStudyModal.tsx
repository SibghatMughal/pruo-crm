"use client";

import React, {
  ChangeEvent,
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./EditCaseStudyModal.module.css";
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
import CancelModal from "../../CancelModal/CancelModal";

interface Props {
  modalIsOpen: boolean;
  deleteDoc: () => void;
  setReviewDoc: (value: any) => void;
  doc: any;
  docName: string;
  setDoc: React.Dispatch<React.SetStateAction<any>>;
  closeNow: () => void;
  preloadedContent?: string | any;
  cancelNow: () => void;
}

const EditCaseStudyModal: FC<Props> = ({
  modalIsOpen,
  setReviewDoc,
  doc,
  setDoc,
  deleteDoc,
  closeNow,
  preloadedContent,
  cancelNow,
}) => {
  const fileInputRef = useRef(
    null
  ) as MutableRefObject<HTMLInputElement | null>;
  const dropRef = useRef(null) as MutableRefObject<HTMLInputElement | null>;
  const [content, setContent] = useState("");
  const [contentLength, setContentLength] = useState(0);

  const [title, setTitle] = useState("");

  const [openCancelModal, setOpenCancelModal] = useState(false);

  useEffect(() => {
    if (doc && modalIsOpen) {
      setTitle(doc.name);
      setContentLength(doc.description.length);
      setContent(doc.description);
    }
  }, [doc, modalIsOpen]);

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

  const placeholder = "Brief about your case study...";

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

  if (!modalIsOpen) {
    return null;
  }

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <h3>Upload your case studies</h3>

        <div>
          <div className={styles.inputContainer}>
            <label>Case Study Title</label>
            <br />
            <input
              type="text"
              placeholder="Enter Case Study Title 1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
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
                      onClick={() => deleteDoc()}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.caseDescriptionContainer}>
            <p>Case Description</p>
          </div>
          <input
            type="file"
            hidden
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </div>

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
            <p>{contentLength} / 500</p>
          </div>
        </div>

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
    </Modal>
  );
};

export default EditCaseStudyModal;
