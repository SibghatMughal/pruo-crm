"use client";

import React, { useState } from "react";
import Sidebar from "@/components/CoachPortal/Sidebar/Sidebar";
import Header from "@/components/CoachPortal/Header/Header";
import styles from "./Welcome.module.css";
import { IMAGE_URL } from "@/constants/endpoints";
import { CoachOnboardingStep } from "@/components";
import { LinearProgress, linearProgressClasses, styled } from "@mui/material";
import Link from "next/link";

const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#e6e6e6",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#304880",
  },
}));

const OnboardingsWelcome = () => {
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

          <div className={styles.top}>
            <div className={styles.welcomeContainer}>
              <div className={styles.welcomeContainerLeft}>
                <div className={styles.welcomeLeftCornerImg}>
                  <img
                    src={`${IMAGE_URL}/coach-portal/welcome-left.svg`}
                    alt=""
                  />
                </div>
                <h2>Welcome!</h2>
                <div className={styles.welcomeSubtitle}>
                  <h4>Get a Head Start with a</h4>
                  <h4>Product Tour</h4>
                </div>
                <p>Learn more of about PUROCoach platform</p>
                <div className={styles.buttonContainer}>
                  <button className={styles.leftBtn}>Get Started</button>
                  <button className={styles.rightBtn}>Show me later</button>
                </div>
              </div>
              <div className={styles.welcomeContainerRight}>
                <img src={`${IMAGE_URL}/coach-portal/welcome-1.svg`} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.stepsContainer}>
              <div className={styles.stepsContainerRight}>
                <img
                  src={`${IMAGE_URL}/coach-portal/design-right.svg`}
                  alt=""
                />
              </div>
              <h2>10 Steps Process Onboarding</h2>
              <button>Start Now</button>
              <div className={styles.progressContainer}>
                <CustomLinearProgress variant="determinate" value={20} />
              </div>
              <div className={styles.steps}>
                <div className={styles.stepsLeft}>
                  <CoachOnboardingStep
                    checked={true}
                    title="Create your profile"
                    setChecked={(value) => {}}
                  />
                  <CoachOnboardingStep
                    checked={true}
                    title="Create your program"
                    setChecked={(value) => {}}
                  />
                  <CoachOnboardingStep
                    checked={false}
                    title="Create your package"
                    setChecked={(value) => {}}
                  />
                  <CoachOnboardingStep
                    checked={false}
                    title="Create your proposal"
                    setChecked={(value) => {}}
                  />
                  <CoachOnboardingStep
                    checked={false}
                    title="Create your contract"
                    setChecked={(value) => {}}
                  />
                </div>
                <div className={styles.stepsRight}>
                  <CoachOnboardingStep
                    checked={false}
                    title="Setup your payment"
                    setChecked={(value) => {}}
                  />
                  <CoachOnboardingStep
                    checked={false}
                    title="Create your session block"
                    setChecked={(value) => {}}
                  />
                  <CoachOnboardingStep
                    checked={false}
                    title="Setup your meeting calendar"
                    setChecked={(value) => {}}
                  />
                  <CoachOnboardingStep
                    checked={false}
                    title="Setup your client onboarding & Off-boarding"
                    setChecked={(value) => {}}
                  />
                  <CoachOnboardingStep
                    checked={false}
                    title="Automate your business process"
                    setChecked={(value) => {}}
                  />
                </div>
              </div>
            </div>
            <div className={styles.journeyContainer}>
              <div className={styles.journeyContainerLeft}>
                <img src={`${IMAGE_URL}/coach-portal/design-left.svg`} alt="" />
              </div>
              <div className={styles.journeyImg}>
                <img src={`${IMAGE_URL}/coach-portal/journey.svg`} alt="" />
              </div>
              <h2>Choose your journey</h2>
              <div className={styles.journeyContent}>
                <p>
                  What is your role at the company, this can help lead where you
                  start within our app.
                </p>
              </div>
              <div className={styles.options}>
                <div className={styles.optionContainer}>
                  <input type="radio" />
                  <p>Coach</p>
                </div>
                <div className={styles.optionContainer}>
                  <input type="radio" />
                  <p>Coach Consultant</p>
                </div>
                <div className={styles.optionContainer}>
                  <input type="radio" />
                  <p>Coach Admin</p>
                </div>
              </div>
              <Link href="/coach-portal/onboardings/product-tour">
                <button>Get Started</button>
              </Link>
              <div className={styles.journeyCornerImg}>
                <img
                  src={`${IMAGE_URL}/coach-portal/journey-right.svg`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingsWelcome;
