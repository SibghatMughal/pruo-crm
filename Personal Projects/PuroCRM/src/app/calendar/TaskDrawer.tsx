import React, { ReactNode } from "react";
import Drawer from "@mui/material/Drawer";
import {
  Box,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
interface drawerProps {
  taskDrawer: boolean;
  setTaskDrawer: (event: React.MouseEvent) => void;
  children: ReactNode;
}
const TaskDrawer = ({ taskDrawer, setTaskDrawer }: drawerProps) => {
  return (
    <Drawer
      open={taskDrawer}
      onClose={setTaskDrawer}
      anchor="right"
      className="drawer-main"
    >
      <Box sx={{ width: 750 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="20px"
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
            {" "}
            Create New Task
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
              Save Task
            </Button>
            <ClearIcon className="cursor-p" onClick={setTaskDrawer} />
          </Box>
        </Box>
        <hr
          style={{ borderTop: "1px solid lightgray", borderBottom: "none" }}
        />

        <Box padding="40px">
          <Typography>Task title</Typography>
          <TextField
            placeholder="Reach out to the micro influncer"
            sx={{ width: "100%" }}
          />

          <Typography sx={{ marginTop: "10px" }}>Task Description</Typography>
          <TextField
            placeholder="Start the initial marketting compaign for the launch"
            sx={{ width: "100%" }}
          />

          <Box
            display="flex"
            flexDirection="column"
            gap="10px"
            padding="20px 0"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              width="60%"
              alignItems="center"
            >
              <Typography sx={{ fontWeight: "600", color: "#081735" }}>
                Assigned by
              </Typography>
              <Select value="1">
                <MenuItem
                  value="1"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <img src="./assets/user.png" />
                  <p>Johnny Dorvilien</p>
                </MenuItem>
              </Select>
            </Box>
            <Box display="flex" justifyContent="space-between" width="60%">
              <Typography sx={{ fontWeight: "600", color: "#081735" }}>
                Assigned to
              </Typography>
              <Select value="1">
                <MenuItem
                  value="1"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <img src="./assets/user.png" />
                  shanze Gillani
                </MenuItem>
              </Select>
            </Box>
            <Box display="flex" justifyContent="space-between" width="60%">
              <Typography sx={{ fontWeight: "600", color: "#081735" }}>
                Status
              </Typography>
              <Select value="1">
                <MenuItem
                  value="1"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {/* <div style={}></div> */}
                  Pending
                </MenuItem>
              </Select>
            </Box>

            <Box display="flex" justifyContent="space-between" width="60%">
              <Typography sx={{ fontWeight: "600", color: "#081735" }}>
                Due Date
              </Typography>
              <Select value="1">
                <MenuItem
                  value="1"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {/* <div style={}></div> */}
                  10th Aug, 2023
                </MenuItem>
              </Select>
            </Box>

            <Box display="flex" justifyContent="space-between" width="60%">
              <Typography sx={{ fontWeight: "600", color: "#081735" }}>
                Category
              </Typography>
              <Select value="1">
                <MenuItem
                  value="1"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {/* <div style={}></div> */}
                  Marketing
                </MenuItem>
              </Select>
            </Box>

            <Box display="flex" justifyContent="space-between" width="60%">
              <Typography sx={{ fontWeight: "600", color: "#081735" }}>
                Card Color
              </Typography>
              <Select value="1">
                <MenuItem
                  value="1"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {/* <div style={}></div> */}
                  <div
                    style={{
                      width: "60px",
                      borderRadius: "8px",
                      height: "25px",
                      background: "#FF7971",
                    }}
                  ></div>
                </MenuItem>
              </Select>
            </Box>
            <p style={{ fontWeight: "bold" }}>subtask</p>

            <div className="subtask-main">
              <img src="./assets/reply.png" />

              <div className="subtask-card">
                <div className="row-1">
                  <div className="no">1</div>
                  <p className="head">Reach out to local micro influencers</p>
                  <p className="status">Complete</p>
                </div>
                <p className="row-2">
                  Start the initial marketi ng campaign for the launch of the
                  book and contact the micro influencers have. Start the initial
                  marketing campaign for the launch of the book and contact the
                  micro influencers have.{" "}
                </p>
                <div className="row-3">
                  <div className="left">
                    <p>Assigned to</p>
                    <div>
                      {" "}
                      <img src="./assets/user.png" alt="" /> <p>shanze gill</p>{" "}
                    </div>
                  </div>

                  <div className="left">
                    <p>Due Date</p>
                    <div>
                      {" "}
                      <p>Today - 28 Aug, 2023 </p>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{ color: "#333399", padding: "10px 0" }}
              className="cursor-p"
            >
              + Add a new subtask
            </div>

            <p style={{ fontWeight: "bold" }}>Attachments</p>

            <div className="drawer-attachment-main">
              <div className="row1">
                <div className="row1-img">
                  {" "}
                  <img src="./assets/clip.png" />
                </div>
                <div className="row1-txt">
                  <p className="name">Supporting Document</p>
                  <p className="size">4 MB . Uploaded on 26 Aug, 2023</p>
                </div>
              </div>
            </div>
            <hr
              style={{ borderTop: "1px solid lightgray", borderBottom: "none" }}
            />

            <div className="add-attachment">Browse files or drag to upload</div>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default TaskDrawer;
