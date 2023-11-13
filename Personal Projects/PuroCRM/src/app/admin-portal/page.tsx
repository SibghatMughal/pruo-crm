"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../../components/AdminPortal/Sidebar/Sidebar";
import Header from "../../components/AdminPortal/Header/Header";
import styles from "./AdminPortal.module.css";
import Communication from "@/components/Comunication/Communication";
import { Poppins } from "next/font/google";
import { useSearchParams } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const AdminPortal = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const params = useSearchParams();
  const [tab, setTab] = useState(parseInt(params.get("tab") || "0"));
  useEffect(() => {
    setTab(parseInt(params.get("tab") || "0"));
  }, [params]);
  return (
    <div>
      <div className={`${styles.container} ${poppins.variable}`}>
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <div
          className={`${
            openSidebar
              ? styles.right__container
              : styles.closedRight__container
          }`}
        >
          <div className={styles.rightSide}>
            <Header />
            <div className={styles.main}>
              <Communication tab={tab} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
