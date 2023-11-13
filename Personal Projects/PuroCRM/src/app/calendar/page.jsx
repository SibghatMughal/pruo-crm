"use client";

import React, { useState } from "react";
import Sidebar from "../../components/AdminPortal/Sidebar/Sidebar";
import Header from "../../components/AdminPortal/Header/Header";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import {
  Button,
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Modal,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ClearIcon from "@mui/icons-material/Clear";
import TaskDrawer from "./TaskDrawer";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
// import userIcon from '../../../public'
import "./calendar.scss";
import Eventdrawer from "./EventDrawer";
import DetailDrawer from "./DetailDrawer";
import { useRouter } from "next/navigation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};
const CalendarPage = () => {
  const [openSidebar, setOpenSidebar] = useState(true),
    [taskDrawer, setTaskDrawer] = useState(false),
    [eventDrawer, setEventDrawer] = useState(false),
    [detailDrawer, setDetailDrawer] = useState(false),
    [eventModal, setEventModal] = useState(false),
    router = useRouter();

  const handleCloseDrawer = () => {
    setTaskDrawer(false);
    setEventDrawer(false);
    setDetailDrawer(false);
    setEventModal(false);
  };
  return (
    <div>
      <div className="calendar-container">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <div
          className={`${
            openSidebar ? "right__container" : "closedRight__container"
          }`}
        >
          <div className={"rightSide"}>
            <Header />
            <div className="main">
              <h3>Calendar</h3>
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin]}
                initialView="timeGridWeek"
                dayHeaderFormat={{
                  weekday: "short",
                  day: "numeric",
                }}
                headerToolbar={{
                  left: "title",
                  center: "timeGridDay,timeGridWeek,dayGridMonth",
                  right: "newTask newEvent moreVert",
                }}
                customButtons={{
                  newTask: {
                    text: "New Task ",
                    click: (e) => setTaskDrawer(true),
                  },
                  newEvent: {
                    text: "New Event",
                    click: () => setEventDrawer(true),
                  },
                  moreVert: {
                    text: "...",
                    click: () => setDetailDrawer(true),
                  },
                  list: {
                    text: "list",
                    click: () => router.push("/calendar/list-view"),
                  },
                }}
                events={[
                  {
                    id: "a",
                    title: "my event blue",
                    start: "2023-10-23T09:00:00",
                    end: "2023-10-23T10:00:00",
                    color: "#cdf4ff",
                    borderColor: "#3f8cff",
                  },
                  {
                    id: "2",
                    title: "event pink",
                    color: "#ffebf6",
                    start: "2023-10-23T11:00:00",
                    end: "2023-10-23T12:00:00",
                    borderColor: "#ffa2c0",
                  },
                  {
                    id: "3",
                    title: "event pink",
                    color: "#f0effb",
                    start: "2023-10-24T11:00:00",
                    end: "2023-10-24T12:00:00",
                    borderColor: "#6c5dd3",
                  },
                ]}
                eventClick={(click) => setEventModal(true)}
                slotDuration="01:00:00"
                slotMinTime="09:00:00"
                slotMaxTime="23:00:00"
                allDaySlot={false}
                eventContent={(info) => {
                  console.log("info", info);
                  return (
                    <>
                      <div
                        style={{
                          borderRadius: "10px",
                          color: "#081735",
                          backgroundColor: info.backgroundColor,
                          height: "98%",
                          margin: "2px",
                          padding: "5px",
                          borderLeft: "3px solid",
                          borderLeftColor: info.borderColor,
                        }}
                      >
                        <p>{info.event._def.title}</p>
                        <p
                          style={{
                            lineHeight: 2,
                            color: info.borderColor,
                            fontWeight: "bold",
                          }}
                        >
                          {info.timeText}
                        </p>

                        <p
                          style={{
                            marginTop: "30px",
                          }}
                        >
                          others detail
                        </p>
                        {/* <p>{info.event._def.title?.split("-")[0]}</p>
                    <p>{info.event._def.title?.split("-")[1]}</p> */}
                      </div>
                    </>
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <TaskDrawer taskDrawer={taskDrawer} setTaskDrawer={handleCloseDrawer} />
      <Eventdrawer
        eventDrawer={eventDrawer}
        setEventDrawer={handleCloseDrawer}
      />
      <DetailDrawer
        detailDrawer={detailDrawer}
        setDetailDrawer={handleCloseDrawer}
      />

      <Modal open={eventModal} onClose={handleCloseDrawer}>
        <Box sx={style} className="event-modal-main">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <MoreVertIcon color="disabled" />
            <ClearIcon
              onClick={handleCloseDrawer}
              className="cursor-p"
              color="disabled"
            />
          </div>
          <div style={{ textAlign: "center", margin: "10px" }}>
            <img src="./assets/event-modal.png" width={80} />
            <p>Public Speaking Seminar</p>
            <div>
              <p
                style={{
                  backgroundColor: "#e5e5f6",
                  color: "#6969d0",
                  padding: "5px 15px",
                  borderRadius: "20px",
                  width: "fit-content",
                  margin: "10px auto",
                }}
              >
                All Day
              </p>
            </div>
          </div>

          <p style={{ color: "#8f95b2" }}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do
            eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim
            ad minim veniams.
          </p>

          <div className="event-modal-info">
            <div>
              <CalendarMonthOutlinedIcon color="primary" />
              <p>Start 10th Aug, 2023 - 10:00 AM</p>
            </div>
            <div>
              <CalendarMonthOutlinedIcon color="primary" />
              <p>End 10th Aug, 2023 - 12:00 PM</p>
            </div>

            <div>
              <FmdGoodOutlinedIcon color="primary" />
              <p>Meeting Room 3</p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CalendarPage;
