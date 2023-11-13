"use client";

import React from "react";
import styles from "./Stepper.module.css";

const Stepper = ({ activeStep = 1 }) => {
  return (
    <div className={styles.stepper}>
      <div
        className={`${activeStep === 1 ? styles.stepper__active : ""} ${
          activeStep === 2 || activeStep === 3 || activeStep === 4
            ? styles.stepper__completed
            : ""
        }  ${styles.circle}`}
      >
        1
      </div>
      <div
        className={`${
          activeStep === 2 || activeStep === 3 || activeStep === 4
            ? styles.stepper__lineOneActive
            : styles.stepper__lineOne
        }`}
      ></div>
      <div
        className={`${activeStep === 2 ? styles.stepper__active : ""} ${
          activeStep === 3 || activeStep === 4 ? styles.stepper__completed : ""
        }  ${styles.circle} ${styles.stepperTwo}`}
      >
        2
      </div>
      <div
        className={`${
          activeStep === 3 || activeStep === 4
            ? styles.stepper__lineTwoActive
            : styles.stepper__lineTwo
        }`}
      ></div>
      <div
        className={`${activeStep === 3 ? styles.stepper__active : ""}  ${
          activeStep === 4 ? styles.stepper__completed : ""
        } ${styles.circle}`}
      >
        3
      </div>
    </div>
  );
};

export default Stepper;
