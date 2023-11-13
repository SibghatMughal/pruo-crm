"use client";

import React, { useEffect, useState } from "react";
import styles from "./OnboardingTable.module.css";

import { Tab, Tabs } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MoreVert, UnfoldMore } from "@mui/icons-material";
import Link from "next/link";

function createData(
  id: number,
  clientName: string,
  email: string,
  phoneNumber: string,
  clientProfile: string,
  clientPortal: string,
  programEnrolled: string,
  startedDate: string,
  status: string,
  progress: string
) {
  return {
    id,
    clientName,
    email,
    phoneNumber,
    clientProfile,
    clientPortal,
    programEnrolled,
    startedDate,
    status,
    progress,
  };
}

const rows = [
  createData(
    1,
    "Jake Paul",
    "jake@gmail.com",
    "345-654-3456",
    "jake-paul",
    "portal",
    "Executive Coacing",
    "15-05-23",
    "1",
    "50%"
  ),
  createData(
    2,
    "Jake Paul",
    "jake@gmail.com",
    "345-654-3456",
    "jake-paul",
    "portal",
    "Business Coaching",
    "15-05-23",
    "2",
    "50%"
  ),
];

function createCoachData(
  id: number,
  coachName: string,
  email: string,
  phoneNumber: string,
  coachProfile: string,
  coachPortal: string,
  programEnrolled: string,
  startedDate: string,
  status: string,
  progress: string
) {
  return {
    id,
    coachName,
    email,
    phoneNumber,
    coachProfile,
    coachPortal,
    programEnrolled,
    startedDate,
    status,
    progress,
  };
}

const coachData = [
  createCoachData(
    1,
    "Jake Paul",
    "jake@gmail.com",
    "345-654-3456",
    "jake-paul",
    "portal",
    "Executive Coaching",
    "15-05-23",
    "1",
    "50%"
  ),
  createCoachData(
    1,
    "Jake Paul",
    "jake@gmail.com",
    "345-654-3456",
    "jake-paul",
    "portal",
    "Business Coaching",
    "15-05-23",
    "2",
    "50%"
  ),
];

