"use client";

import React, { useState } from "react";
import Sidebar from "@/components/CoachPortal/Sidebar/Sidebar";
import Header from "@/components/CoachPortal/Header/Header";
import styles from "./Onboardings.module.css";
import { IMAGE_URL } from "@/constants/endpoints";
import { CoachStartCheckModal } from "@/components";

const CoachOnboarding = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const [openCheckModal, setOpenCheckModal] = useState(false);

  return (
    <div>
      <div className={styles.container}>
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <div
          className={`${
            openSidebar
              ? styles.right__container
              : styles.closedRight__container
          }`}
        >
          <Header title="Onboardings" />

          <div className={styles.coachOnboarding}>
            <h1>Coach Onboarding</h1>
            <div className={styles.imgContainer}>
              <img src={`${IMAGE_URL}/coach-portal/bg.svg`} alt="" />
            </div>
            <div className={styles.coachOnboardingContainer}>
              <h3>Welcome</h3>
              <div className={styles.centerBox}>
                <p>Your coach onboarding business journey begins here.</p>
                <div className={styles.buttonContainer}>
                  <button className={styles.leftBtn}>
                    Read our coach onboarding guide
                  </button>
                  <button
                    className={styles.rightBtn}
                    onClick={() => setOpenCheckModal(true)}
                  >
                    Start the onboarding now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <CoachStartCheckModal
            modalIsOpen={openCheckModal}
            setIsOpen={setOpenCheckModal}
          />
        </div>
      </div>
    </div>
  );
};

export default CoachOnboarding;
