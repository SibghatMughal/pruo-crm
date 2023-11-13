"use client";

import React, { FC, useState } from "react";
import styles from "./Header.module.css";
import {
  ClientMessageBar,
  ClientInboxBar,
  ClientNotificationsBar,
  ClientFavoritesBar,
  ThemeMenu,
  StatusMenu,
  UserMenu,
  ClientFilterMenu,
  ClientProfileMenu,
} from "@/components";

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  const [openNotifications, setOpenNotifications] = useState(false);
  const [openMails, setOpenMails] = useState(false);
  const [openMessages, setOpenMessages] = useState(false);
  const [openFavorites, setOpenFavorites] = useState(false);
  const [openThemeMode, setOpenThemeMode] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [userType, setUserType] = useState("admin");
  const [openFilters, setOpenFilters] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [statusType, setStatusType] = useState("online");
  const [regionType, setRegionType] = useState("us");
  const [themeType, setThemeType] = useState("light");

  const openNotificationsMenu = () => {
    setOpenNotifications(true);
    setOpenMails(false);
    setOpenMessages(false);
    setOpenThemeMode(false);
    setOpenFavorites(false);
  };

  const openMailsMenu = () => {
    setOpenNotifications(false);
    setOpenMails(true);
    setOpenMessages(false);
    setOpenThemeMode(false);
    setOpenFavorites(false);
  };

  const openMessagesMenu = () => {
    setOpenNotifications(false);
    setOpenMails(false);
    setOpenMessages(true);
    setOpenThemeMode(false);
    setOpenFavorites(false);
  };

  const openFavoritesMenu = () => {
    setOpenNotifications(false);
    setOpenMails(false);
    setOpenMessages(false);
    setOpenThemeMode(false);
    setOpenFavorites(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h1>{title}</h1>
        </div>
        <div className={styles.headerRight__left}>
          <div className={styles.inputContainer}>
            <div className={styles.input}>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/search.png"
                alt=""
              />
              <input
                type="text"
                placeholder="Client Id, account No, email, phone..."
              />
            </div>
            <div className={styles.inputDropdown}>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/filter.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.headerRight__rightContainer}>
            <div className={styles.headerRight__center}>
              <div className={`${styles.headerRight__button} ${styles.bell}`}>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/notifications-new.png"
                  alt=""
                  onClick={openNotificationsMenu}
                />
                <span className={styles.notificationText}>8</span>
              </div>
              <div className={`${styles.headerRight__button} ${styles.email}`}>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/inbox-envelops.png"
                  alt=""
                  onClick={openMailsMenu}
                />
                <span className={styles.notificationText}>5</span>
              </div>
              <div
                className={`${styles.headerRight__button} ${styles.message}`}
              >
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/messages.png"
                  alt=""
                  onClick={openMessagesMenu}
                />
                <span className={styles.notificationText}>2</span>
              </div>
              <div className={`${styles.headerRight__button} ${styles.heart}`}>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/favorites.png"
                  alt=""
                  onClick={openFavoritesMenu}
                />
              </div>
              <div
                className={`${styles.headerRight__button} ${styles.mode}`}
                onClick={() => setOpenThemeMode(true)}
                onMouseLeave={() => setOpenThemeMode(false)}
                onMouseOver={() => setOpenThemeMode(true)}
              >
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/light-dark-mode.png"
                  alt=""
                />
                <p>Light Mode</p>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-down.png"
                  alt=""
                  className={styles.headerRight__down}
                />
              </div>
              {/* <div
                className={`${styles.headerRight__button} ${styles.regionContainer}`}
                onMouseEnter={() => setOpenRegionMode(true)}
                onMouseLeave={() => setOpenRegionMode(false)}
                onMouseOver={() => setOpenRegionMode(true)}
              >
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/region.png"
                  alt=""
                  className={styles.region}
                />
                <p>U.S Region</p>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-down.png"
                  alt=""
                  className={styles.headerRight__down}
                />
              </div> */}
            </div>
            <div className={styles.headerRight__right}>
              <div
                className={`${styles.headerRight__button} ${styles.profileMenu}`}
                onClick={() => setOpenProfile(true)}
              >
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/profile-menu-hamburger.png"
                  alt=""
                />
              </div>
              <div className={styles.profileImgContainer}>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/client-profile.jpeg"
                  alt=""
                />
                {statusType === "online" ? (
                  <div className={styles.onlineCircle}></div>
                ) : null}
                {statusType === "meeting" ? (
                  <div className={styles.meetingCircle}></div>
                ) : null}
                {statusType === "away" ? (
                  <div className={styles.awayCircle}></div>
                ) : null}
                {statusType === "busy" ? (
                  <div className={styles.busyCircle}></div>
                ) : null}
                {statusType === "offline" ? (
                  <div className={styles.offlineCircle}></div>
                ) : null}
              </div>

              <div className={styles.profileInfo}>
                <div className={styles.profileInfoTop}>
                  <h3>
                    {/* {user
                      ? user.displayName.length > 18
                        ? user.displayName.substr(0, 11) + "..."
                        : user.displayName
                      : ""} */}
                    Jeniffer Williams
                  </h3>
                  <div
                    className={styles.profileType}
                    onClick={() => setOpenUser(true)}
                  >
                    <p>Client</p>
                    <img
                      src="https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-down.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className={styles.profileInfoDivider}></div>
                <div className={styles.profileInfoBottom}>
                  <div
                    className={styles.statusContainer}
                    onClick={() => setOpenStatus(true)}
                  >
                    {statusType === "online" ? (
                      <p className={styles.onlineText}>Online</p>
                    ) : null}
                    {statusType === "meeting" ? (
                      <p className={styles.meetingText}>In a Meeting</p>
                    ) : null}
                    {statusType === "away" ? (
                      <p className={styles.awayText}>Away</p>
                    ) : null}
                    {statusType === "busy" ? (
                      <p className={styles.busyText}>Busy</p>
                    ) : null}
                    {statusType === "offline" ? (
                      <p className={styles.offlineText}>Offline</p>
                    ) : null}
                    <img
                      src="https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-down.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.profileEmail}>
                    <p>
                      {/* {user
                        ? user.emailAddress.length > 15
                          ? user.emailAddress.substr(0, 15) + "..."
                          : user.emailAddress
                        : ""} */}
                      jenifferwilliams...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ClientMessageBar open={openMessages} setOpen={setOpenMessages} />
      <ClientInboxBar open={openMails} setOpen={setOpenMails} />
      <ClientNotificationsBar
        open={openNotifications}
        setOpen={setOpenNotifications}
      />
      <ClientFavoritesBar open={openFavorites} setOpen={setOpenFavorites} />
      <ClientProfileMenu show={openProfile} setShow={setOpenProfile} />
      <ThemeMenu
        show={openThemeMode}
        setShow={setOpenThemeMode}
        selected={themeType}
        setSelected={(text: any) => setThemeType(text)}
      />
      <StatusMenu
        show={openStatus}
        setShow={setOpenStatus}
        selected={statusType}
        setSelected={(text: any) => setStatusType(text)}
      />
      <UserMenu
        show={openUser}
        setShow={setOpenUser}
        selected={userType}
        setSelected={(text: any) => setUserType(text)}
      />
    </div>
  );
};

export default Header;
