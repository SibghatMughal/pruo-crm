import {
  Button,
  Checkbox,
  Pagination,
  PaginationItem,
  Paper,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";
import { Modal, Box, Divider, Avatar } from "@mui/material";
import React, { useRef, useState } from "react";
import MoreVert from "@mui/icons-material/MoreVert";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ClearIcon from "@mui/icons-material/Clear";
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
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const MeetingGrid = ({ openDrawer }: any) => {
  const [scheduleModal, setScheduleModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [detailDrawer, setDetailDrawer] = useState(false);

  const handleCloseDrawer = () => {
    setDetailDrawer(false);
    setScheduleModal(false);
  };

  const handleCloseSuccessModal = () => {
    setSuccessModal(false);
  };
  const ref = useRef(null);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>, name: string) => {
    setAnchorEl(ref.current);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
      "&:first-child": {
        borderRadius: "10px 0 0 10px",
        borderLeft: "1px solid lightgray",
      },
      "&:last-child": {
        borderRadius: "0 10px 10px 0",
        borderRight: "1px solid lightgray",
      },
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
      backgroundColor: "#eff3fe !important",
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
  function createData(name: string, date: string, time: string, link: string) {
    return { name, date, time, link };
  }

  const rows = [
    createData(
      "Sales Training",
      "25 August",
      "9AM - 10AM",
      "https://us05web.zoom.us/meeting?=1NWd0qObS0..."
    ),
    createData(
      "Quarterly Sales Meeting",
      "25 August",
      "9AM - 10AM",
      "https://us05web.zoom.us/meeting?=1NWd0qObS0..."
    ),
    createData(
      "Call with Jonny",
      "25 August",
      "9AM - 10AM",
      "https://us05web.zoom.us/meeting?=1NWd0qObS0..."
    ),
    createData(
      "HR Training Session",
      "25 August",
      "9AM - 10AM",
      "https://us05web.zoom.us/meeting?=1NWd0qObS0..."
    ),
    createData(
      "Call with Jonny",
      "25 August",
      "9AM - 10AM",
      "https://us05web.zoom.us/meeting?=1NWd0qObS0..."
    ),
  ];
  const ArrowBackIcon = () => (
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
  const saveDetails = () => {
    setScheduleModal(false);
    setSuccessModal(true);
  };
  return (
    <>
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ minWidth: 150 }}>
                Meeting Time
              </StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Time</StyledTableCell>
              <StyledTableCell align="center">Start</StyledTableCell>
              <StyledTableCell>Meeting Page</StyledTableCell>
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
                    fontSize: "14px",
                    fontWeight: "600",
                    width: "350px",
                    // borderTop: "1px solid lightgray",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p
                      className="cursor-p"
                      onClick={openDrawer}
                      style={{ color: "#333399" }}
                    >
                      {row.name}
                    </p>
                    <Button
                      variant="contained"
                      sx={{
                        background: "#333399",
                        fontSize: "12px",
                        padding: "5px 15px",
                        borderRadius: "10px",
                      }}
                      onClick={() => setScheduleModal(true)}
                    >
                      View Details
                    </Button>
                  </div>
                </StyledTableCell>
                <StyledTableCell>{row.date}</StyledTableCell>
                <StyledTableCell>{row.time}</StyledTableCell>
                <StyledTableCell sx={{ width: "200px" }} align="center">
                  <Button
                    variant="contained"
                    sx={{
                      background: "#333399",
                      fontSize: "12px",
                      padding: "5px 20px",
                      borderRadius: "10px",
                    }}
                    onClick={() => saveDetails()}
                  >
                    Start
                  </Button>
                </StyledTableCell>
                <StyledTableCell>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <p>{row.link}</p>
                      <p
                        style={{
                          display: "flex",
                          marginTop: "5px",
                          gap: "3px",
                        }}
                      >
                        <ContentCopyIcon fontSize="small" /> copy link
                      </p>
                    </div>

                    <MoreVert
                      sx={{ color: "#333399", cursor: "pointer" }}
                      onClick={(e: any) => handleClick(e, row.name)}
                      ref={ref}
                    />
                    <StyledMenu
                      anchorEl={anchorEl} // Make sure this points to the MoreVert icon
                      open={open}
                      onClose={handleClose}
                    >
                      <MenuItem
                        onClick={handleClose}
                        disableRipple
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#2C3E50",
                        }}
                      >
                        Edit meeting
                      </MenuItem>
                      <Divider />

                      <MenuItem
                        onClick={handleClose}
                        disableRipple
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#2C3E50",
                        }}
                      >
                        Share
                      </MenuItem>
                      <Divider />
                      <MenuItem
                        onClick={handleClose}
                        disableRipple
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#2C3E50",
                        }}
                      >
                        Invite others
                      </MenuItem>
                      <Divider />
                      <MenuItem
                        onClick={handleClose}
                        disableRipple
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#2C3E50",
                        }}
                      >
                        Cancel
                      </MenuItem>
                      <Divider />
                      <MenuItem
                        onClick={handleClose}
                        disableRipple
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#2C3E50",
                        }}
                      >
                        Send a reminder
                      </MenuItem>
                    </StyledMenu>
                  </div>
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
      <Modal open={scheduleModal} onClose={handleCloseDrawer}>
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p className="modal-header">Sales Meeting Urgent</p>
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
                <div className="right">
                  Monday, 23rd August, 2023 (Eastern Standard Time)
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
                <div className="right">shanze@email.com, johnny@email.com</div>
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
                <div className="right confrence">
                  <Button
                    variant="outlined"
                    sx={{
                      border: "1px solid #333399",
                      borderRadius: "8px",
                      color: "#333399",
                      background: "transparent",
                    }}
                    startIcon={<img src="./assets/zoom.svg" />}
                  >
                    Join with Zoom
                  </Button>
                  <div>meeting.zoom/johnny-15min-discovery/rrj-pd </div>
                  <div>Join by phone: +1 669-241-0120 Pin: 1678527</div>
                </div>
              </div>
              <Divider />
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
                <div className="right">
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
                  <Person2OutlinedIcon
                    sx={{ color: "#8F95B2", marginRight: "12px" }}
                  />
                  Attendees
                </div>
                <div className="right">
                  <Avatar
                    alt="Remy Sharp"
                    src="hello"
                    sx={{ marginRight: "20px" }}
                  />{" "}
                  Shanze Gillani
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>

      {/* succes modal  */}
      <Modal open={successModal} onClose={handleCloseSuccessModal}>
        <div
          className="modal-section"
          style={{ width: "450px", height: "auto" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p className="modal-header">Add Title</p>
            <ClearIcon
              onClick={handleCloseSuccessModal}
              className="cursor-p"
              color="disabled"
            />
          </div>

          <div>
            <div className="modal-content">
              <div className="succesmodal">
                <div className="icon">
                  <DoneOutlinedIcon
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "30px",
                    }}
                  />
                </div>
                <div className="heading">
                  New Activity Added Successfully! 🎉
                </div>
                <div className="subheading">
                  Great Job! The meeting has been sent and you can find the new
                  meeting added in your Calendar
                </div>

                <Button
                  variant="outlined"
                  sx={{
                    border: "1px solid #333399",
                    borderRadius: "8px",
                    color: "#333399",
                    background: "transparent",
                    width: "100%",
                  }}
                  onClick={() => setSuccessModal(false)}
                >
                  Done
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MeetingGrid;
