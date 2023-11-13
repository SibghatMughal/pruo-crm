"use client";

import React, { useState } from "react";
import Sidebar from "@/components/CoachPortal/Sidebar/Sidebar";
import Header from "@/components/CoachPortal/Header/Header";
import styles from "./Flow2.module.css";
import { IMAGE_URL } from "@/constants/endpoints";
import { CoachFlowContainer, CoachStepper } from "@/components";
import Link from "next/link";

const OnboardingFlow = () => {
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
            <h2>
              Press the step you want <br /> to proceed with
            </h2>
            <div className={styles.levelContainer}>
              <h3>Steps 10 / 10</h3>
              <p>Total Time: 1 hour</p>
            </div>
            <div className={styles.stepperContainer}>
              <CoachStepper activeStep={1} />
            </div>
            <div className={styles.flowContainer}>
              <CoachFlowContainer
                title="6. Setup your payment"
                img={`${IMAGE_URL}/coach-portal/onboard-flow-1.svg`}
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                link="/coach-portal"
                duration="10 minutes"
              />
              <CoachFlowContainer
                title="7. Automate your emails"
                img={`${IMAGE_URL}/coach-portal/onboard-flow-2.svg`}
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                link="/coach-portal"
                duration="20 minutes"
              />
              <CoachFlowContainer
                title="8. Automate your emails"
                img={`${IMAGE_URL}/coach-portal/onboard-flow-3.svg`}
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                link="/coach-portal"
                duration="30 minutes"
              />
              <CoachFlowContainer
                title="9. Setup your client onboarding"
                img={`${IMAGE_URL}/coach-portal/onboard-flow-4.svg`}
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                link="/coach-portal"
                duration="15 minutes"
              />
              <CoachFlowContainer
                title="10. Setup your client off-boarding"
                img={`${IMAGE_URL}/coach-portal/onboard-flow-5.svg`}
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                link="/coach-portal"
                duration="25 minutes"
              />
            </div>
            <div className={styles.bottomContainer}>
              <div className={styles.leftBottomContainer}>
                <Link href="/coach-portal/onboardings/flow-1">
                  <button className={styles.backBtn}>Back</button>
                </Link>
                <Link href="/coach-portal/onboardings/welcome">
                  <button className={styles.cancelBtn}>Complete later</button>
                </Link>
              </div>
              {/* <div className={styles.rightBottomContainer}>
                <button>Continue</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow;
