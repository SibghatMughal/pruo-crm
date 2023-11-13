"use client";

import React, { useState } from "react";
import Sidebar from "../../components/AdminPortal/Sidebar/Sidebar";
import Header from "../../components/AdminPortal/Header/Header";
import "./schedule.scss";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
import {
  Button,
  InputAdornment,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField,
  Modal,
  Box,
  Divider,
  Avatar,
  Radio,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ClearIcon from "@mui/icons-material/Clear";
import MeetingGrid from "./MeetingGrid";
import ScheduleGrid from "./ScheduleGrid";
import OverViewPage from "./OverViewPage";
import SubSchedule from "./SubSchedule";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};
const Schedule = () => {
  const [openSidebar, setOpenSidebar] = useState(true),
    [detailDrawer, setDetailDrawer] = useState(false),
    [scheduleModal, setScheduleModal] = useState(false),
    [scheduleTypeModal, setScheduleTypeModal] = useState(false),
    [selectedTab, setSetectedTab] = useState(1),
    [scheduleSelectedTab, setScheduleSetectedTab] = useState(1),
    [scheduleadd, setScheduleAdd] = useState(false);

  const handleCloseDrawer = () => {
      setDetailDrawer(false);
      setScheduleModal(false);
      setScheduleTypeModal(false);
    },
    handleTabChange = (event: any, v: number) => setSetectedTab(v),
    handleScheduleTabChange = (event: any, v: number) =>
      setScheduleSetectedTab(v),
    handleSchedulePageClick = () => {
      setScheduleAdd(true);
      setScheduleModal(false);
      setScheduleTypeModal(false);
    },
    handleBackToMeet = () => {
      setSetectedTab(1);
      setScheduleAdd(false);
    };

  const saveDetails = () => {
    setScheduleModal(false);
    // setSuccessModal(true);
  };
  return (
    <div>
      <div className="schedule-container">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <div
          className={`${
            openSidebar ? "right__container" : "closedRight__container"
          }`}
        >
          <div className={"rightSide"}>
            <Header />
            <div className="main">
              Scheduling
              <div className="list-view-main">
                <div className="tabs-main">
                  <Tabs value={selectedTab} onChange={handleTabChange}>
                    <Tab value={1} label="Meetings" />
                    <Tab value={2} label="Scheduling" />
                  </Tabs>
                  {selectedTab == 1 ? (
                    <Button
                      variant="contained"
                      className="new-task-btn"
                      onClick={() => setScheduleModal(true)}
                    >
                      + Create new Meeting
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      className="new-task-btn"
                      onClick={() => setScheduleTypeModal(true)}
                    >
                      + Create new
                    </Button>
                  )}
                </div>

                {!scheduleadd && (
                  <div className="filter-main">
                    <TextField
                      variant="standard"
                      placeholder="search"
                      sx={{
                        width: "50%",
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                    />

                    {selectedTab === 1 ? (
                      <Select
                        value={1}
                        sx={{ height: "40px", width: "20%", color: "gray" }}
                      >
                        <MenuItem value={1}>
                          Show upcoming meeting first
                        </MenuItem>
                      </Select>
                    ) : (
                      <div style={{ display: "flex", gap: "20px" }}>
                        <Select
                          value={1}
                          sx={{ height: "30px", borderRadius: "8px" }}
                        >
                          <MenuItem value={1}>Owner</MenuItem>
                        </Select>
                        <Select
                          value={1}
                          sx={{ height: "30px", borderRadius: "8px" }}
                        >
                          <MenuItem value={1}>Meeting Type</MenuItem>
                        </Select>
                        <Select
                          value={1}
                          sx={{ height: "30px", borderRadius: "8px" }}
                        >
                          <MenuItem value={1}>Business Unit</MenuItem>
                        </Select>
                      </div>
                    )}
                  </div>
                )}

                {selectedTab === 1 ? (
                  <MeetingGrid openDrawer={() => setDetailDrawer(true)} />
                ) : scheduleadd ? (
                  <div className="schedule-add-main">
                    <div className="head">
                      <ArrowBackIosIcon fontSize="small" />{" "}
                      <p className="cursor-p" onClick={handleBackToMeet}>
                        Back to meetings
                      </p>
                    </div>

                    <h3 style={{ marginBottom: "10px" }}>
                      {" "}
                      15 Minutes Discovery Call
                    </h3>

                    <Tabs
                      value={scheduleSelectedTab}
                      onChange={handleScheduleTabChange}
                    >
                      <Tab value={1} label="Overview" />
                      <Tab value={2} label="Scheduling" />
                      <Tab value={3} label="Automation" />
                    </Tabs>

                    {scheduleSelectedTab === 1 ? (
                      <OverViewPage />
                    ) : scheduleSelectedTab === 2 ? (
                      <SubSchedule />
                    ) : (
                      <p>Automation</p>
                    )}
                  </div>
                ) : (
                  <ScheduleGrid />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={scheduleModal} onClose={handleCloseDrawer}>
        <div className="modal-section">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p className="modal-header">Add Title</p>
            <ClearIcon
              onClick={handleCloseDrawer}
              className="cursor-p"
              color="disabled"
            />
          </div>

          <div>
            <div className="modal-content">
              <div className="modal-row">
                <div className="left">
                  <CalendarMonthOutlinedIcon
                    sx={{
                      color: "#8F95B2",
                      marginRight: "12px",
                      marginBottom: "-6px",
                    }}
                  />
                  Date & Time
                </div>
                <div className="right confrence">
                  <div className="boxes">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        sx={{ width: "160px", border: "none" }}
                        label=""
                      />
                    </LocalizationProvider>
                    {/* <div className="box">Aug, 23, 2023</div> */}
                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker sx={{ width: "100px" }} label="" />
                    </LocalizationProvider> */}
                    <div className="box">
                      {" "}
                      <input
                        style={{
                          width: "70px",
                          border: "none",
                          padding: "0px",
                          outline: "none",
                        }}
                        placeholder="06:00am"
                      />{" "}
                    </div>
                    <div className="box">
                      {" "}
                      <input
                        style={{
                          width: "70px",
                          border: "none",
                          padding: "0px",
                          outline: "none",
                        }}
                        placeholder="07:00pm"
                      />
                    </div>
                    <div>To Timezone</div>
                  </div>
                  <div className="select-box">
                    <span style={{ marginRight: "12px" }}>Repeat:</span>
                    <select name="selct" id="selct">
                      <option value="select">Select</option>
                      <option value="option">option</option>
                    </select>{" "}
                  </div>
                </div>
              </div>
              <div className="modal-row">
                <div className="left">
                  <PeopleAltIcon
                    sx={{
                      color: "#8F95B2",
                      marginRight: "12px",
                      marginBottom: "-6px",
                    }}
                  />
                  Guests
                </div>
                <div className="right">
                  <input type="text" placeholder="Add guests" />
                </div>
              </div>
              <div className="modal-row " style={{ alignItems: "start" }}>
                <div className="left">
                  <VideocamOutlinedIcon
                    sx={{
                      color: "#8F95B2",
                      marginRight: "12px",
                      marginBottom: "-6px",
                    }}
                  />
                  Conference call
                </div>
                <div className="right">
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      border: "1px solid #333399",
                      borderRadius: "8px",
                      color: "#333399",
                      background: "transparent",
                      fontWeight: 500,
                    }}
                    endIcon={<Radio checked />}
                    startIcon={<img src="./assets/zoom.svg" />}
                  >
                    Join with Zoom
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      border: "1px solid #333399",
                      borderRadius: "8px",
                      color: "#333399",
                      background: "transparent",
                    }}
                    endIcon={<Radio />}
                    startIcon={<img src="./assets/meet.svg" />}
                  >
                    Add Google Meet
                  </Button>
                </div>
              </div>
              <div className="modal-row">
                <div className="left">
                  <FmdGoodOutlinedIcon
                    sx={{
                      color: "#8F95B2",
                      marginRight: "12px",
                      marginBottom: "-6px",
                    }}
                  />
                  Location
                </div>
                <div className="right">
                  <input type="text" placeholder="Add location" />
                </div>
              </div>
              <div className="modal-row">
                <div className="left">
                  <EventNoteOutlinedIcon
                    sx={{
                      color: "#8F95B2",
                      marginRight: "12px",
                      marginBottom: "-6px",
                    }}
                  />
                  Agenda
                </div>
                <div className="right">
                  <input type="text" placeholder="Add Agenda" />
                </div>
              </div>
              <div className="modal-row">
                <div className="left">
                  <DescriptionOutlinedIcon
                    sx={{
                      color: "#8F95B2",
                      marginRight: "12px",
                      marginBottom: "-6px",
                    }}
                  />
                  Description
                </div>
                <div className="right">
                  <textarea
                    name="description"
                    id="1"
                    cols={30}
                    rows={10}
                    placeholder="Add Description ....."
                  ></textarea>
                </div>
              </div>
              <div className="modal-row">
                <div className="left">
                  <GroupOutlinedIcon
                    sx={{
                      color: "#8F95B2",
                      marginRight: "12px",
                      marginBottom: "-6px",
                    }}
                  />
                  Organizer
                </div>
                <div
                  className="right"
                  style={{ color: "black", fontSize: "16px" }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="hello"
                    sx={{ marginRight: "20px", marginBottom: "-6px" }}
                  />{" "}
                  Johnny Dorvilien
                </div>
              </div>
              <div className="modal-row">
                <div className="left">
                  <AccessAlarmsOutlinedIcon
                    sx={{ color: "#8F95B2", marginRight: "12px" }}
                  />
                  Set Reminder
                </div>
                <div className="right">
                  <select name="selct" id="selct">
                    <option value="select">Select time frame</option>
                    <option value="option">option</option>
                  </select>{" "}
                </div>
              </div>

              <div className="modal-row">
                <div className="left">
                  <FormatListBulletedOutlinedIcon
                    sx={{ color: "#8F95B2", marginRight: "12px" }}
                  />
                  Meeting Tag color
                </div>
                <div className="right">
                  <select name="selct" id="selct">
                    <option value="select">Meeting Tag color</option>
                    <option value="option">option</option>
                  </select>{" "}
                </div>
              </div>

              <div className="btns">
                <Button
                  variant="outlined"
                  sx={{
                    border: "1px solid lightgray",
                    borderRadius: "8px",
                    color: "#333399",
                    background: "transparent",
                  }}
                  onClick={() => saveDetails()}
                >
                  Save as Draft
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    border: "1px solid #333399",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    background: "#333399",
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal open={scheduleTypeModal} onClose={handleCloseDrawer}>
        <div className="modal-section">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p className="modal-header">Choose a scheduling page type</p>
            <ClearIcon
              onClick={handleCloseDrawer}
              className="cursor-p"
              color="disabled"
            />
          </div>

          <div className="type-modal-main">
            <div className="model-card">
              <div onClick={handleSchedulePageClick}>
                <img src="/assets/single.svg" width={60} />
                <p className="head">One-on-One</p>
                <p className="sub">
                  Contacts can schedule a meeting with a single person
                </p>
              </div>
              <div onClick={handleSchedulePageClick}>
                <img src="/assets/grp.svg" width={80} />
                <p className="head">Group</p>
                <p className="sub">
                  {" "}
                  Contacts can schedule a meeting with a group
                </p>
              </div>
            </div>
            <p
              style={{
                color: "#8888FF",
                fontSize: "18px",
                textAlign: "right",
                marginTop: "10px",
              }}
            >
              View example use cases
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Schedule;
