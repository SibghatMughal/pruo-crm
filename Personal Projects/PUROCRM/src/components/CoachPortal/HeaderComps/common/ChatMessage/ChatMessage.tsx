"use client";

import React, { FC, useState } from "react";
import styles from "./ChatMessage.module.css";
import { CoachChatOptions } from "@/components";

interface Props {
  profileImg: string;
  message: string;
  timestamp: string;
  messageType: string;
}

const ChatMessage: FC<Props> = ({
  messageType,
  profileImg,
  message,
  timestamp,
}) => {
  const [optionsShow, setOptionsShow] = useState(false);
  return (
    <div className={styles.container}>
      <div
        className={
          messageType === "sent" ? styles.sentMessage : styles.receivedMessage
        }
      >
        <div className={styles.messageBox__img}>
          <img src={profileImg} alt="" />
        </div>
        <div className={styles.messageBox}>
          <p className={styles.messageBox__message}>{message}</p>
          <img
            src="https://purocoach-crm-assets.s3.amazonaws.com/icons/dots.png"
            alt=""
            onClick={() => setOptionsShow(true)}
          />
          <p className={styles.messageBox__timestamp}>
            {timestamp.slice(0, 25)}
          </p>
        </div>
      </div>
      {/* shows options for each individual chat */}
      <CoachChatOptions
        show={optionsShow}
        setShow={setOptionsShow}
        messageType={messageType}
      />
    </div>
  );
};

export default ChatMessage;
