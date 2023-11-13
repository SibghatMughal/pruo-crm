import React, { FC } from "react";
import styles from "./OtherInfo.module.css";
import { IMAGE_URL } from "@/constants/endpoints";
import { Rating } from "@mui/material";

interface Props {
  edit1: () => void;
  edit2: () => void;
  edit3: () => void;
}

const OtherInfo: FC<Props> = ({ edit1, edit2, edit3 }) => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h3>Other Info</h3>
      </div>
      <div className={styles.businessInfoContainer}>
        <div className={styles.businessInfo}>
          <div className={styles.contentRightTop}>
            <div className={styles.optionItem}>
              <img src={`${IMAGE_URL}/coach-portal/total-earning.svg`} alt="" />
              <h2>$50K+</h2>
              <p>Total Earning</p>
            </div>
            <div className={styles.optionItem}>
              <img src={`${IMAGE_URL}/coach-portal/total-jobs.svg`} alt="" />
              <h2>29</h2>
              <p>Total Jobs</p>
            </div>
            <div className={styles.optionItem}>
              <img src={`${IMAGE_URL}/coach-portal/total-hours.svg`} alt="" />
              <h2>1,205</h2>
              <p>Total Hours</p>
            </div>
            <div className={styles.optionItem}>
              <img
                src={`${IMAGE_URL}/coach-portal/group-coaching.svg`}
                alt=""
              />
              <h2>$50K+</h2>
              <p>Group Coaching</p>
            </div>
            <div className={styles.optionItem}>
              <img
                src={`${IMAGE_URL}/coach-portal/group-coaching.svg`}
                alt=""
              />
              <h2>1,205</h2>
              <p>One-on-One Coaching</p>
            </div>
          </div>

          <div className={styles.verificationContainer}>
            <div className={styles.optionItem}>
              <h3>ID Verification</h3>
              <div>
                <p>Verified</p>
                <img src={`${IMAGE_URL}/coach-portal/verified.svg`} alt="" />
              </div>
            </div>

            <div className={styles.optionItem}>
              <h3>Payment Verification</h3>
              <div>
                <p>Verified</p>
                <img src={`${IMAGE_URL}/coach-portal/verified.svg`} alt="" />
              </div>
            </div>
          </div>

          <div className={styles.bottomContainer}>
            <div className={styles.intro}>
              <div className={styles.editOption}>
                <h3>Coach Introduction</h3>
                <img
                  src={`${IMAGE_URL}/coach-portal/edit.svg`}
                  alt=""
                  onClick={() => edit1()}
                />
              </div>
              <img src={`${IMAGE_URL}/coach-portal/intro-video.svg`} alt="" />
            </div>
            <div className={styles.bottomLeftContainer}>
              <div className={styles.languageContent}>
                <div className={styles.editOption}>
                  <h3>Languages:</h3>
                  <img
                    src={`${IMAGE_URL}/coach-portal/edit.svg`}
                    alt=""
                    onClick={() => edit2()}
                  />
                </div>
                <p className={styles.languageContent}>
                  <span>English</span> - Native
                </p>
                <p>
                  <span>German</span> - Fluent
                </p>
              </div>

              <div className={styles.company}>
                <div className={styles.editOption}>
                  <h3>Company Associated With</h3>
                  <img
                    src={`${IMAGE_URL}/coach-portal/edit.svg`}
                    alt=""
                    onClick={() => edit3()}
                  />
                </div>
                <div className={styles.companyContainer}>
                  <img src={`${IMAGE_URL}/coach-portal/company.svg`} alt="" />
                  <div className={styles.reviewContainer}>
                    <h4>The Coaching Group LLC</h4>
                    <div>
                      <p>Google Reviews - </p>
                      <Rating
                        name="half-rating-read"
                        defaultValue={4.5}
                        precision={0.5}
                        readOnly
                        size="small"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