const OnboardingTable = () => {
  const [currentTab, setCurrentTab] = useState<any>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let tab = localStorage.getItem("onboarding");
    setCurrentTab(tab ? Number(tab) : 0);
    setLoading(false);
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    localStorage.setItem("onboarding", newValue.toString());
    setCurrentTab(newValue);
  };

  if (loading) {
    return <></>;
  }

  return (
    <div className={styles.onboarding}>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        TabIndicatorProps={{ style: { background: "#304880" } }}
        className={styles.tabs}
      >
        <Tab
          label="Client Onboarding"
          className={`${styles.tabValue} ${
            currentTab === 0 ? styles.selectedTab : null
          }`}
        />
        <Tab
          label="Coach Onboarding"
          className={`${styles.tabValue} ${
            currentTab === 1 ? styles.selectedTab : null
          }`}
        />
      </Tabs>
      <div className={styles.topButtonContainer}>
        {currentTab === 0 && (
          <div>
            <button className={styles.topLeftBtn}>
              Setup Client Onboading
            </button>
            <button className={styles.topRightBtn}>Onboard New Client</button>
          </div>
        )}
        {currentTab === 1 && (
          <div>
            <Link href={"/coach-portal/coach-profile?defaultOpen=true"}>
              <button className={styles.topLeftBtn}>Onboard New Coach</button>
            </Link>
            <Link href={"/coach-portal/onboardings"}>
              <button className={styles.topRightBtn}>
                Begin Your Onboarding
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* <TableContainer component={Paper}> */}
      {currentTab === 0 && (
        <Table className={styles.table}>
          <TableHead className={styles.tableHeader}>
            <TableRow>
              <TableCell>
                <div className={styles.tableTitleContainer}>
                  Id
                  <UnfoldMore />
                </div>
              </TableCell>
              <TableCell align="left">
                <div className={styles.tableTitleContainer}>
                  Client Name
                  <UnfoldMore />
                </div>
              </TableCell>
              <TableCell align="left">
                <div className={styles.tableTitleContainer}>
                  Email
                  <UnfoldMore />
                </div>
              </TableCell>
              <TableCell align="left">
                <div className={styles.tableTitleContainer}>
                  Phone Number
                  <UnfoldMore />
                </div>
              </TableCell>
              <TableCell align="left">
                <div className={styles.tableTitleContainer}>
                  Client Profile
                  <UnfoldMore />
                </div>
              </TableCell>
              <TableCell align="left">
                <div className={styles.tableTitleContainer}>
                  Client Portal
                  <UnfoldMore />
                </div>
              </TableCell>
              <TableCell align="left">
                <div className={styles.tableTitleContainer}>
                  Program Enrolled
                  <UnfoldMore />
                </div>
              </TableCell>
              <TableCell align="left">
                <div className={styles.tableTitleContainer}>
                  Started Date
                  <UnfoldMore />
                </div>
              </TableCell>
              <TableCell align="left">
                <div className={styles.tableTitleContainer}>
                  Status
                  <UnfoldMore />
                </div>
              </TableCell>
              <TableCell align="left">
                <div className={styles.tableTitleContainer}>
                  Progress
                  <UnfoldMore />
                </div>
              </TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              let status = "Active";
              let statusStyle = styles.statusActive;
              if (row.status === "1") {
                status = "Active";
                statusStyle = styles.statusActive;
              } else if (row.status === "2") {
                status = "Inactive";
                statusStyle = styles.statusInactive;
              }
              return (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:last-of-type td, &:last-of-type th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="left">{row.clientName}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.phoneNumber}</TableCell>
                  <TableCell align="left">
                    <Link href={`/profile`} className={styles.tableLinkValue}>
                      {row.clientProfile}
                    </Link>
                  </TableCell>
                  <TableCell align="left">
                    <Link href={`/profile`} className={styles.tableLinkValue}>
                      {row.clientPortal}
                    </Link>
                  </TableCell>
                  <TableCell align="left">{row.programEnrolled}</TableCell>
                  <TableCell align="left">{row.startedDate}</TableCell>
                  <TableCell align="left">
                    <div className={`${styles.statusContainer} ${statusStyle}`}>
                      {status}
                    </div>
                  </TableCell>
                  <TableCell align="left">{row.progress}</TableCell>
                  <TableCell align="left">
                    <MoreVert />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
      {currentTab === 1 && (
        <Table className={styles.table}>
          <TableHead className={styles.tableHeader}>
            <TableRow>
              <TableCell>
                <div className={styles.tableTitleContainer}>
                  Id
                  <UnfoldMore />
                </div>
              </TableCell>
              <TableCell align="left">
                <div className={styles.tableTitleContainer}>
                  Coach Name
                  <UnfoldMore />
                </div>
              </TableCell>
              <TableCell align="left">
                <div className={styles.tableTitleContainer}>
                  Email
                  <UnfoldMore />
                </div>
              </TableCell>
              <TableCell align="left">
                <div className={styles.tableTitleContainer}>
                  Phone Number
                  <UnfoldMore />
                </div>
              </TableCell>
              <TableCell align="left">
                <div className={styles.tableTitleContainer}>
                  Coach Profile
                  <UnfoldMore />
                </div>
              </TableCell>
              <TableCell align="left">
                <div className={styles.tableTitleContainer}>
                  Coach Portal
                  <UnfoldMore />
                </div>
              </TableCell>
              <TableCell align="left">
                <div className={styles.tableTitleContainer}>
                  Subscription
                  <UnfoldMore />
                </div>
              </TableCell>
              <TableCell align="left">
                <div className={styles.tableTitleContainer}>
                  Started Date
                  <UnfoldMore />
                </div>
              </TableCell>
              <TableCell align="left">
                <div className={styles.tableTitleContainer}>
                  Status
                  <UnfoldMore />
                </div>
              </TableCell>
              <TableCell align="left">
                <div className={styles.tableTitleContainer}>
                  Progress
                  <UnfoldMore />
                </div>
              </TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coachData.map((row) => {
              let status = "Active";
              let statusStyle = styles.statusActive;
              if (row.status === "1") {
                status = "Active";
                statusStyle = styles.statusActive;
              } else if (row.status === "2") {
                status = "Inactive";
                statusStyle = styles.statusInactive;
              }
              return (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:last-of-type td, &:last-of-type th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="left">{row.coachName}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.phoneNumber}</TableCell>
                  <TableCell align="left">
                    <Link href={`/profile`} className={styles.tableLinkValue}>
                      {row.coachProfile}
                    </Link>
                  </TableCell>
                  <TableCell align="left">
                    <Link href={`/profile`} className={styles.tableLinkValue}>
                      {row.coachPortal}
                    </Link>
                  </TableCell>
                  <TableCell align="left">{row.programEnrolled}</TableCell>
                  <TableCell align="left">{row.startedDate}</TableCell>
                  <TableCell align="left">
                    <div className={`${styles.statusContainer} ${statusStyle}`}>
                      {status}
                    </div>
                  </TableCell>
                  <TableCell align="left">{row.progress}</TableCell>
                  <TableCell align="left">
                    <MoreVert />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
      {/* </TableContainer> */}
    </div>
  );
};

export default OnboardingTable;
