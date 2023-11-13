"use client";

import React from "react";
import styles from "./Stepper.module.css";

const CoachStepper = ({ activeStep = 1 }) => {
  const steps = new Array(5);
  return (
    <div className={styles.stepper}>
      <div
        className={`${activeStep === 1 ? styles.stepper__active : ""} ${
          activeStep > 1 ? styles.stepper__completed : ""
        }  ${styles.circle}`}
      >
        1
      </div>
      <div
        className={`${
          activeStep > 1
            ? styles.stepper__lineOneActive
            : styles.stepper__lineOne
        }`}
      ></div>
      <div
        className={`${activeStep === 2 ? styles.stepper__active : ""} ${
          activeStep > 2 ? styles.stepper__completed : ""
        }  ${styles.circle} ${styles.stepperTwo}`}
      >
        2
      </div>
      <div
        className={`${
          activeStep > 2
            ? styles.stepper__lineTwoActive
            : styles.stepper__lineTwo
        }`}
      ></div>
      <div
        className={`${activeStep === 3 ? styles.stepper__active : ""}  ${
          activeStep > 3 ? styles.stepper__completed : ""
        } ${styles.circle}`}
      >
        3
      </div>
      <div
        className={`${
          activeStep > 3
            ? styles.stepper__lineThreeActive
            : styles.stepper__lineThree
        }`}
      ></div>
      <div
        className={`${activeStep === 4 ? styles.stepper__active : ""} ${
          activeStep > 4 ? styles.stepper__completed : ""
        }  ${styles.circle} ${styles.stepperTwo}`}
      >
        4
      </div>
      <div
        className={`${
          activeStep > 4
            ? styles.stepper__lineFourActive
            : styles.stepper__lineFour
        }`}
      ></div>
      <div
        className={`${activeStep === 5 ? styles.stepper__active : ""}  ${
          activeStep === 6 ? styles.stepper__completed : ""
        } ${styles.circle}`}
      >
        5
      </div>
    </div>
  );
};

export default CoachStepper;
