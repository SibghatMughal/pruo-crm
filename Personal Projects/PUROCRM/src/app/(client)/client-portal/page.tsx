"use client";

import React, { useState } from "react";
import Sidebar from "@/components/ClientPortal/Sidebar/Sidebar";
import Header from "@/components/ClientPortal/Header/Header";
import styles from "./ClientPortal.module.css";

const ClientPortal = () => {
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
          <Header title="client" />
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
