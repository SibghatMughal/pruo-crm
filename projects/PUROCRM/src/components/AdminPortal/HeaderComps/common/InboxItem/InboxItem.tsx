"use client";

import React, { FC, useState } from "react";
import styles from "./InboxItem.module.css";
import InboxBarOptions from "../InboxBarOptions/InboxBarOptions";

interface Props {
  opened: boolean;
  profileImg: string;
  name: string;
  lastMsg: string;
  timestamp: string;
  subject: string;
}

const InboxItem: FC<Props> = ({
  opened,
  profileImg,
  name,
  lastMsg,
  timestamp,
  subject,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`${!opened ? styles.notificationItemUnopened : ""} ${
        styles.notificationItem
      }`}
    >
      <div
        className={`${
          !opened
            ? styles.notificationItemContainer
            : styles.notificationItemContainer__unopened
        }`}
      >
        <div className={styles.notificationLeft}>
          <img src={profileImg} alt="" />
          {!opened ? <p>3</p> : ""}
        </div>
        <div className={styles.notificationRightContainer}>
          <div className={styles.notificationCenter}>
            <h4>{name}</h4>
            <h5 className={`${opened ? styles.subjectOpened : ""}`}>
              {subject}
            </h5>
            <p>{lastMsg}</p>
          </div>
          <div className={styles.notificationRight}>
            <div>
              <p>{timestamp}</p>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/dots.png"
                alt=""
                onClick={() => setShow(true)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* shows individuals options for each and every inbox item */}
      <InboxBarOptions show={show} setShow={setShow} />
    </div>
  );
};

export default InboxItem;
