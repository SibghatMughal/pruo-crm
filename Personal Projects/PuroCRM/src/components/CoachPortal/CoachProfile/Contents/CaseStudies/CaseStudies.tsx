import React, { FC } from "react";
import styles from "./CaseStudies.module.css";
import { IMAGE_URL } from "@/constants/endpoints";

interface Props {
  selectedOptions: any[];
  viewMode?: boolean;
  editDoc?: (value: any) => void;
}

const CaseStudies: FC<Props> = ({
  selectedOptions,
  viewMode = false,
  editDoc,
}) => {
  return (
    <div className={styles.container}>
      <h3>Case Studies</h3>
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <td>
                <img
                  src={`${IMAGE_URL}/coach-portal/case-study-header.svg`}
                  alt=""
                />
              </td>
              <td>Title</td>
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
                      src={`${IMAGE_URL}/coach-portal/case-study-bag.svg`}
                      alt=""
                    />
                  </td>
                  <td>
                    <div className={styles.certificateContainer}>
                      <span>{selectedOption.name}</span>
                      <img
                        src={`${IMAGE_URL}/coach-portal/verified-file.svg`}
                        alt=""
                      />
                    </div>
                  </td>
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
                          }}
                        />
                      )}
                      <img src={`${IMAGE_URL}/coach-portal/eye.svg`} alt="" />
                      {!viewMode && (
                        <img
                          src={`${IMAGE_URL}/coach-portal/trash.svg`}
                          alt=""
                          // onClick={deleteDoc}
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

export default CaseStudies;
