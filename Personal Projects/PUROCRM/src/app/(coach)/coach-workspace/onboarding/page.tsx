"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "@/components/CoachPortal/Sidebar/Sidebar";
import Header from "@/components/CoachPortal/Header/Header";
import styles from "./Onboarding.module.css";
import { OnboardingTable } from "@/components/CoachPortal/Onboarding";

const Onboarding = () => {
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
          <Header title="Onboarding" />
          <OnboardingTable />
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
