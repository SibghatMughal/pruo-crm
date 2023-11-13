"use client";

import React, {
  ChangeEvent,
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./CreateProfileModal26.module.css";
import Modal from "react-modal";
import Link from "next/link";
import { IMAGE_URL } from "@/constants/endpoints";

interface Props {
  nextStep: () => void;
  modalIsOpen: boolean;
  prevStep: () => void;
  closeModal: () => void;
}

const clientList = [
  {
    name: "Rochel Foose",
    img: `${IMAGE_URL}/coach-portal/client-1.svg`,
    businessName: "MarketMinds",
    email: "rochel@gmail.com",
    contract: "1:1 Coaching Service Contract",
  },
  {
    name: "Lauralee Quintero",
    img: `${IMAGE_URL}/coach-portal/client-2.svg`,
    businessName: "BrandVantage",
    email: "lauralee@yahoo.com",
    contract: "Group Coaching Contract",
  },
  {
    name: "Augustina Midget",
    img: `${IMAGE_URL}/coach-portal/client-3.svg`,
    businessName: "QuantumQuill",
    email: "augustina@hotmail.com",
    contract: "1:1 Coaching Service Contract",
  },
];

const CreateProfileModal26: FC<Props> = ({
  modalIsOpen,
  nextStep,
  prevStep,
  closeModal,
}) => {
  const [rowCount, setRowCount] = useState(10);

  const [openRowSelector, setOpenRowSelector] = useState(false);

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <h3>Request Testimonial Videos</h3>

        <h4>Client Details</h4>

        <div className={styles.addMore}>
          <button>Add More</button>
        </div>

        <div className={styles.clientInfoContainer}>
          <div className={styles.clientInputContainer}>
            <label>First Name</label>
            <input type="First name" />
          </div>
          <div className={styles.clientInputContainer}>
            <label>Last Name</label>
            <input type="Last name" />
          </div>
          <div
            className={`${styles.clientInputContainer} ${styles.emailInputContainer}`}
          >
            <label>Email</label>
            <input type="Email" />
          </div>
        </div>

        <div className={styles.or}>
          <p>Or</p>
        </div>

        <div className={styles.inviteContainer}>
          <h4>Invite your past clients from CRM</h4>
          <div className={styles.inviteInputContainer}>
            <img src={`${IMAGE_URL}/coach-portal/search.svg`} alt="" />
            <input
              type="text"
              placeholder="Search Using Client Name or Enter Email"
            />
          </div>
        </div>

        <div className={styles.clientListContainer}>
          <h4>Client list for Review Request</h4>
          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Client Name</th>
                  <th>Business Name</th>
                  <th>Email</th>
                  <th>Contract</th>
                </tr>
              </thead>
              <tbody>
                {clientList.map((client, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        <div className={styles.profileContainer}>
                          <img src={client.img} alt="" />
                          <span>{client.name}</span>
                        </div>
                      </td>
                      <td>{client.businessName}</td>
                      <td>{client.email}</td>
                      <td>{client.contract}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className={styles.tableFooter}>
            <div className={styles.tableFooterLeft}>
              <div className={styles.footerElem}>
                <img
                  src={`${IMAGE_URL}/coach-portal/chevron-left.svg`}
                  alt=""
                />
              </div>
              <div className={styles.footerElemSelected}>
                <p>1</p>
              </div>
              <div className={styles.footerElem}>
                <p>2</p>
              </div>
              <div className={styles.footerElem}>
                <p>3</p>
              </div>
              <div className={styles.footerElem}>
                <p>4</p>
              </div>
              <div className={styles.footerElem}>
                <img
                  src={`${IMAGE_URL}/coach-portal/chevron-right.svg`}
                  alt=""
                />
              </div>
            </div>
            <div className={styles.tableFooterRight}>
              <p>Rows</p>
              <div className={styles.rowList}>
                <div className={styles.rowPickerContainer}>
                  <div
                    className={styles.rowPicker}
                    onClick={() => setOpenRowSelector((curr) => !curr)}
                  >
                    <div className={styles.selectedOption}>
                      <p
                        className={
                          rowCount > 0
                            ? styles.rowSelected
                            : styles.rowUnSelected
                        }
                      >
                        {rowCount}
                      </p>
                    </div>
                    <img
                      src={
                        openRowSelector
                          ? "https://purocoach-crm-assets.s3.amazonaws.com/client-registration/up-arrow-gray.png"
                          : "https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-down.png"
                      }
                      alt=""
                      className={
                        openRowSelector ? styles.upArrow : styles.downArrow
                      }
                    />
                  </div>
                </div>

                {openRowSelector && (
                  <div className={styles.rowOptions}>
                    {[10, 20, 30, 40, 50].map((row, index) => {
                      return (
                        <p
                          key={index}
                          onClick={() => {
                            setRowCount(row);
                            setOpenRowSelector(false);
                          }}
                        >
                          {row}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.emailTemplatePreview}>
          <h3>Preview Email Template</h3>
          <div className={styles.emailTemplateContainer}>
            <div className={styles.emailTemplateTop}>
              <img src={`${IMAGE_URL}/icons/logo.jpeg`} alt="" />
              <h4>Requesting Your Valuable Testimonial Videos</h4>
              <h3>Help Us Share Your Experience!</h3>
            </div>
            <div className={styles.emailTemplateContent}>
              <h5>Dear Jam Carson</h5>
              <p>
                We hope this Email finds you well. We have been incredibly
                grateful for the opportunity to serve you as our valued
                customer, and we would greatly appreciate it if you could spare
                a few moments to provide us with a testimonial.
              </p>
              <p>
                Your feedback is of utmost importance to us, as it helps us
                understand how we have been able to meet your expectations and
                where we can continue to improve. Your testimoni al will not
                only help us enhance our services but also assist potential
                client in making informed decisions about choosing our company.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.leftBtn} onClick={prevStep}>
            <img src={`${IMAGE_URL}/coach-portal/arrow-left.svg`} alt="" />
            <span>Back</span>
          </button>
          {/* <Link href={"/coach-portal/coach-profile"}> */}
          <button className={styles.rightBtn} onClick={nextStep}>
            <span>Send Request</span>
            <img src={`${IMAGE_URL}/coach-portal/arrow-right.svg`} alt="" />
          </button>
          {/* </Link> */}
        </div>

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

export default CreateProfileModal26;
