"use client";

import React, { useState } from "react";
import Sidebar from "@/components/CoachPortal/Sidebar/Sidebar";
import Header from "@/components/CoachPortal/Header/Header";
import styles from "./CoachPrograms.module.css";
import { IMAGE_URL } from "@/constants/endpoints";
import Link from "next/link";

const CoachPrograms = () => {
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
          <Header title="Programs" />

          <div className={styles.coachPrograms}>
            <h2>Create Programs</h2>
            <div className={styles.coachProgramsContainer}>
              <div className={styles.coachProgramsTop}>
                <div className={styles.coachProgramsTopLeft}>
                  <div className={styles.searchContainer}>
                    <img src={`${IMAGE_URL}/coach-portal/search.svg`} alt="" />
                    <input type="text" placeholder="Search" />
                  </div>
                  <div className={styles.filtersBtn}>
                    <img
                      src={`${IMAGE_URL}/coach-portal/programs/filters.svg`}
                      alt=""
                    />
                  </div>
                </div>
                <div className={styles.coachProgramsTopRight}>
                  <button>
                    <span>+</span>
                    <span>Create New Program</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachPrograms;
