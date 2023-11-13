import React, { FC } from "react";
import styles from "./AboutMe.module.css";
import { IMAGE_URL } from "@/constants/endpoints";

interface Props {
  content: string;
  edit?: () => void;
}

const AboutMe: FC<Props> = ({ content, edit }) => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h3>About Me</h3>
        {edit && (
          <button onClick={edit}>
            <img src={`${IMAGE_URL}/coach-portal/edit.svg`} alt="" />
            <span>Edit</span>
          </button>
        )}
      </div>
      <div
        className={styles.aboutMe}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default AboutMe;
