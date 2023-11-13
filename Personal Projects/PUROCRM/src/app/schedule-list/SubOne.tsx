import { Button, MenuItem, TextField } from "@mui/material";
import React from "react";
const SubOne = () => {
  return (
    <div className="sub-one-main">
      <div>
        <p>Scheduling Title</p>
        <TextField placeholder="Meet with Johnny Darvillien" />
      </div>

      <div>
        <p>Duration Options</p>
        <TextField placeholder="Meet with Johnny Darvillien" select value={1}>
          <MenuItem value={1}>15 minutes</MenuItem>
        </TextField>
      </div>

      <div>
        <p>Select Timezone</p>
        <TextField placeholder="Meet with Johnny Darvillien" select value={1}>
          <MenuItem value={1}>UTC - 04:00 Eastern Time</MenuItem>
        </TextField>
      </div>

      <div className="last-one">
        <p>Availability Window</p>
        <div>
          <TextField placeholder="Meet with Johnny Darvillien" select value={1}>
            <MenuItem value={1}>Monday</MenuItem>
          </TextField>
          <p>from</p>
          <TextField placeholder="Meet with Johnny Darvillien" select value={1}>
            <MenuItem value={1}>09:00 AM</MenuItem>
          </TextField>
          <p>to</p>
          <TextField placeholder="Meet with Johnny Darvillien" select value={1}>
            <MenuItem value={1}>04:00 PM</MenuItem>
          </TextField>
          <img src="./assets/trash.png" width={30} />
        </div>
      </div>
      <p style={{ color: "#333399", marginBottom: "10px" }}>+ Add hours</p>

      <Button sx={{ color: "white", width: "30%" }}> Save Detail</Button>
    </div>
  );
};

export default SubOne;
