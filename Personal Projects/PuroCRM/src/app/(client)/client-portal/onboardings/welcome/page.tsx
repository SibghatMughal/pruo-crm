"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "@/components/ClientPortal/Sidebar/Sidebar";
import Header from "@/components/ClientPortal/Header/Header";
import styles from "./Welcome.module.css";
import { IMAGE_URL } from "@/constants/endpoints";
import { ClientOnboardingStep } from "@/components";
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

  const [goal1, setGoal1] = useState("");
  const [goal2, setGoal2] = useState("");
  const [goal3, setGoal3] = useState("");

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (goal1 && goal2 && goal3) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [goal1, goal2, goal3]);

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
                <h2>Welcome</h2>
                <h3>
                  to the <span>Client Onboarding</span>
                </h3>
                <h4>Business Executive Coaching Program!</h4>
                <div className={styles.welcomeSubtitle}>
                  <h4>Watch a Quick Video of the</h4>
                  <h4>Product Guide</h4>
                </div>
                <div className={styles.buttonContainer}>
                  <button className={styles.leftBtn}>
                    <img src={`${IMAGE_URL}/icons/watch-video.svg`} alt="" />
                    <span>Watch Now!</span>
                  </button>
                  <button className={styles.rightBtn}>Watch later</button>
                </div>
              </div>
              <div className={styles.welcomeContainerRight}>
                <h1>Your Coach</h1>
                <div className={styles.profileContainer}>
                  <img
                    src="https://purocoach-crm-assets.s3.amazonaws.com/icons/coach-profile.png"
                    alt=""
                  />
                  <h3>Kiera Botosh</h3>
                  <p>kierabotosh@gmail.com</p>
                  <p>985-985-7410</p>
                  <div className={styles.profileButtonContainer}>
                    <button>View Profile</button>
                  </div>
                </div>
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
              <h2>5 Steps Onboarding Process</h2>
              <button
                disabled={disabled}
                className={`${disabled ? styles.disabled : null}`}
              >
                Begin the onboarding
              </button>
              <div className={styles.progressContainer}>
                <CustomLinearProgress variant="determinate" value={20} />
              </div>
              <div className={styles.steps}>
                <div className={styles.stepsLeft}>
                  <ClientOnboardingStep
                    checked={true}
                    title="Read coach's service guideline"
                    setChecked={(value) => {}}
                  />
                  <ClientOnboardingStep
                    checked={true}
                    title="Read Service agreement"
                    setChecked={(value) => {}}
                  />
                  <ClientOnboardingStep
                    checked={false}
                    title="Complete client intake form"
                    setChecked={(value) => {}}
                  />
                  <ClientOnboardingStep
                    checked={false}
                    title="Answer Satisfactory Questionnaire"
                    setChecked={(value) => {}}
                  />
                  <ClientOnboardingStep
                    checked={false}
                    title="Schedule your coaching block"
                    setChecked={(value) => {}}
                  />
                </div>
                {/* <div className={styles.stepsRight}>
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
                </div> */}
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
                  What are the 3 goals you hope to accomplish from working with
                  coach Kiera in this program?
                </p>
              </div>
              <div className={styles.inputs}>
                <div className={styles.inputContainer}>
                  <label>Goal 1</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Ex: To grow my business by 20% in the next 90 days"
                    value={goal1}
                    onChange={(e) => setGoal1(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label>Goal 2</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Ex: To develop a marketing plan for the next quater"
                    value={goal2}
                    onChange={(e) => setGoal2(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label>Goal 3</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Ex: To get my team at top performance"
                    value={goal3}
                    onChange={(e) => setGoal3(e.target.value)}
                  />
                </div>
              </div>
              <Link href="/coach-portal/onboardings/product-tour">
                <button
                  disabled={disabled}
                  className={`${disabled ? styles.disabled : null}`}
                >
                  Save and continue
                </button>
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
