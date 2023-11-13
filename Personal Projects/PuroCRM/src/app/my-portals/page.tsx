"use client";

import React, { useState } from "react";
import styles from "./MyPortals.module.css";
import Header from "@/components/ClientPortal/Header/Header";
import { IMAGE_URL } from "@/constants/endpoints";
import { useRouter } from "next/navigation";
import Modal from "react-modal";

const MyPortals = () => {
  const [type, setType] = useState("");

  const router = useRouter();

  const continueNow = () => {
    //opens different modal based on the type of registration
    if (type === "client") {
      // dispatch(toggleOpenClientRegistration1(true));
      router.push("/client-portal");
    } else {
      // dispatch(toggleOpenCoachSignup1(true));
      router.push("/coach-portal");
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <Header title="my portal" />
        <Modal isOpen={true} className={styles.modal} ariaHideApp={false}>
          <div className={styles.myPortals}>
            <div
              className={`${styles.options} ${
                type ? styles.optionsSelected : ""
              }`}
            >
              <h2>Select the portal you like to navigate</h2>
              <div className={styles.optionsContainer}>
                <div
                  className={`${styles.optionContainer} ${
                    type === "client" ? styles.option__selected : null
                  }`}
                  onClick={() => setType("client")}
                >
                  <h4>Client Portal</h4>
                  <input
                    type="radio"
                    name="account"
                    checked={type === "client"}
                    onChange={(event) =>
                      setType(event.target.checked ? "client" : "")
                    }
                  />
                </div>
                <div
                  className={`${styles.optionContainer} ${
                    type === "coach" ? styles.option__selected : null
                  }`}
                  onClick={() => setType("coach")}
                >
                  <h4>Coach Portal</h4>
                  <input
                    type="radio"
                    name="account"
                    checked={type === "coach"}
                    onChange={(event) =>
                      setType(event.target.checked ? "coach" : "")
                    }
                  />
                </div>
              </div>
              {/* {type && (
              <div className={styles.messageContainer}>
                <div className={styles.message}>
                  {type === "client" ? (
                    <p>You have selected to register as a client</p>
                  ) : (
                    <p>You have selected to sign-up as a coach</p>
                  )}
                </div>
              </div>
            )} */}

              <div className={styles.buttonContainer}>
                <button className={styles.rightBtn} onClick={continueNow}>
                  <span>Continue</span>
                  <img
                    src={`${IMAGE_URL}/coach-portal/arrow-right.svg`}
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default MyPortals;
