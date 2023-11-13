"use client";

import React, { FC, useState } from "react";
import styles from "./Header.module.css";
import {
  AdminMessageBar,
  AdminInboxBar,
  AdminNotificationsBar,
  AdminFavoritesBar,
  AdminProfileMenu,
  AdminThemeMenu,
  AdminRegionMenu,
  AdminUserMenu,
  AdminFilterMenu,
  AdminStatusMenu,
} from "@/components";
import { useSelector } from "react-redux";

const Header = () => {
  const [openNotifications, setOpenNotifications] = useState(false);
  const [openMails, setOpenMails] = useState(false);
  const [openMessages, setOpenMessages] = useState(false);
  const [openFavorites, setOpenFavorites] = useState(false);
  const [openThemeMode, setOpenThemeMode] = useState(false);
  const [openRegionMode, setOpenRegionMode] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [userType, setUserType] = useState("admin");
  const [openFilters, setOpenFilters] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [statusType, setStatusType] = useState("online");
  const [regionType, setRegionType] = useState("us");
  const [themeType, setThemeType] = useState("light");

  const user = useSelector((state: any) => state.userInfo.user);

  const openNotificationsMenu = () => {
    setOpenNotifications(true);
    setOpenMails(false);
    setOpenMessages(false);
    setOpenRegionMode(false);
    setOpenThemeMode(false);
    setOpenProfile(false);
  };

  const openMailsMenu = () => {
    setOpenNotifications(false);
    setOpenMails(true);
    setOpenMessages(false);
    setOpenRegionMode(false);
    setOpenThemeMode(false);
    setOpenProfile(false);
  };

  const openMessagesMenu = () => {
    setOpenNotifications(false);
    setOpenMails(false);
    setOpenMessages(true);
    setOpenRegionMode(false);
    setOpenThemeMode(false);
    setOpenProfile(false);
  };

  const openFavoritesMenu = () => {
    setOpenNotifications(false);
    setOpenMails(false);
    setOpenMessages(false);
    setOpenRegionMode(false);
    setOpenThemeMode(false);
    setOpenFavorites(true);
    setOpenProfile(false);
  };

  let name = "Johnny Dorvilien";

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h1>Admin Portal</h1>
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
            <div
              className={styles.inputDropdown}
              onClick={() => setOpenFilters(true)}
            >
              <div className={styles.inputIconContainer}>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/filter.png"
                  alt=""
                  className={styles.inputFilterIcon}
                />
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-down.png"
                  alt=""
                  className={styles.inputArrowIcon}
                />
              </div>
              <AdminFilterMenu show={openFilters} setShow={setOpenFilters} />
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
                <span>8</span>
              </div>
              <div className={`${styles.headerRight__button} ${styles.email}`}>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/inbox-envelops.png"
                  alt=""
                  onClick={openMailsMenu}
                />
                <span>5</span>
              </div>
              <div
                className={`${styles.headerRight__button} ${styles.message}`}
              >
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/messages.png"
                  alt=""
                  onClick={openMessagesMenu}
                />
                <span>2</span>
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
                onClick={() => setOpenRegionMode(true)}
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
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/profile-image.jpg"
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
                    {name.length > 18 ? name.substr(0, 11) + "..." : name}
                  </h3>
                  <div
                    className={styles.profileType}
                    onClick={() => setOpenUser(true)}
                  >
                    <p>Admin</p>
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
                      {user
                        ? user.emailAddress.length > 15
                          ? user.emailAddress.substr(0, 15) + "..."
                          : user.emailAddress
                        : "test@gmail.com"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdminMessageBar open={openMessages} setOpen={setOpenMessages} />
      <AdminInboxBar open={openMails} setOpen={setOpenMails} />
      <AdminNotificationsBar
        open={openNotifications}
        setOpen={setOpenNotifications}
      />
      <AdminFavoritesBar open={openFavorites} setOpen={setOpenFavorites} />
      <AdminProfileMenu show={openProfile} setShow={setOpenProfile} />
      <AdminThemeMenu
        show={openThemeMode}
        setShow={setOpenThemeMode}
        selected={themeType}
        setSelected={(text) => setThemeType(text)}
      />
      <AdminRegionMenu
        show={openRegionMode}
        setShow={setOpenRegionMode}
        selected={regionType}
        setSelected={(text) => setRegionType(text)}
      />
      <AdminStatusMenu
        show={openStatus}
        setShow={setOpenStatus}
        selected={statusType}
        setSelected={(text) => setStatusType(text)}
      />
      <AdminUserMenu
        show={openUser}
        setShow={setOpenUser}
        selected={userType}
        setSelected={(text) => setUserType(text)}
      />
    </div>
  );
};

export default Header;