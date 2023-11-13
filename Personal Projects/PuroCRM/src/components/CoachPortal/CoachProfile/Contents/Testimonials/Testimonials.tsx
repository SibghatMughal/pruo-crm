import React, { FC } from "react";
import styles from "./Testimonials.module.css";
import { IMAGE_URL } from "@/constants/endpoints";

interface Props {
  selectedOptions: any[];
  viewMode?: boolean;
  editDoc?: (value: any) => void;
}

const Testimonials: FC<Props> = ({
  selectedOptions,
  viewMode = false,
  editDoc,
}) => {
  return (
    <div className={styles.container}>
      <h3>Testimonials</h3>
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <td>
                <img
                  src={`${IMAGE_URL}/coach-portal/testimonial-header.svg`}
                  alt=""
                />
              </td>
              <td>Client</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {selectedOptions.map((selectedOption, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img
                      src={`${IMAGE_URL}/coach-portal/testimonial-file.svg`}
                      alt=""
                    />
                  </td>
                  <td>{selectedOption.name}</td>
                  <td>
                    <p className={styles.status}>
                      <img
                        src={`${IMAGE_URL}/coach-portal/status-pending.svg`}
                        alt=""
                      />
                      <span>Pending</span>
                    </p>
                  </td>
                  <td>
                    <div className={styles.actionsContainer}>
                      {!viewMode && (
                        <img
                          src={`${IMAGE_URL}/coach-portal/edit-grey.svg`}
                          alt=""
                          onClick={() => {
                            editDoc ? editDoc(selectedOption) : null;
                            //   fileInputRef.current?.click();
                            // addNewTestimonial();
                          }}
                        />
                      )}
                      <img src={`${IMAGE_URL}/coach-portal/eye.svg`} alt="" />
                      {!viewMode && (
                        <img
                          src={`${IMAGE_URL}/coach-portal/trash.svg`}
                          alt=""
                          // onClick={deleteTestimonial}
                        />
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Testimonials;
