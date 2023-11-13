import React, { FC } from "react";
import styles from "./BottomContainer.module.css";
import { IMAGE_URL } from "@/constants/endpoints";

interface Props {
  nextStep: () => void;
  prevStep?: () => void;
}

const BottomContainer: FC<Props> = ({ nextStep, prevStep }) => {
  return (
    <div className={styles.bottomContainer}>
      <div>
        <button className={styles.finishBtn}>
          <span>Finish Later</span>
        </button>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.leftBtn}
          onClick={prevStep ? prevStep : () => {}}
        >
          <img src={`${IMAGE_URL}/coach-portal/arrow-left.svg`} alt="" />
          <span>Back</span>
        </button>
        {/* <Link href={"/coach-portal/coach-profile"}> */}
        <button className={styles.rightBtn} onClick={nextStep}>
          <span>Continue</span>
          <img src={`${IMAGE_URL}/coach-portal/arrow-right.svg`} alt="" />
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default BottomContainer;
