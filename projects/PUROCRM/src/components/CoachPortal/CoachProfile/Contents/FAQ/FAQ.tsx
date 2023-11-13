import React, { FC } from "react";
import styles from "./FAQ.module.css";
import { IMAGE_URL } from "@/constants/endpoints";

interface Props {
  faqs: any[];
  viewMode?: boolean;
}

const FAQ: FC<Props> = ({ faqs, viewMode = false }) => {
  return (
    <div className={styles.container}>
      <h3>Fequently Asked Questions</h3>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => {
          return (
            <div className={styles.faq} key={index}>
              <div className={styles.faqTop}>
                <h3>{faq.question}</h3>
                <div>
                  {!viewMode && (
                    <img src={`${IMAGE_URL}/coach-portal/trash.svg`} alt="" />
                  )}
                  {!viewMode && (
                    <img
                      src={`${IMAGE_URL}/coach-portal/faq-edit.svg`}
                      alt=""
                      className={styles.editBtn}
                    />
                  )}
                </div>
              </div>
              <p>{faq.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
