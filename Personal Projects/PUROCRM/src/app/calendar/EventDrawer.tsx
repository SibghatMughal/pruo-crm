import React, { ReactNode } from "react";
import Drawer from "@mui/material/Drawer";
import {
  Box,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
  Checkbox,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
interface drawerProps {
  eventDrawer: boolean;
  setEventDrawer: (event: React.MouseEvent) => void;
  children: ReactNode;
}
const EventDrawer = ({ eventDrawer, setEventDrawer }: drawerProps) => {
  return (
    <Drawer
      open={eventDrawer}
      onClose={setEventDrawer}
      anchor="right"
      className="drawer-main"
    >
      <Box sx={{ width: 850 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="20px"
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
            {" "}
            Create New Event
          </Typography>
          <Box display="flex" gap={2} alignItems="center">
            <Button
              sx={{
                background: "#333399",
                padding: "14px 30px",
                borderRadius: "8px",
              }}
              variant="contained"
            >
              Save Event
            </Button>
            <ClearIcon className="cursor-p" onClick={setEventDrawer} />
          </Box>
        </Box>
        <hr
          style={{ borderTop: "1px solid lightgray", borderBottom: "none" }}
        />

        <Box padding="20px 40px ">
          <Typography>Event Name *</Typography>
          <TextField
            placeholder="Reach out to the micro influncer"
            sx={{ width: "100%", marginTop: "10px" }}
          />

          <Typography sx={{ marginTop: "20px" }}>Event Description</Typography>
          <TextField
            placeholder="Start the initial marketting compaign for the launch"
            sx={{ width: "100%", marginTop: "10px" }}
          />

          <Typography sx={{ marginTop: "20px" }}>Event Location</Typography>
          <TextField
            placeholder="Meeting Room 3"
            sx={{ width: "100%", marginTop: "10px" }}
          />
        </Box>

        <Box padding="20px 40px">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              sx={{ paddingLeft: "0" }}
              defaultChecked={true}
              value="All day"
            />{" "}
            <p>All day</p>
          </div>

          <div className="event-slot-main">
            <div className="row-slot">
              <div className="event-date">
                <Typography>Event Start Date *</Typography>
                <Select value="1">
                  <MenuItem value="1">10th Aug, 2023</MenuItem>
                </Select>
              </div>
              <div className="event-time">
                <Typography>Event Start Time *</Typography>
                <Select value="1">
                  <MenuItem value="1">10:00 Am</MenuItem>
                </Select>
              </div>
            </div>
            <div className="row-slot">
              <div className="event-date">
                <Typography>Event End Date *</Typography>
                <Select value="1">
                  <MenuItem value="1">10th Aug, 2023</MenuItem>
                </Select>
              </div>
              <div className="event-time">
                <Typography>Event End Time *</Typography>
                <Select value="1">
                  <MenuItem value="1">12:00 Am</MenuItem>
                </Select>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </Drawer>
  );
};

export default EventDrawer;
