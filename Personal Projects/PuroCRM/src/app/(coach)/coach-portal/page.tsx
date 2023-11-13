"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "@/components/CoachPortal/Sidebar/Sidebar";
import Header from "@/components/CoachPortal/Header/Header";
import styles from "./CoachPortal.module.css";

const CoachPortal = () => {
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
          <Header title="Coach Portal" />
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default CoachPortal;
