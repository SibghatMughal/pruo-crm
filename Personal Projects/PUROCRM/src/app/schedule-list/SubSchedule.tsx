import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Switch,
  Tab,
  Tabs,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import SubOne from "./SubOne";
import SubForm from "./SubForm";
import SubConfirm from "./SubConfirm";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const subTabOpen: any = {
  1: <SubOne />,
  2: <SubForm />,
  3: <SubConfirm />,
};
const SubSchedule = () => {
  const [subTab, setSubTab] = useState(3);
  const handleSubTab = (event: any, v: number) => setSubTab(v);

  const StyledRadio = styled(Radio)`
    &.Mui-checked {
      color: #333399;
    }
  `;

  const StyledRadioGroup = styled(RadioGroup)`
    display: flex;
    flex-direction: column;
  `;

  const StyledFormControlLabel = styled(FormControlLabel)`
    &.MuiFormControlLabel-root {
      border: 2px solid #333399;
      border-radius: 10px;
      background-color: #fff;
      margin: 5px;
      padding: 5px;
      transition: all 0.3s;
    }
  `;

  return (
    <div className="sub-schedule-main">
      <div className="sub-left">
        <p className="head-color">Scheduling Link</p>
        <div className="link">
          https://us05web.zoom.us/meeting?_x_zm_rtaid=1NWd0qObS0qhn7vW...
        </div>
        <div className="pay-check">
          <p>
            Collect Payments{" "}
            <span>
              (Attendees will be asked to pay after they choose a time)
            </span>
          </p>
          <Switch defaultChecked />
        </div>

        <Tabs value={subTab} onChange={handleSubTab}>
          <Tab value={1} label="Schedule" />
          <Tab value={2} label="Form" />
          <Tab value={3} label="Confirmation" />
        </Tabs>

        {subTabOpen[subTab]}
      </div>
      <div className="sub-right">
        {subTab === 2 ? (
          <div className="right-one">
            <div className="top">
              <img src="/assets/no_user.svg" width={60} />
              <p className="head-one">Enter Your Information</p>
              <p className="head-one">Tuesday, Aug 22, 2023 6:21 PM</p>
              <div className="form-fields">
                <div>
                  <p>First Name *</p>
                  <input />
                </div>
                <div>
                  <p>Last Name *</p>
                  <input />{" "}
                </div>
                <div>
                  <p>Email Address *</p>
                  <input />{" "}
                </div>
                <div>
                  <p>Mobile Phone Number *</p>
                  <input />{" "}
                </div>

                <Button className="one-btn">Confirm</Button>
              </div>
            </div>
          </div>
        ) : subTab === 1 ? (
          <div className="right-form">
            <div className="date-side">
              <div className="top-date">
                <img src="./assets/user.png" width={50} />
                <p>Meet with Johnny Darvillien</p>
              </div>
              <p>Select a Date</p>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
            </div>
            <div className="time-side">
              <h4 style={{ marginBottom: "15px" }}>Select Time</h4>

              <h5>Friday, September 2</h5>

              <div className="time-slots">
                <StyledRadioGroup>
                  <StyledFormControlLabel
                    value="09:00"
                    control={
                      <StyledRadio
                        checkedIcon={<CheckCircleIcon color="primary" />}
                      />
                    }
                    label="09:00 am"
                    labelPlacement="start"
                  />
                  <StyledFormControlLabel
                    value="09:15"
                    control={
                      <StyledRadio
                        checkedIcon={<CheckCircleIcon color="primary" />}
                      />
                    }
                    label="09:15 am"
                    labelPlacement="start"
                  />
                  <StyledFormControlLabel
                    value="09:30"
                    control={
                      <StyledRadio
                        checkedIcon={<CheckCircleIcon color="primary" />}
                      />
                    }
                    label="09:30 am"
                    labelPlacement="start"
                  />
                  <StyledFormControlLabel
                    value="09:45"
                    control={
                      <StyledRadio
                        checkedIcon={<CheckCircleIcon color="primary" />}
                      />
                    }
                    label="09:45 am"
                    labelPlacement="start"
                  />
                  <StyledFormControlLabel
                    value="10:00"
                    control={
                      <StyledRadio
                        checkedIcon={<CheckCircleIcon color="primary" />}
                      />
                    }
                    label="10:00 am"
                    labelPlacement="start"
                  />
                  <StyledFormControlLabel
                    value="10:15"
                    control={
                      <StyledRadio
                        checkedIcon={<CheckCircleIcon color="primary" />}
                      />
                    }
                    label="10:15 am"
                    labelPlacement="start"
                  />
                </StyledRadioGroup>
              </div>
            </div>
          </div>
        ) : (
          <div className="right-confirm">
            <img src="/assets/tick.svg" width={60} />
            <h2>Booking Confirmed! 🎉</h2>
            <p className="para">
              Your booking with Darvellian has been confirmed. An invitation has
              been emailed to you.
            </p>
            <div style={{ textAlign: "center" }}>
              <h4>August 22, 2023 </h4>
              <h4>6:25 PM</h4>
            </div>

            <div className="link">
              https://us05web.zoom.us/meeting?_x_zm_rtaid=1NWd0qObS0qhn7vW...
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubSchedule;
