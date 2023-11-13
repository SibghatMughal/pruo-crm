import React, { FC } from "react";
import { Drawer } from "@mui/material";
import styles from "./MessageBar.module.css";
import { CoachMessageItem, CoachMessageBarChat } from "@/components";

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
  {
    name: "Johnny",
    message:
      "Hey Johnny, I wanted to send an inquiry at your end. And the best way to learn is yes.  Need to work hard and make things work",
    timestamp: new Date().toString(),
    messageType: "received",
    profileImg:
      "https://purocoach-crm-assets.s3.amazonaws.com/icons/profile-image.jpg",
  },
  {
    name: "Paula Johnson",
    message:
      "Hey Johnny, I wanted to send an inquiry at your end. Need to work hard and make things work",
    timestamp: new Date().toString(),
    messageType: "sent",
    profileImg:
      "https://purocoach-crm-assets.s3.amazonaws.com/notification-email-photo.jpeg",
  },
  {
    name: "Johnny",
    message:
      "Hey Johnny, I wanted to send an inquiry at your end. And the best way to learn is yes.  Need to work hard and make things work",
    timestamp: new Date().toString(),
    messageType: "received",
    profileImg:
      "https://purocoach-crm-assets.s3.amazonaws.com/icons/profile-image.jpg",
  },
];

const MessageBar: FC<Props> = ({ open, setOpen }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      className={styles.messageBar}
      style={{
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
      }}
    >
      <div className={styles.container}>
        <h2>Slack Chats</h2>
        <div className={styles.notificationsContainer}>
          <div className={styles.notifications}>
            <CoachMessageItem
              unread={true}
              name="Paula Johnson"
              message="Hey! Did you get the chance to review the documents..."
              count={3}
              time="1:45 pm"
              profileImg="https://purocoach-crm-assets.s3.amazonaws.com/notification-email-photo.jpeg"
            />

            <CoachMessageItem
              unread={true}
              name="Lisa Ericson"
              message="Hey! Did you see it.."
              count={4}
              time="Yesterday"
              profileImg="https://purocoach-crm-assets.s3.amazonaws.com/notification-email-photo3.jpeg"
            />

            <CoachMessageItem
              unread={false}
              name="Jeniffer Cross"
              message="Hey Johnny! Let me know what you think...."
              count={0}
              time="Monday"
              profileImg="https://purocoach-crm-assets.s3.amazonaws.com/notification-email-photo5.jpeg"
            />

            <CoachMessageItem
              unread={false}
              name="Alison Petters"
              message="Kindly reply to my last message..."
              count={0}
              time="last week"
              profileImg="https://purocoach-crm-assets.s3.amazonaws.com/notifications-email-p.jpeg"
            />

            <CoachMessageItem
              unread={false}
              name="John Dunbar"
              message="Hey Johnny, Let me know when you're readdy..."
              count={0}
              time="2 weeks"
              profileImg="https://purocoach-crm-assets.s3.amazonaws.com/notifications-email-photo4.jpeg"
            />
          </div>
        </div>
        <div className={styles.footerContainer}>
          <div className={styles.footer}>
            <h4>See All in Messages</h4>
          </div>
        </div>

        <div>
          <CoachMessageBarChat
            profileImg="https://purocoach-crm-assets.s3.amazonaws.com/notification-email-photo.jpeg"
            name="Paula Johnson"
            chatMessages={messages}
          />
        </div>
      </div>
    </Drawer>
  );
};

export default MessageBar;
