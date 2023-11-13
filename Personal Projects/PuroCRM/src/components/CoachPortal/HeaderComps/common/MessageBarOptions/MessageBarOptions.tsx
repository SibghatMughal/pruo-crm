"use client";

import React, { FC } from "react";
import styles from "./MessageBarOptions.module.css";

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
}

const MessageBarOptions: FC<Props> = ({ show, setShow }) => {
  console.log("show", show);

  if (!show) {
    return;
  }
  return (
    <div className={styles.container} onMouseLeave={() => setShow(false)}>
      <ul>
        <li>View</li>
        <li>Reply</li>
        <li>Forward</li>
        <li>Delete</li>
        <li>Mark as Read</li>
      </ul>
    </div>
  );
};

export default MessageBarOptions;
