"use client";

import React, { FC } from "react";
import styles from "./MessageTopOptions.module.css";

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
}

const MessageTopOptions: FC<Props> = ({ show, setShow }) => {
  //returns component only when user asks to display it
  if (!show) {
    return;
  }
  return (
    <div className={styles.container} onMouseLeave={() => setShow(false)}>
      <ul>
        <li>Share contact</li>
        <li>Block</li>
        <li>Remove as friend</li>
      </ul>
    </div>
  );
};

export default MessageTopOptions;
