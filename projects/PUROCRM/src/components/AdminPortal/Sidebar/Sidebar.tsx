"use client";

import React, { FC, useState } from "react";
import styles from "./Sidebar.module.css";
import Link from "next/link";

interface Props {
  openSidebar: boolean;
  setOpenSidebar: (value: boolean) => void;
}

const Sidebar: FC<Props> = ({ openSidebar, setOpenSidebar }) => {
  const [showClientManagementOptions, setShowClientManagementOptions] =
    useState(false);

  const [showAdminWorkshpaceOptions, setShowAdminWorkshpaceOptions] =
    useState(false);

  const [showMessagingOptions, setShowMessagingOptions] = useState(false);

  const [showSchedulingOptions, setShowSchedulingOptions] = useState(false);

  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  let defaultSelected = "dashboard";

  const handleClientManagementOptions = () => {
    setShowMessagingOptions(false);
    setShowSchedulingOptions(false);
    setShowPaymentOptions(false);
    setShowClientManagementOptions((curr) => !curr);
    setShowAdminWorkshpaceOptions(false);
  };

  const handleWorkspaceOptions = () => {
    setShowMessagingOptions(false);
    setShowSchedulingOptions(false);
    setShowPaymentOptions(false);
    setShowClientManagementOptions(false);
    setShowAdminWorkshpaceOptions((curr) => !curr);
  };

  const handleMessagingOptions = () => {
    setShowMessagingOptions((curr) => !curr);
    setShowSchedulingOptions(false);
    setShowPaymentOptions(false);
    setShowClientManagementOptions(false);
    setShowAdminWorkshpaceOptions(false);
  };

  const handleSchedulingOptions = () => {
    setShowMessagingOptions(false);
    setShowSchedulingOptions((curr) => !curr);
    setShowPaymentOptions(false);
    setShowClientManagementOptions(false);
    setShowAdminWorkshpaceOptions(false);
  };

  return (
    <div className={styles.sidebarContainer}>
      {openSidebar ? (
        <div>
          <div className={styles.sidebar}>
            <div className={styles.sidebar__logo}>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/logo.png"
                alt=""
              />
            </div>
            <div
              className={`${styles.sidebarItem} ${
                defaultSelected === "dashboard" ? styles.defaultSelected : null
              }`}
            >
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/dashboard.png"
                alt=""
              />
              <h1>Dashboard</h1>
            </div>

            <div
            // onMouseEnter={() => setShowClientManagementOptions(true)}
            // onMouseLeave={() => setShowClientManagementOptions(false)}
            // onMouseOver={() => setShowClientManagementOptions(true)}
            >
              <div
                className={`${styles.sidebarItem} ${styles.sidebarDropdown} ${
                  showClientManagementOptions ? styles.optionsOpened : ""
                }`}
                onClick={() => handleClientManagementOptions()}
              >
                <div className={styles.sidebarItem__left}>
                  <img
                    src="https://purocoach-crm-assets.s3.amazonaws.com/icons/client-management.png"
                    alt=""
                  />
                  <h4
                    className={`${
                      showClientManagementOptions ? styles.selectedTitle : null
                    }`}
                  >
                    Client Management
                  </h4>
                </div>
                <img
                  src={
                    showClientManagementOptions
                      ? "https://purocoach-crm-assets.s3.amazonaws.com/icons/up-arrow-black.png"
                      : "https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-down.png"
                  }
                  alt=""
                  className={`${
                    showClientManagementOptions
                      ? styles.dropdownSelectedIcon
                      : styles.dropdownIcon
                  }`}
                />
              </div>

              <div
                className={`${
                  showClientManagementOptions
                    ? styles.showOptions
                    : styles.hideOptions
                } ${styles.optionsContainer}`}
              >
                <ul>
                  <li>Clients</li>
                  <li>Coaches</li>
                  <li>Contacts</li>
                  <li>Leads</li>
                  <li>Subscribers</li>
                </ul>
              </div>
            </div>

            <div className={styles.sidebarItem}>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/user-management.png"
                alt=""
              />
              <h4>User Management</h4>
            </div>

            <div
            // onMouseEnter={() => setShowAdminWorkshpaceOptions(true)}
            // onMouseLeave={() => setShowAdminWorkshpaceOptions(false)}
            // onMouseOver={() => setShowAdminWorkshpaceOptions(true)}
            >
              <div
                className={`${styles.sidebarItem} ${styles.sidebarDropdown} ${
                  showAdminWorkshpaceOptions ? styles.optionsOpened : ""
                }`}
                onClick={() => handleWorkspaceOptions()}
              >
                <div className={styles.sidebarItem__left}>
                  <img
                    src="https://purocoach-crm-assets.s3.amazonaws.com/icons/admin-workspace.png"
                    alt=""
                  />
                  <h4
                    className={`${
                      showAdminWorkshpaceOptions ? styles.selectedTitle : null
                    }`}
                  >
                    Admin Workspace
                  </h4>
                </div>
                <img
                  src={
                    showAdminWorkshpaceOptions
                      ? "https://purocoach-crm-assets.s3.amazonaws.com/icons/up-arrow-black.png"
                      : "https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-down.png"
                  }
                  alt=""
                  className={`${
                    showAdminWorkshpaceOptions
                      ? styles.dropdownSelectedIcon
                      : styles.dropdownIcon
                  }`}
                />
              </div>

              <div
                className={`${
                  showAdminWorkshpaceOptions
                    ? styles.showOptions
                    : styles.hideOptions
                } ${styles.optionsContainer}`}
              >
                <ul>
                  <li>Client Onboarding</li>
                  <li>Profiles</li>
                  <li>Programs</li>
                  <li>Packages</li>
                  <li>Proposals</li>
                  <li>Contracts</li>
                  <li>Service Agreements</li>
                  <li>Client Off-boardings</li>
                  <li>Approval Queue</li>
                  <li>Disputes</li>
                  <li>Reviews & Ratings</li>
                  <div
                  // onMouseEnter={() => setShowPaymentOptions(true)}
                  // onMouseOver={() => setShowPaymentOptions(true)}
                  // onMouseLeave={() => setShowPaymentOptions(false)}
                  >
                    <li
                      className={` ${
                        showPaymentOptions ? styles.paymentOptionsOpened : ""
                      }`}
                      onClick={() => setShowPaymentOptions((curr) => !curr)}
                    >
                      <div className={`${styles.paymentsTitleContainer}`}>
                        <div>Payments</div>
                        <img
                          src={
                            showPaymentOptions
                              ? "https://purocoach-crm-assets.s3.amazonaws.com/icons/up-arrow-black.png"
                              : "https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-down.png"
                          }
                          alt=""
                          className={`${
                            showPaymentOptions
                              ? styles.dropdownSelectedIcon
                              : styles.dropdownIcon
                          }`}
                        />
                      </div>
                    </li>
                    <ul
                      className={`${
                        showPaymentOptions
                          ? `${styles.showOptions} ${styles.sublist}`
                          : styles.hideOptions
                      } ${styles.paymentsOptions}`}
                    >
                      <li>All Payments</li>
                      <li>Receipts</li>
                      <li>Invoices</li>
                      <li>Subscriptions</li>
                      <li>Billing & Statements</li>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>

            <div
            // onMouseEnter={() => setShowMessagingOptions(true)}
            // onMouseLeave={() => setShowMessagingOptions(false)}
            // onMouseOver={() => setShowMessagingOptions(true)}
            >
              <div
                className={`${styles.sidebarItem} ${styles.sidebarDropdown} ${
                  showMessagingOptions ? styles.optionsOpened : ""
                }`}
                onClick={() => handleMessagingOptions()}
              >
                <div className={styles.sidebarItem__left}>
                  <img
                    src="https://purocoach-crm-assets.s3.amazonaws.com/icons/messaging.png"
                    alt=""
                  />
                  <h4>Messaging</h4>
                </div>
                <img
                  src={
                    showMessagingOptions
                      ? "https://purocoach-crm-assets.s3.amazonaws.com/icons/up-arrow-black.png"
                      : "https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-down.png"
                  }
                  alt=""
                  className={`${
                    showMessagingOptions
                      ? styles.dropdownSelectedIcon
                      : styles.dropdownIcon
                  }`}
                />
              </div>

              <div
                className={`${
                  showMessagingOptions ? styles.showOptions : styles.hideOptions
                } ${styles.optionsContainer}`}
              >
                <ul>
                  <Link href="/admin-portal?tab=0">
                    <li>Inbox</li>
                  </Link>
                  <Link href="/admin-portal?tab=1">
                    <li>Slack Chats</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div
            // onMouseEnter={() => setShowSchedulingOptions(true)}
            // onMouseLeave={() => setShowSchedulingOptions(false)}
            // onMouseOver={() => setShowSchedulingOptions(true)}
            >
              <div
                className={`${styles.sidebarItem} ${styles.sidebarDropdown}  ${
                  showSchedulingOptions ? styles.optionsOpened : ""
                }`}
                onClick={() => handleSchedulingOptions()}
              >
                <div className={styles.sidebarItem__left}>
                  <img
                    src="https://purocoach-crm-assets.s3.amazonaws.com/icons/scheduling.png"
                    alt=""
                    className={styles.schedulingIcon}
                  />
                  <h4
                    className={`${
                      showSchedulingOptions ? styles.selectedTitle : null
                    }`}
                  >
                    Scheduling
                  </h4>
                </div>
                <img
                  src={
                    showSchedulingOptions
                      ? "https://purocoach-crm-assets.s3.amazonaws.com/icons/up-arrow-black.png"
                      : "https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-down.png"
                  }
                  alt=""
                  className={`${
                    showSchedulingOptions
                      ? styles.dropdownSelectedIcon
                      : styles.dropdownIcon
                  }`}
                />
              </div>

              <div
                className={`${
                  showSchedulingOptions
                    ? styles.showOptions
                    : styles.hideOptions
                } ${styles.optionsContainer}`}
              >
                <ul>
                  <Link href="/schedule-list">
                    <li>Meetings</li>
                  </Link>
                  <Link href="/calendar/list-view">
                    <li>Tasks</li>
                  </Link>
                  <li>Events</li>
                  <Link href="/calendar">
                    <li>Calendar</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className={styles.sidebarItem}>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/video-sessions.png"
                alt=""
                className={styles.fileIcon}
              />
              <h4>Sessions</h4>
            </div>

            <div className={styles.sidebarItem}>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/files-document.png"
                alt=""
                className={styles.fileIcon}
              />
              <h4>Files & Documents</h4>
            </div>

            <div className={styles.sidebarItem}>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/resources.png"
                alt=""
                className={styles.fileIcon}
              />
              <h4>Tools & Resources</h4>
            </div>

            <div className={styles.sidebarItem}>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/help.png"
                alt=""
                className={styles.helpIcon}
              />
              <h4>Help & Support</h4>
            </div>

            <div className={styles.notificationsContainer}>
              <div className={styles.notifications}>
                <div className={styles.notificationsIcon}>
                  <img
                    src="https://purocoach-crm-assets.s3.amazonaws.com/icons/notifications-clock.png"
                    alt=""
                  />
                  {/* <img
                    src="https://purocoach-crm-assets.s3.amazonaws.com/icons/notifications-red-dot.png"
                    alt=""
                    className={styles.dot}
                  /> */}
                  <div className={styles.greenCircle} />
                </div>
                <p>5 new proposal requests from new prospect clients.</p>
                <button>Open to view</button>
              </div>
            </div>
          </div>

          <div
            className={styles.openArrow}
            onClick={() => setOpenSidebar(false)}
          >
            <img
              src="https://purocoach-crm-assets.s3.amazonaws.com/icons/open-menu-arrows.png"
              alt=""
            />
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.closeSidebar}>
            <div className={styles.closeSidebar__logo}>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/logo-close.jpeg"
                alt=""
              />
            </div>
            <div
              className={`${styles.closedSidebarItem} ${
                defaultSelected === "dashboard"
                  ? styles.closedDefaultSelected
                  : null
              }`}
            >
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/dashboard.png"
                alt=""
              />
            </div>
            <div
              className={styles.closedSidebarContainer}
              onMouseEnter={() => setShowClientManagementOptions(true)}
              onMouseLeave={() => setShowClientManagementOptions(false)}
              onMouseOver={() => setShowClientManagementOptions(true)}
            >
              <div
                className={`${styles.closedSidebarItem} ${
                  styles.sidebarDropdown
                } ${
                  showClientManagementOptions
                    ? styles.closedSidebarItemSelected
                    : ""
                }`}
              >
                <div className={styles.sidebarItem__left}>
                  <img
                    src="https://purocoach-crm-assets.s3.amazonaws.com/icons/client-management.png"
                    alt=""
                  />
                  {!showClientManagementOptions && (
                    <div className={styles.closedArrow}>
                      <img
                        src="https://purocoach-crm-assets.s3.amazonaws.com/icons/right-menu-arrow.png"
                        alt=""
                      />
                    </div>
                  )}
                </div>
              </div>

              <div
                className={`${
                  showClientManagementOptions
                    ? styles.showOptions
                    : styles.hideOptions
                } ${styles.closedOptionsContainer}`}
              >
                <div className={styles.closedOptionsArrow}>
                  <img
                    src="https://purocoach-crm-assets.s3.amazonaws.com/icons/left-arrow-menu.png"
                    alt=""
                  />
                </div>
                <div className={styles.closedOptions}>
                  <h3>Client Management</h3>
                  <ul>
                    <li>Clients</li>
                    <li>Coaches</li>
                    <li>Contacts</li>
                    <li>Leads</li>
                    <li>Subscribers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.closedSidebarItem}>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/user-management.png"
                alt=""
              />
            </div>

            <div
              className={styles.closedSidebarContainer}
              onMouseEnter={() => setShowAdminWorkshpaceOptions(true)}
              onMouseLeave={() => setShowAdminWorkshpaceOptions(false)}
              onMouseOver={() => setShowAdminWorkshpaceOptions(true)}
            >
              <div
                className={`${styles.closedSidebarItem} ${
                  styles.sidebarDropdown
                }  ${
                  showAdminWorkshpaceOptions
                    ? styles.closedSidebarItemSelected
                    : ""
                }`}
              >
                <div className={styles.sidebarItem__left}>
                  <img
                    src="https://purocoach-crm-assets.s3.amazonaws.com/icons/admin-workspace.png"
                    alt=""
                  />
                  {!showAdminWorkshpaceOptions && (
                    <div className={styles.closedArrow}>
                      <img
                        src="https://purocoach-crm-assets.s3.amazonaws.com/icons/right-menu-arrow.png"
                        alt=""
                      />
                    </div>
                  )}
                </div>
              </div>
              <div
                className={`${
                  showAdminWorkshpaceOptions
                    ? styles.showOptions
                    : styles.hideOptions
                } ${styles.closedOptionsContainer}`}
              >
                <div className={styles.closedOptionsArrow}>
                  <img
                    src="https://purocoach-crm-assets.s3.amazonaws.com/icons/left-arrow-menu.png"
                    alt=""
                  />
                </div>

                <div className={styles.workspaceClosedOptions}>
                  <h3>Admin Workspace</h3>
                  <ul>
                    <li>Onboardings</li>
                    <li>Off-boardings</li>
                    <li>Profiles</li>
                    <li>Programs</li>
                    <li>Packages</li>
                    <li>Proposals</li>
                    <li>Contracts</li>
                    <li>Service Agreements</li>
                    <li>Approval Queue</li>
                    <li>Disputes</li>
                    <li>Reviews & Ratings</li>
                    <hr className={styles.paymentOptionsDivider} />
                    <li
                      className={`${
                        showPaymentOptions ? styles.paymentOptionsOpened : ""
                      }`}
                    >
                      <div
                        className={`${styles.closedPaymentsTitleContainer} ${styles.customPaymentOptions}`}
                      >
                        <div>Payments</div>
                        <img
                          src="https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-down.png"
                          alt=""
                        />
                      </div>
                    </li>
                    <ul
                      className={`${styles.showOptions} ${styles.sublist}
                          ${styles.closedPaymentsOptions} `}
                      onMouseEnter={() => setShowPaymentOptions(true)}
                      onMouseOver={() => setShowPaymentOptions(true)}
                      onMouseLeave={() => setShowPaymentOptions(false)}
                    >
                      <li>All Payments</li>
                      <li>Receipts</li>
                      <li>Invoices</li>
                      <li>Subscriptions</li>
                      <li>
                        Billing &<br />
                        <span>Statements</span>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className={styles.closedSidebarContainer}
              onMouseEnter={() => setShowMessagingOptions(true)}
              onMouseLeave={() => setShowMessagingOptions(false)}
              onMouseOver={() => setShowMessagingOptions(true)}
            >
              <div
                className={`${styles.closedSidebarItem} ${
                  styles.sidebarDropdown
                }  ${
                  showMessagingOptions ? styles.closedSidebarItemSelected : ""
                }`}
              >
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/messaging.png"
                  alt=""
                />

                {!showMessagingOptions && (
                  <div className={styles.closedArrow}>
                    <img
                      src="https://purocoach-crm-assets.s3.amazonaws.com/icons/right-menu-arrow.png"
                      alt=""
                    />
                  </div>
                )}
              </div>

              <div
                className={`${
                  showMessagingOptions ? styles.showOptions : styles.hideOptions
                } ${styles.closedOptionsContainer}`}
              >
                <div className={styles.closedOptionsArrow}>
                  <img
                    src="https://purocoach-crm-assets.s3.amazonaws.com/icons/left-arrow-menu.png"
                    alt=""
                  />
                </div>
                <div className={styles.closedOptions}>
                  <h3>Messaging</h3>
                  <ul>
                    <Link href="/admin-portal?tab=0">
                      <li>Inbox</li>
                    </Link>
                    <Link href="/admin-portal?tab=1">
                      <li>Slack Chats</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className={styles.closedSidebarContainer}
              onMouseEnter={() => setShowSchedulingOptions(true)}
              onMouseLeave={() => setShowSchedulingOptions(false)}
              onMouseOver={() => setShowSchedulingOptions(true)}
            >
              <div
                className={`${styles.closedSidebarItem} ${
                  styles.sidebarDropdown
                }  ${
                  showSchedulingOptions ? styles.closedSidebarItemSelected : ""
                }`}
              >
                <div className={styles.sidebarItem__left}>
                  <img
                    src="https://purocoach-crm-assets.s3.amazonaws.com/icons/scheduling.png"
                    alt=""
                    className={styles.schedulingIcon}
                  />
                  {!showSchedulingOptions && (
                    <div className={styles.closedArrow}>
                      <img
                        src="https://purocoach-crm-assets.s3.amazonaws.com/icons/right-menu-arrow.png"
                        alt=""
                      />
                    </div>
                  )}
                </div>
              </div>

              <div
                className={`${
                  showSchedulingOptions
                    ? styles.showOptions
                    : styles.hideOptions
                } ${styles.closedOptionsContainer}`}
              >
                <div className={styles.closedOptionsArrow}>
                  <img
                    src="https://purocoach-crm-assets.s3.amazonaws.com/icons/left-arrow-menu.png"
                    alt=""
                  />
                </div>
                <div className={styles.closedOptions}>
                  <h3>Scheduling Options</h3>
                  <ul>
                    <Link href="/schedule-list">
                      <li>Meetings</li>
                    </Link>
                    <Link href="/calendar/list-view">
                      <li>Tasks</li>
                    </Link>
                    <li>Events</li>
                    <Link href="/calendar">
                      <li>Calendar</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.closedSidebarItem}>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/video-sessions.png"
                alt=""
              />
            </div>

            <div className={styles.closedSidebarItem}>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/files-document.png"
                alt=""
              />
            </div>

            <div className={styles.closedSidebarItem}>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/resources.png"
                alt=""
                className={styles.closedResourcesIcon}
              />
            </div>

            <div className={styles.closedSidebarItem}>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/help.png"
                alt=""
                className={styles.closedHelpIcon}
              />
            </div>

            <div className={styles.closedNotificationsContainer}>
              <div className={styles.closedNotifications}>
                <div className={styles.closedNotificationsIcon}>
                  <img
                    src="https://purocoach-crm-assets.s3.amazonaws.com/icons/notifications-clock.png"
                    alt=""
                  />
                  <div className={styles.closedGreenCircle} />
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.closeArrow}
            onClick={() => setOpenSidebar(true)}
          >
            <img
              src="https://purocoach-crm-assets.s3.amazonaws.com/icons/close-menu-arrows.png"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
