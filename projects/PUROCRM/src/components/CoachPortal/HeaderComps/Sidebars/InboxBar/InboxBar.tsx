import React, { FC } from "react";
import { Drawer } from "@mui/material";
import styles from "./InboxBar.module.css";
import { CoachInboxItem } from "@/components";

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

const InboxBar: FC<Props> = ({ open, setOpen }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      className={styles.messageBar}
    >
      <div className={styles.container}>
        <h2>Inbox</h2>
        <div className={styles.notificationsContainer}>
          <div className={styles.notifications}>
            <CoachInboxItem
              opened={false}
              profileImg="https://purocoach-crm-assets.s3.amazonaws.com/notification-email-photo.jpeg"
              name="Paula Johnson"
              lastMsg="Hey! Did you get the chance to review the documents that I've sent yesterday?"
              timestamp="1:45 pm"
              subject="Propostion Request"
            />
            <hr className={styles.divider} />

            <CoachInboxItem
              opened={false}
              profileImg="https://purocoach-crm-assets.s3.amazonaws.com/notification-email-photo3.jpeg"
              name="Lisa Ericson"
              lastMsg="Your application has been approved. Please login into your portal to review"
              timestamp="Yesterday"
              subject="Propostion Request"
            />
            <hr className={styles.divider} />

            <CoachInboxItem
              opened={true}
              profileImg="https://purocoach-crm-assets.s3.amazonaws.com/notification-email-photo5.jpeg"
              name="Jeniffer Cross"
              lastMsg="Hey Johnny! Let me know what you think about the new proposal from JetSi."
              timestamp="Monday"
              subject="Propostion Request"
            />
            <hr className={styles.divider} />
            <CoachInboxItem
              opened={true}
              profileImg="https://purocoach-crm-assets.s3.amazonaws.com/notifications-email-p.jpeg"
              name="Alison Petters"
              lastMsg="Kindly reply to my last message. The client is waiting for a response"
              timestamp="last week"
              subject="Propostion Request"
            />
            <hr className={styles.divider} />
            <CoachInboxItem
              opened={true}
              profileImg="https://purocoach-crm-assets.s3.amazonaws.com/notifications-email-p.jpeg"
              name="John Dunbar"
              lastMsg="Hey Johnny, Let me know when you're readdy to discuss the new plan for the nest quater"
              timestamp="2 weeks"
              subject="Propostion Request"
            />
          </div>
        </div>
        <div className={styles.footerContainer}>
          <div className={styles.footer}>
            <h4>See All in Inbox</h4>
          </div>
        </div>
        {/* 
        <div>
          <MessageBarChat
            profileImg="https://purocoach-crm-assets.s3.amazonaws.com/notification-email-photo.jpeg"
            name="Paula Johnson"
            chatMessages={messages}
          />
        </div> */}
      </div>
    </Drawer>
  );
};

export default InboxBar;
