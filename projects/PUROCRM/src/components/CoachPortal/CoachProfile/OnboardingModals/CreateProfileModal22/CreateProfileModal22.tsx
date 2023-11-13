"use client";

import React, {
  ChangeEvent,
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./CreateProfileModal22.module.css";
import Modal from "react-modal";
import { IMAGE_URL } from "@/constants/endpoints";
import { ModalBottomContainer } from "@/components/CoachPortal/CoachProfile";
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

interface Props {
  nextStep: () => void;
  modalIsOpen: boolean;
  prevStep: () => void;
  numberOfCaseStudies: number;
  setCaseStudies: React.Dispatch<React.SetStateAction<any>>;
  closeModal: () => void;
}

const CreateProfileModal22: FC<Props> = ({
  modalIsOpen,
  nextStep,
  prevStep,
  numberOfCaseStudies,
  setCaseStudies,
  closeModal,
}) => {
  const fileInputRef = useRef(
    null
  ) as MutableRefObject<HTMLInputElement | null>;
  const dropRef = useRef(null) as MutableRefObject<HTMLInputElement | null>;
  const [content, setContent] = useState("");
  const [contentLength, setContentLength] = useState(0);

  const [currentCase, setCurrentCase] = useState(0);

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

  // const { quill, quillRef } = useQuill({ modules, formats, placeholder });

  // useEffect(() => {
  //   if (quill) {
  //     quill.on("text-change", (delta: any, oldDelta: any, source: any) => {
  //       console.log("Text change!");
  //       setContentLength(quill.getText().length - 1);
  //       setContent(quillRef.current.firstChild.innerHTML);
  //       // console.log(quill.getContents()); // Get delta contents
  //       // console.log(quill.root.innerHTML); // Get innerHTML using quill
  //       // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
  //     });
  //   }
  // }, [quill]);

  const [currentDoc, setCurrentDoc] = useState(0);

  const [doc, setDoc] = useState<any>(null);

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

  const deleteDoc = () => {
    setDoc(null);
  };

  const nextCaseStudy = () => {
    if (currentCase + 1 < numberOfCaseStudies) {
      setCurrentCase((curr: any) => curr + 1);
      // const docData = docs.find(
      //   (doc, index) => doc.name == selectedOptions[currentDoc + 1].name
      // );
      // setDoc(docData ? docData.doc : null);
    } else {
      nextStep();
    }
  };

  const prevCaseStudy = () => {
    if (currentCase === 0) {
      prevStep();
    } else {
      setCurrentCase((curr: any) => curr - 1);
      // const docData = docs.find(
      //   (doc, index) => doc.name == selectedOptions[currentDoc - 1].name
      // );
      // setDoc(docData ? docData.doc : null);
    }
  };

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <h3>Upload your case studies</h3>
        {Array.from(Array(numberOfCaseStudies).keys()).map((_, index) => {
          if (index === currentCase) {
            return (
              <div key={index}>
                <div className={styles.inputContainer}>
                  <label>Case Study Title {currentCase + 1}</label>
                  <br />
                  <input type="text" placeholder="Enter Case Study Title 1" />
                </div>
                <div className={styles.certificateUploadContainer}>
                  <p>Upload Certification {currentCase + 1}</p>
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
                  <p>Case Description {currentCase + 1}</p>
                </div>
                <input
                  type="file"
                  hidden
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
              </div>
            );
          }
        })}
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

        <ModalBottomContainer
          nextStep={nextCaseStudy}
          prevStep={prevCaseStudy}
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

export default CreateProfileModal22;
