"use client";

import React, { useState } from "react";
import Sidebar from "../../../components/AdminPortal/Sidebar/Sidebar";
import Header from "../../../components/AdminPortal/Header/Header";
// import userIcon from '../../../public'
import "../calendar.scss";
import "./list.scss";
import { useRouter } from "next/navigation";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
import {
  Button,
  InputAdornment,
  MenuItem,
  Pagination,
  PaginationItem,
  Select,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import { ProgressBar } from "primereact/progressbar";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import DetailDrawer from "../DetailDrawer";

const ListView = () => {
  const [openSidebar, setOpenSidebar] = useState(true),
    [detailDrawer, setDetailDrawer] = useState(false),
    [selectedTab, setSetectedTab] = useState(1),
    [events, setEvents] = useState([
      {
        id: 1000,
        name: "James Butt",
        country: {
          name: "Algeria",
          code: "dz",
        },
        company: "Benton, John B Jr",
        date: "2015-09-13",
        status: "unqualified",
        verified: true,
        activity: 17,
        representative: {
          name: "Ioni Bowcher",
          image: "ionibowcher.png",
        },
        balance: 70663,
      },
    ]),
    router = useRouter();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#f5f5fa",
      color: "#818185",
      fontWeight: "500",
      padding: "10px 20px",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12,
      // borderCollapse: "separate",
      borderTop: "1px solid lightgray",
      color: "#8181A5",
    },
    "&:first-child": {
      borderRadius: "10px 0 0 10px",
      borderLeft: "1px solid lightgray",
    },
    "&:last-child": {
      borderRadius: "0 10px 10px 0",
      borderRight: "1px solid lightgray",
    },
  }));

  const CustomPagination = styled(Pagination)(({ theme }) => ({
    "& .MuiPaginationItem-root": {
      backgroundColor: "#f5f5fa",
      borderRadius: 4,
      "&:hover": {
        backgroundColor: "#eff3fe",
        borderBottom: "2px solid #333399",
      },
    },
    "& .Mui-selected": {
      backgroundColor: "#eff3fe",
      borderBottom: "2px solid #333399",
      color: "#333399",
      fontWeight: "600",
    },
    "& li:first-child": {
      marginRight: "auto",
    },
    "& li:last-child": {
      marginLeft: "auto",
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // hide last border
    "&:last-child td, &:last-child th": {
      // border: 0,
    },
  }));

  function createData(
    name: string,
    due_date: string,
    detail: string,
    progress: string,
    status: string
  ) {
    return { name, due_date, detail, progress, status };
  }

  const rows = [
    createData(
      "Prepare Speaking Content",
      "07-08-2023",
      "0/3",
      "30",
      "In Review"
    ),
    createData(
      "Prepare Speaking Content",
      "07-08-2023",
      "0/3",
      "30",
      "Completed"
    ),
    createData(
      "Prepare Speaking Content",
      "07-08-2023",
      "0/3",
      "30",
      "In Review"
    ),
    createData(
      "Prepare Speaking Content",
      "07-08-2023",
      "0/3",
      "30",
      "In Review"
    ),
    createData(
      "Prepare Speaking Content",
      "07-08-2023",
      "0/3",
      "30",
      "In Progress"
    ),
  ];
  const statusOptions: any = {
    Completed: { bg: "#e2f6e2", color: "#3fbe3c" },
    "In Review": { bg: "#e1effc", color: "#3494ec" },
    "In Progress": { bg: "#fff1dc", color: "#f88720" },
  };
  const handleCloseDrawer = () => {
      setDetailDrawer(false);
    },
    handleTabChange = (event: any, v: number) => setSetectedTab(v),
    ArrowBackIcon = () => (
      <div
        style={{ padding: "5px 10px", color: "#8181a5", fontWeight: "bold" }}
      >
        {" "}
        {"<"} PREV
      </div>
    ),
    ArrowForwardIcon = () => (
      <div
        style={{ padding: "5px 10px", color: "#8181a5", fontWeight: "bold" }}
      >
        {" "}
        Next {">"}
      </div>
    );
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
              My Calendar
              <div className="list-view-main">
                <div className="tabs-main">
                  <Tabs value={selectedTab} onChange={handleTabChange}>
                    <Tab value={1} label="Tasks" />
                    <Tab value={2} label="Events" />
                  </Tabs>
                  <Button variant="contained" className="new-task-btn">
                    + Create new task
                  </Button>
                </div>

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

                  <Select
                    value={1}
                    sx={{
                      height: "40px",
                      color: "gray",
                      width: "20%",
                      borderRadius: "10px",
                    }}
                  >
                    <MenuItem value={1}>Show completed tasks</MenuItem>
                  </Select>
                </div>

                <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell sx={{ minWidth: 150 }}>
                          Task Name
                        </StyledTableCell>
                        <StyledTableCell>Due Date</StyledTableCell>
                        <StyledTableCell>Detail</StyledTableCell>
                        <StyledTableCell>Progress</StyledTableCell>
                        <StyledTableCell>Status</StyledTableCell>
                        <StyledTableCell align="right">
                          Assignee
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            sx={{
                              color: "#333399",
                              // fontSize: "14px !important",
                              fontWeight: "600",
                              width: "250px",
                            }}
                          >
                            <p
                              className="cursor-p"
                              onClick={() => setDetailDrawer(true)}
                              style={{
                                color: "#333399",
                                fontWeight: "bold",
                                fontSize: "medium",
                              }}
                            >
                              {" "}
                              {row.name}
                            </p>
                          </StyledTableCell>
                          <StyledTableCell sx={{ fontSize: "14px !important" }}>
                            {row.due_date}
                          </StyledTableCell>
                          <StyledTableCell>
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                                // justifyContent: "right",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "5px",
                                }}
                              >
                                <img src="/assets/checklist.svg" />
                                <p>{row.detail}</p>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "5px",
                                }}
                              >
                                <img src="/assets/clip.svg" />
                                <p>5</p>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "5px",
                                }}
                              >
                                <img src="/assets/person.svg" />
                                <p>5</p>
                              </div>
                            </div>
                          </StyledTableCell>
                          <StyledTableCell sx={{ width: "200px" }}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                              }}
                            >
                              <ProgressBar
                                style={{
                                  height: "6px",
                                  width: "60%",
                                }}
                                color="#333399"
                                value={row.progress}
                                showValue={false}
                              />
                              <p>{row.progress} %</p>
                            </div>
                          </StyledTableCell>
                          <StyledTableCell>
                            <p
                              style={{
                                backgroundColor: statusOptions[row.status].bg,
                                color: statusOptions[row.status].color,
                                textAlign: "center",
                                borderRadius: "20px",
                                padding: "5px 0",
                                fontSize: "medium !important",
                                fontWeight: "bold",
                              }}
                            >
                              {row.status}
                            </p>
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            <img src="/assets/user.png" width={35} />
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <div className="list-pagination">
                  {" "}
                  <CustomPagination
                    count={5}
                    shape="rounded"
                    renderItem={(item) => (
                      <PaginationItem
                        slots={{
                          previous: ArrowBackIcon,
                          next: ArrowForwardIcon,
                        }}
                        {...item}
                      />
                    )}
                    // hidePrevButton
                    // hideNextButton
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DetailDrawer
        detailDrawer={detailDrawer}
        setDetailDrawer={handleCloseDrawer}
      />
    </div>
  );
};

export default ListView;
