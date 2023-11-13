import React, { FC } from "react";
import styles from "./ServicesOffered.module.css";
import { IMAGE_URL } from "@/constants/endpoints";

interface Props {
  services: any[];
  viewMode?: boolean;
}

const ServicesOffered: FC<Props> = ({ services, viewMode = false }) => {
  return (
    <>
      <div className={styles.container}>
        <h3>Services Offered</h3>
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                {/* <td>
                <img
                  src={`${IMAGE_URL}/coach-portal/certification-header.svg`}
                  alt=""
                />
              </td> */}
                <th>Service Name</th>
                <th>Description</th>
                <th>Type</th>
                {viewMode ? <th>Proposal</th> : <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {services.map((selectedOption, index) => {
                return (
                  <tr key={index}>
                    {/* <td>
                    <img
                      src={`${IMAGE_URL}/coach-portal/certification-file.svg`}
                      alt=""
                    />
                  </td> */}
                    <td>
                      <div className={styles.certificateContainer}>
                        <span>{selectedOption.name}</span>
                        {/* <img
                        src={`${IMAGE_URL}/coach-portal/verified-file.svg`}
                        alt=""
                      /> */}
                      </div>
                    </td>
                    <td>{selectedOption.description}</td>
                    <td>{selectedOption.type}</td>
                    {viewMode ? (
                      <td>
                        <button className={styles.actionBtn}>
                          Request a Proposal
                        </button>
                      </td>
                    ) : (
                      <td>
                        <div className={styles.actionsContainer}>
                          <img
                            src={`${IMAGE_URL}/coach-portal/edit-grey.svg`}
                            alt=""
                            onClick={() => {
                              // editDoc(selectedOption);
                              //   fileInputRef.current?.click();
                            }}
                          />

                          <img
                            src={`${IMAGE_URL}/coach-portal/eye.svg`}
                            alt=""
                          />

                          <img
                            src={`${IMAGE_URL}/coach-portal/trash.svg`}
                            alt=""
                            // onClick={deleteDoc}
                          />
                        </div>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ServicesOffered;
