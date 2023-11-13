"use client";

import React, { FC } from "react";
import styles from "./NotificationItem.module.css";

interface Props {
  profileImg: string;
  content?: string;
  specialContent?: string;
  time: string;
}

const NotificationItem: FC<Props> = ({
  profileImg,
  content,
  time,
  specialContent,
}) => {
  return (
    <div
      className={`${true ? styles.notificationItemOpened : ""} ${
        styles.notificationItem
      }`}
    >
      <div>
        <img src={profileImg} alt="" />
        {content ? <p>{content}</p> : ""}
        {/* displays special content with html content in it */}
        {specialContent ? (
          <p dangerouslySetInnerHTML={{ __html: specialContent }} />
        ) : (
          ""
        )}
      </div>
      <p>{time}</p>
    </div>
  );
};

export default NotificationItem;
