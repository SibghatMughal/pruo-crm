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
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
interface drawerProps {
  detailDrawer: boolean;
  setDetailDrawer: (event: React.MouseEvent) => void;
}
const DetailDrawer = ({ detailDrawer, setDetailDrawer }: drawerProps) => {
  return (
    <Drawer
      open={detailDrawer}
      onClose={setDetailDrawer}
      anchor="right"
      className="drawer-main"
    >
      <Box sx={{ width: 650 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="20px 10px"
        >
          <div className="headbar">
            <CheckCircleOutlineOutlinedIcon />
            <p>Mark Complete</p>
          </div>
          <Box display="flex" gap={2} alignItems="center">
            <ColorLensOutlinedIcon color="primary" />

            <ClearIcon className="cursor-p" onClick={setDetailDrawer} />
          </Box>
        </Box>
        <hr />

        <Box padding="20px">
          <div className="event-drawer-heading">
            <h3>Reach out to local micro influencers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>

          <Box
            display="flex"
            flexDirection="column"
            gap="10px"
            padding="20px 0"
          >
            <Box display="flex" width="60%" alignItems="center">
              <Typography width="50%">Assigned by</Typography>
              <div style={{ display: "flex", gap: "5px" }}>
                <img src="./assets/user.png" />
                <p>Johnny Dorvilien</p>
              </div>
            </Box>
            <Box display="flex" width="60%">
              <Typography width="50%">Assigned to</Typography>
              <div style={{ display: "flex", gap: "5px" }}>
                <img src="./assets/user.png" />
                shanze Gillani
              </div>
            </Box>
            <Box display="flex" width="60%">
              <Typography width="50%">Status</Typography>
              <Typography
                sx={{
                  background: "#fcf3e1",
                  padding: "2px 10px",
                  fontSize: "14px",
                  color: "#ECAD34",
                  borderRadius: "20px",
                }}
              >
                In progress
              </Typography>
            </Box>

            <Box display="flex" width="60%">
              <Typography width="50%">Due Date</Typography>
              <Typography>10th Aug, 2023</Typography>
            </Box>

            <Box display="flex" width="60%">
              <Typography width="50%">Category</Typography>
              <Typography>Marketing</Typography>
            </Box>

            <p>subtask</p>

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
            <div className="subtask-main">
              <img src="./assets/reply.png" />

              <div className="subtask-card">
                <div className="row-1">
                  <div className="no">1</div>
                  <p className="head">Reach out to local micro influencers</p>
                  <p className="status-pending">In progress</p>
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

            <div className="subtask-main">
              <img src="./assets/reply.png" />

              <div className="subtask-card">
                <div className="row-1">
                  <div className="no">1</div>
                  <p className="head">Reach out to local micro influencers</p>
                  <p className="status-not">Not started</p>
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

            <p>Attachments</p>

            <div className="drawer-attachment-main">
              <div className="row1">
                <div className="row1-img">
                  {" "}
                  <img src="./assets/clip.png" />
                </div>
                <div className="row1-txt">
                  <p>Supporting Document</p>
                  <p>4 MB . Uploaded on 26 Aug, 2023</p>
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default DetailDrawer;
