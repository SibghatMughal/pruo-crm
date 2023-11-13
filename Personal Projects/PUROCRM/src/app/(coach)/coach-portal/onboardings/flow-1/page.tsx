"use client";

import React, { useState } from "react";
import Sidebar from "@/components/CoachPortal/Sidebar/Sidebar";
import Header from "@/components/CoachPortal/Header/Header";
import styles from "./Flow1.module.css";
import { IMAGE_URL } from "@/constants/endpoints";
import { CoachFlowContainer, CoachStepper, Stepper } from "@/components";
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
              <h3>Steps 5 / 10</h3>
              <p>Total Time: 1 hour</p>
            </div>
            <div className={styles.stepperContainer}>
              <CoachStepper activeStep={1} />
            </div>
            <div className={styles.flowContainer}>
              <CoachFlowContainer
                title="1. Coach profile"
                img={`${IMAGE_URL}/coach-portal/onboard-flow-1.svg`}
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                link="/coach-portal/coach-profile/start"
                duration="10 minutes"
              />
              <CoachFlowContainer
                title="2. Good Coaching Program"
                img={`${IMAGE_URL}/coach-portal/onboard-flow-2.svg`}
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                link="/coach-portal"
                duration="20 minutes"
              />
              <CoachFlowContainer
                title="3. Good Coaching Package"
                img={`${IMAGE_URL}/coach-portal/onboard-flow-3.svg`}
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                link="/coach-portal"
                duration="30 minutes"
              />
              <CoachFlowContainer
                title="4. Create your proposal"
                img={`${IMAGE_URL}/coach-portal/onboard-flow-4.svg`}
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                link="/coach-portal"
                duration="15 minutes"
              />
              <CoachFlowContainer
                title="5. Create your contract"
                img={`${IMAGE_URL}/coach-portal/onboard-flow-5.svg`}
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                link="/coach-portal"
                duration="25 minutes"
              />
            </div>
            <div className={styles.bottomContainer}>
              <div className={styles.leftBottomContainer}>
                <button className={styles.backBtn}>Back</button>
                <button className={styles.cancelBtn}>Cancel</button>
              </div>
              <div className={styles.rightBottomContainer}>
                <Link href="/coach-portal/onboardings/flow-2">
                  {" "}
                  <button>Continue</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow;
