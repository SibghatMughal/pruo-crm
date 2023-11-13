import React, { FC } from "react";
import styles from "./Programs.module.css";
import { IMAGE_URL } from "@/constants/endpoints";

interface Props {
  programs: any[];
  viewMode?: boolean;
}

const Programs: FC<Props> = ({ programs, viewMode = false }) => {
  return (
    <div className={styles.container}>
      <h3>Programs Offered</h3>
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
              <th>Program Name</th>
              <th>Description</th>
              <th>Type</th>
              {viewMode ? <th>Proposal</th> : <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {programs.map((selectedOption, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className={styles.certificateContainer}>
                      <span>{selectedOption.name}</span>
                    </div>
                  </td>
                  <td>{selectedOption.description}</td>
                  <td>{selectedOption.type}</td>
                  {viewMode ? (
                    <td>
                      <button className={styles.learnBtn}>Learn More</button>
                      <button className={styles.signupBtn}>Sign up</button>
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

                        <img src={`${IMAGE_URL}/coach-portal/eye.svg`} alt="" />

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
  );
};

export default Programs;
