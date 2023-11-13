import React, { FC } from "react";
import styles from "./OnboardingStep.module.css";
import { IMAGE_URL } from "@/constants/endpoints";

interface Props {
  checked: boolean;
  title: string;
  setChecked: (value: boolean) => void;
}

const OnboardingStep: FC<Props> = ({ checked, title, setChecked }) => {
  return (
    <div
      className={`${checked ? styles.container : styles.unContainer} ${
        styles.onBoard
      }`}
    >
      <div className={styles.containerLeft}>
        {checked ? (
          <div className={styles.checked}>
            <img src={`${IMAGE_URL}/coach-portal/check_circle.svg`} alt="" />
          </div>
        ) : (
          <div className={styles.unchecked}></div>
        )}
        <h3 className={checked ? styles.checkedTitle : styles.unCheckedTitle}>
          {title}
        </h3>
      </div>
      <div className={styles.leftArrow}>
        <img src={`${IMAGE_URL}/icons/left-menu-arrow.png`} alt="" />
      </div>
    </div>
  );
};

export default OnboardingStep;
