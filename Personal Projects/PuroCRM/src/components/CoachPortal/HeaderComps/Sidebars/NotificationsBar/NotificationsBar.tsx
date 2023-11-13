import React, { FC } from "react";
import { Drawer } from "@mui/material";
import styles from "./NotificationsBar.module.css";
import { CoachNotificationItem } from "@/components";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const messages = [
  {
    name: "Paula Johnson",
    message:
      "Hey Johnny, I wanted to send an inquiry at your end. Need to work hard and make things work",
    timestamp: new Date().toString(),
    messageType: "received",
    profileImg:
      "https://purocoach-crm-assets.s3.amazonaws.com/notification-email-photo.jpeg",
  },
  {
    name: "Johnny",
    message:
      "Hey Johnny, I wanted to send an inquiry at your end. And the best way to learn is yes.  Need to work hard and make things work",
    timestamp: new Date().toString(),
    messageType: "sent",
    profileImg:
      "https://purocoach-crm-assets.s3.amazonaws.com/icons/profile-image.jpg",
  },
  {
    name: "Paula Johnson",
    message:
      "Hey Johnny, I wanted to send an inquiry at your end. Need to work hard and make things work",
    timestamp: new Date().toString(),
    messageType: "received",
    profileImg:
      "https://purocoach-crm-assets.s3.amazonaws.com/notification-email-photo.jpeg",
  },
  // {
  //   name: "Johnny",
  //   message:
  //     "Hey Johnny, I wanted to send an inquiry at your end. And the best way to learn is yes.  Need to work hard and make things work",
  //   timestamp: new Date().toString(),
  //   messageType: "received",
  //   profileImg: "https://purocoach-crm-assets.s3.amazonaws.com/icons/profile-image.jpg",
  // },
  // {
  //   name: "Paula Johnson",
  //   message:
  //     "Hey Johnny, I wanted to send an inquiry at your end. Need to work hard and make things work",
  //   timestamp: new Date().toString(),
  //   messageType: "sent",
  //   profileImg: "https://purocoach-crm-assets.s3.amazonaws.com/notification-email-photo.jpeg",
  // },
  // {
  //   name: "Johnny",
  //   message:
  //     "Hey Johnny, I wanted to send an inquiry at your end. And the best way to learn is yes.  Need to work hard and make things work",
  //   timestamp: new Date().toString(),
  //   messageType: "received",
  //   profileImg: "https://purocoach-crm-assets.s3.amazonaws.com/icons/profile-image.jpg",
  // },
];

const NotificationsBar: FC<Props> = ({ open, setOpen }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      className={styles.messageBar}
    >
      <div className={styles.container}>
        <h2>Notifications</h2>
        <div className={styles.notificationsContainer}>
          <div className={styles.notifications}>
            <CoachNotificationItem
              profileImg="https://purocoach-crm-assets.s3.amazonaws.com/icons/notifications-inside-bell.png"
              content="5 new coach profiles ready for review and your approval."
              time="2h"
            />

            <hr className={styles.divider} />

            <CoachNotificationItem
              profileImg="https://purocoach-crm-assets.s3.amazonaws.com/icons/account-activate-notification.png"
              content="Your account is activated."
              time="2h"
            />
            <hr className={styles.divider} />

            <CoachNotificationItem
              profileImg="https://purocoach-crm-assets.s3.amazonaws.com/icons/zoom-notification.png"
              specialContent={`Your zoom meeting “Sales call” has been download to your zoom
              meetings folder. Access <span>here</span>.`}
              time="2h"
            />
            <hr className={styles.divider} />
            <CoachNotificationItem
              profileImg="https://purocoach-crm-assets.s3.amazonaws.com/notifications-email-photo4.jpeg"
              content="Nathan Coach has upload two contracts."
              time="2h"
            />
          </div>
        </div>
        <div className={styles.footerContainer}>
          <div className={styles.footer}>
            <h4>Notification Settings</h4>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default NotificationsBar;
