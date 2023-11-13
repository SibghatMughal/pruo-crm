"use client";

import React, { useState } from "react";
import Sidebar from "@/components/CoachPortal/Sidebar/Sidebar";
import Header from "@/components/CoachPortal/Header/Header";
import styles from "./Start.module.css";
import { IMAGE_URL } from "@/constants/endpoints";
import Link from "next/link";

const StartCoachProfile = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

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
              <h3>Coach Profile</h3>
              <div className={styles.centerBox}>
                <p>Step 1: Create Coach Profile</p>
                <div className={styles.buttonContainer}>
                  <button className={styles.leftBtn}>
                    Read our coach onboarding guide
                  </button>
                  <Link href="/coach-portal/coach-profile?defaultOpen=true">
                    <button className={styles.rightBtn}>
                      Start the onboarding now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartCoachProfile;
