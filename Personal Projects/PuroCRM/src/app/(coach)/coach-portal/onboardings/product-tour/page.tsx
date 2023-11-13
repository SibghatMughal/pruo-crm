"use client";

import React, { useState } from "react";
import Sidebar from "@/components/CoachPortal/Sidebar/Sidebar";
import Header from "@/components/CoachPortal/Header/Header";
import styles from "./ProductTour.module.css";
import { IMAGE_URL } from "@/constants/endpoints";
import Link from "next/link";

const ProductTour = () => {
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

          <div className={styles.coachOnboarding}>
            <h1>Product Tour</h1>
            <div className={styles.subTitle}>
              <h2>Get a head start with our product video tour</h2>
            </div>
            <div className={styles.productTour}>
              <div className={styles.productTourLeft}>
                <div className={styles.productTourVideo}>
                  <video
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                    controls={true}
                  />
                </div>
                <button>Watch Now</button>
              </div>
              <div className={styles.productTourRight}>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Egestas felis et
                  praesent proin scelerisque velit. Quis dolor enim bibendum vel
                  placerat nisl leo faucibus suspendisse.
                </p>
                <p>
                  Etiam arcu est nam adipiscing diam interdum consectetur. A
                  turpis egestas molestie tellus mauris lacus. Amet arcu eget
                  semper luctus fermentum blandit ut semper et. Pellentesque
                  urna volutpat posuere donec est.
                </p>
                <div className={styles.buttonContainer}>
                  <button className={styles.leftBtn}>Explore</button>
                  <Link href="/coach-portal/onboardings/flow-1">
                    <button className={styles.rightBtn}>
                      Continue with onboarding
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

export default ProductTour;
