"use client";

import React, { useEffect } from "react";
import "./communication.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Home from "./Home";
import Message from "./Message";
import Insert from "./Insert";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Communication({ tab }: { tab: number }) {
  const [value, setValue] = React.useState(tab);

  useEffect(() => {
    setValue(tab);
  }, [tab]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="EmailSection">
      <div className="heading">Email</div>
      <div className="tabs">
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "transparent",
            background: "white",
            borderRadius: "5px",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Home"
              {...a11yProps(0)}
              sx={{ color: "black", fontWeight: "bold" }}
            />
            <Tab
              label="Message"
              {...a11yProps(1)}
              sx={{ color: "black", fontWeight: "bold" }}
            />
            <Tab
              label="Insert"
              {...a11yProps(2)}
              sx={{ color: "black", fontWeight: "bold" }}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Home />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Message />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Insert />
        </CustomTabPanel>
      </div>
    </div>
  );
}

export default Communication;
