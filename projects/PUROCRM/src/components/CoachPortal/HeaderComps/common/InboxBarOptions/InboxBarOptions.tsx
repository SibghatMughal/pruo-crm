"use client";

import React, { FC } from "react";
import styles from "./InboxBarOptions.module.css";

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
}

const InboxBarOptions: FC<Props> = ({ show, setShow }) => {
  if (!show) {
    return;
  }
  return (
    <div className={styles.container} onMouseLeave={() => setShow(false)}>
      <ul>
        <li>Reply</li>
        <li>Forward</li>
        <li>Delete</li>
        <li>Mark as Read</li>
        <li>Archive</li>
      </ul>
    </div>
  );
};

export default InboxBarOptions;
