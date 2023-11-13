import React, { FC } from "react";
import styles from "./BusinessInfo.module.css";
import { IMAGE_URL } from "@/constants/endpoints";

interface Props {
  edit?: () => void;
}

const BusinessInfo: FC<Props> = ({ edit }) => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h3>Business Info</h3>
        {edit && (
          <button onClick={edit}>
            <img src={`${IMAGE_URL}/coach-portal/edit.svg`} alt="" />
            <span>Edit</span>
          </button>
        )}
      </div>
      <div className={styles.businessInfoContainer}>
        <div className={styles.businessInfo}>
          <div className={styles.infoContainer}>
            <h4>Business logo</h4>
            <img src={`${IMAGE_URL}/coach-portal/company.svg`} alt="" />
          </div>
          <div className={styles.infoContainer}>
            <h4>Business Name</h4>
            <p>The Greate LLC</p>
          </div>
          <div className={styles.infoContainer}>
            <h4>Business Email</h4>
            <p>info@thegreate.com</p>
          </div>
          <div className={styles.infoContainer}>
            <h4>Business Address</h4>
            <p>58269 Gardens, Dalls,Texas</p>
          </div>
          <div className={styles.infoContainer}>
            <h4>Business Phone Number</h4>
            <p>info@thegreate.com</p>
          </div>
          <div className={styles.infoContainer}>
            <h4>Business Email</h4>
            <p>info@thegreate.com</p>
          </div>
          <div className={styles.infoContainer}>
            <h4>Business Operation</h4>
            <p>15</p>
          </div>
          <div className={styles.infoContainer}>
            <h4>Number of employees</h4>
            <p>350</p>
          </div>
          <div className={styles.infoContainer}>
            <h4>Your Role</h4>
            <p>Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
