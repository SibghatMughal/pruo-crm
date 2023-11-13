import React, { FC } from "react";
import styles from "./ProfileInfoModal.module.css";
import Modal from "react-modal";
import { IMAGE_URL } from "@/constants/endpoints";
import { Rating } from "@mui/material";

interface Props {
  nextStep: () => void;
  modalIsOpen: boolean;
  prevStep: () => void;
}

const ProfileInfoModal: FC<Props> = ({ modalIsOpen, nextStep, prevStep }) => {
  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <div className={styles.leftContainer}>
            <img src={`${IMAGE_URL}/coach-portal/profile-info.svg`} alt="" />
          </div>
          <div className={styles.centerContainer}>
            <div className={styles.centerNameContainer}>
              <h2>Kiera Botosh</h2>
              <img src={`${IMAGE_URL}/coach-portal/verified.png`} alt="" />
              <p>Verified</p>
            </div>
            <h4>Executive Business Coach</h4>
            <p>12 Years of Experience in Business Coaching</p>

            <div>
              <div className={styles.centerContentContainer}>
                <p>Credentials:</p>
                <h4>Author</h4>
              </div>
              <div className={styles.centerContentContainer}>
                <p>Category:</p>
                <h4>Business Executive Coaching</h4>
              </div>
              <div className={styles.centerContentContainer}>
                <p>Focus:</p>
                <h4>Business Startup</h4>
              </div>
              <div className={styles.centerContentContainer}>
                <p>Hours Completed:</p>
                <h4>0</h4>
              </div>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.rightTopContainer}>
              <div className={styles.ratedContainer}>
                <img src={`${IMAGE_URL}/coach-portal/top-rated.svg`} alt="" />
                <p>Not yet rated</p>
                <img src={`${IMAGE_URL}/coach-portal/info.svg`} alt="" />
              </div>
              <div className={styles.successContainer}>
                <span>0%</span>
                <p>Success Score</p>
                <img src={`${IMAGE_URL}/coach-portal/info.svg`} alt="" />
              </div>
            </div>
            <div className={styles.rating}>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
                size="small"
              />
              <div>
                <p>4.7</p>
                <span>
                  (<span>127</span>)
                </span>
              </div>
            </div>
            <div>
              <div className={styles.rightContentContainer}>
                <div>
                  <img src={`${IMAGE_URL}/coach-portal/sessions.svg`} alt="" />
                  <p>Sessions</p>
                </div>
                <h4>Author</h4>
              </div>
              <div className={styles.rightContentContainer}>
                <div>
                  <img src={`${IMAGE_URL}/coach-portal/country.svg`} alt="" />
                  <p>New York, USA</p>
                </div>
                <h4>11:30PM Local Time</h4>
              </div>
              <div className={styles.rightContentContainer}>
                <div>
                  <img src={`${IMAGE_URL}/coach-portal/payment.svg`} alt="" />
                  <p>Payment</p>
                </div>
                <h4>Credit/Debit Cards</h4>
              </div>
              <div className={styles.rightContentContainer}>
                <div>
                  <img
                    src={`${IMAGE_URL}/coach-portal/payment-plan.svg`}
                    alt=""
                  />
                  <p>Payment plan</p>
                </div>
                <h4>Yes</h4>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomContainer}>
          <div>
            <button className={styles.finishBtn}>
              <span>Finish Later</span>
            </button>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.leftBtn} onClick={() => {}}>
              <img src={`${IMAGE_URL}/coach-portal/arrow-left.svg`} alt="" />
              <span>Back</span>
            </button>
            <button className={styles.rightBtn} onClick={nextStep}>
              <span>Continue with Profile</span>
              <img src={`${IMAGE_URL}/coach-portal/arrow-right.svg`} alt="" />
            </button>
          </div>
        </div>

        <img
          src={`${IMAGE_URL}/coach-portal/close.svg`}
          alt=""
          className={styles.closeImg}
        />
      </div>
    </Modal>
  );
};

export default ProfileInfoModal;
