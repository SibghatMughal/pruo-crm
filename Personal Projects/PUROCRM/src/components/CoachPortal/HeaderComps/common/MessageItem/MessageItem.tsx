"use client";

import React, { FC, useState } from "react";
import styles from "./MessageItem.module.css";
import { CoachMessageBarOptions } from "@/components";

interface Props {
  time: string;
  name: string;
  unread: boolean;
  message: string;
  profileImg: string;
  count: number | any;
}

const MessageItem: FC<Props> = ({
  time,
  name,
  unread,
  message,
  profileImg,
  count,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.messageItem}>
      <div
        className={`${unread ? styles.notificationItemUnopened : ""} ${
          styles.notificationItem
        }`}
      >
        <div
          className={`${
            unread
              ? styles.notificationItemContainer__unopened
              : styles.notificationItemContainer
          }`}
        >
          <div className={styles.notificationLeft}>
            <img src={profileImg} alt="" />
            {count > 0 && <p>{count}</p>}
          </div>
          <div className={styles.notificationRightContainer}>
            <div className={styles.notificationCenter}>
              <h4>{name}</h4>
              <p>{message}</p>
            </div>
            <div className={styles.notificationRight}>
              <div>
                <p>{time}</p>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/dots.png"
                  alt=""
                  onClick={() => setShow(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CoachMessageBarOptions show={show} setShow={setShow} />
    </div>
  );
};

export default MessageItem;
