"use client";

import React, { FC } from "react";
import styles from "./ChatOptions.module.css";

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
  messageType: string;
}

const ChatOptions: FC<Props> = ({ show, setShow, messageType }) => {
  if (!show) {
    return;
  }
  return (
    <div
      className={`${messageType === "received" ? styles.altContainer : ""} ${
        styles.container
      }`}
      onMouseLeave={() => setShow(false)}
    >
      <ul>
        <li>Reply</li>
        <li>Forward</li>
        {messageType === "sent" ? <li>Edit</li> : ""}
        <li>Delete</li>
      </ul>
    </div>
  );
};

export default ChatOptions;
