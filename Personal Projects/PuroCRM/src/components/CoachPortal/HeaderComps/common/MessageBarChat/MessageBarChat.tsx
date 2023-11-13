"use client";

import React, { FC, useState } from "react";
import styles from "./MessageBarChat.module.css";
import { CoachChatMessage, CoachMessageTopOptions } from "@/components";

interface Chat {
  profileImg: string;
  message: string;
  timestamp: string;
  messageType: string;
}

interface Props {
  profileImg: string;
  name: string;
  chatMessages: Chat[];
}

const MessageBarChat: FC<Props> = ({ profileImg, name, chatMessages }) => {
  const [topOptionsShow, setTopOptionsShow] = useState(false);

  return (
    <div className={styles.messageBar}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <div className={styles.topContainer__left}>
            <img src={profileImg} alt="" />
            <div>
              <h3>{name}</h3>
              <div className={styles.activeStatusContainer}>
                <div className={styles.activeCircle}></div>
                <p>Active Now</p>
              </div>
              <p className={styles.lastSeen}>Local time: 01:00 PM EST</p>
            </div>
          </div>
          <div className={styles.topContainer__right}>
            <div>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/phone.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/camera-message.png"
                alt=""
              />
            </div>
            <div className={styles.notificationContainer}>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/notification-message.png"
                alt=""
              />
              <div className={styles.redCircle}></div>
            </div>
            <div className={styles.dotsContainer}>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/dots-message.png"
                alt=""
                onClick={() => setTopOptionsShow(true)}
              />
              {/* shows message options for the chat that is opened only when clicked */}
              <CoachMessageTopOptions
                show={topOptionsShow}
                setShow={(value) => setTopOptionsShow(value)}
              />
            </div>
          </div>
        </div>
        {/* displays all the conversations between us and the other person */}
        <div className={styles.messageListContainer}>
          {chatMessages.map((messageInfo: Chat, index) => {
            return (
              <div key={index}>
                {/* displays each message separately on left or right side based on who sent or received the message */}
                <CoachChatMessage {...messageInfo} />
              </div>
            );
          })}
        </div>

        <div className={styles.chatContainerInput}>
          <textarea rows={5} placeholder="Type a message..." />
          <div className={styles.chatOptionsContainer}>
            <div className={styles.chatOptions}>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/attachment-message.png"
                alt=""
              />
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/imogi-message.png"
                alt=""
              />
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/mic-message.png"
                alt=""
              />
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/loom-message.png"
                alt=""
              />
            </div>
            <div className={styles.chatButton}>
              <button>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/send-message.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBarChat;
