import {
  AddAPhoto,
  HdrPlus,
  Home,
  People,
  SportsFootball,
} from "@mui/icons-material";
import Checkbox from '@mui/material/Checkbox';
import {
  Card,
  Divider,
  Modal,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Box,
  Radio,
} from "@mui/material";
import React, { useState } from "react";

function SideBar({ HeroSection }) {
  const cardStyles = {
    padding: "12px",
    width: "500px",
    height: "auto",
    background: "rgb(33, 55, 68)",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const labelStyle = {
    color: 'white',
    fontWeight:'bolder',
    fontSize:'22px'
  };

  const selectStyle = {
    border: '2px solid rgba(255,255,255,0.2)',
    color:'white',
    fontWeight:'bold',
    fontSize:'18px',
    height:'35px',
    width:'100%'
  };

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = ["Step 1", "Step 2", "Step 3"];

  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");

  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleOption3Change = (event) => {
    setSelectedOption3(event.target.value);
  };

  return (
    <>
      {HeroSection?.map((match) => {
        return (
          <>
            <div className="sideBar">
              <div className="heading">{match.heading}</div>
              <div className="main">
                <div className="icon">
                  <Home
                    sx={{ fontSize: 40, marginBottom: "8px", color: "#b1bad2" }}
                  />
                </div>
                <div className="text">{match?.mainHeading}</div>
                <div className="subText">{match?.subHeading}</div>
                {match?.buttonText ? (
                  <button onClick={() => handleOpen()}>
                    {match?.buttonText}
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div style={{ margin: "14px 0px", borderTop: "1px solid #33434f" }}></div>
          </>
        );
      })}
      <div className="bottomSection">
        <div className="heading">YOUR TEAMS</div>
        <div className="teamHeading">
          <div className="icon">+</div>
          <div className="text">Create Team</div>
        </div>
        <div className="teamHeading">
          <div className="icon">
            <People />
          </div>
          <div className="text">Your Team</div>
        </div>
        <footer>
          <button>
            <AddAPhoto sx={{ marginRight: "10px" }} /> Add Funds
          </button>
        </footer>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow:"scroll"
        }}
      >
        <div className="modal">
          <div className="remove" onClick={handleClose}>
            ×
          </div>
          <Card sx={cardStyles}>
            <div className="modal-header">
              <div className="title">
                <SportsFootball
                  sx={{ color: "white", fontSize: "30px", marginRight: "10px" }}
                />
                FIFA 23
              </div>
              <div className="subheading">Create Match</div>
              <Box sx={{ minWidth: '100%',marginTop:'15px',marginBottom:'15px'}}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
            </div>
           
           
<div className="general">
  <div className="modal-main">General</div>
  <div className="modal-sub">Basic information about your match</div>
</div>

<div className="checked">
  <Checkbox sx={{color:'white',fontWeight:'bold',fontSize:'22px'}}/> Private Match (you are inviting your opponent)
</div>

<div className="plateform" style={{width:'100%'}}>
  <div className="modal-main">Plateform</div>
  <Card
      sx={{
        padding: "5px",
        display: "flex",
        alignItems: "center",
        marginBottom:'12px',
        marginTop:'12px',
        background: "transparent",
        border:'1px solid rgba(0,0,0,0.5)',
     
      }}
    >
      <div style={{display:'flex',alignItems:'center',gap:'12px',width:'100%'}}>
        <Radio sx={{color:'white',background:'transparent'}}/>
        <div style={{display:'flex',justifyContent:"center",flexDirection:'column'}}>
           <div className="modal-main">Cruunt genCrossplay</div>
           <div className="modal-sub">PS5 , XBOX , PC</div>

        </div>
      </div>
      
    </Card>
    <Card
      sx={{
        padding: "5px",
        display: "flex",
        alignItems: "center",
        marginBottom:'12px',
        marginTop:'12px',
        background: "transparent",
        border:'1px solid rgba(0,0,0,0.5)',
     
      }}
    >
      <div style={{display:'flex',alignItems:'center',gap:'12px',width:'100%'}}>
        <Radio sx={{color:'white',background:'transparent'}}/>
        <div style={{display:'flex',justifyContent:"center",flexDirection:'column'}}>
           <div className="modal-main">Cruunt genCrossplay</div>
           <div className="modal-sub">PS5 , XBOX , PC</div>

        </div>
      </div>
      
    </Card>
</div>
<div className="plateform" style={{width:'100%'}}>
  <div className="modal-main">Games Mode</div>
  <Card
      sx={{
        padding: "5px",
        display: "flex",
        alignItems: "center",
        marginBottom:'12px',
        marginTop:'12px',
        background: "transparent",
        border:'1px solid rgba(0,0,0,0.5)',
     
      }}
    >
      <div style={{display:'flex',alignItems:'center',gap:'12px',width:'100%'}}>
        <Radio sx={{color:'white',background:'transparent'}}/>
        <div style={{display:'flex',justifyContent:"center",flexDirection:'column'}}>
           <div className="modal-main">Cruunt genCrossplay</div>
           <div className="modal-sub">PS5 , XBOX , PC</div>

        </div>
      </div>
      
    </Card>
    <Card
      sx={{
        padding: "5px",
        display: "flex",
        alignItems: "center",
        marginBottom:'12px',
        marginTop:'12px',
        background: "transparent",
        border:'1px solid rgba(0,0,0,0.5)',
     
      }}
    >
      <div style={{display:'flex',alignItems:'center',gap:'12px',width:'100%'}}>
        <Radio sx={{color:'white',background:'transparent'}}/>
        <div style={{display:'flex',justifyContent:"center",flexDirection:'column'}}>
           <div className="modal-main">Cruunt genCrossplay</div>
           <div className="modal-sub">PS5 , XBOX , PC</div>

        </div>
      </div>
      
    </Card>
</div>

   <div className="inputs" style={{width:'100%'}}>
   <div style={{marginBottom:'15px'}}>
      <Typography variant="h6" gutterBottom style={labelStyle}>
        Game Mode
      </Typography>
      <Select
        id="select"
        value={selectedValue}
        onChange={handleChange}
        fullWidth
        style={selectStyle}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    </div>
    <div style={{marginBottom:'15px'}}>
      <Typography variant="h6" gutterBottom style={labelStyle}>
        Region
      </Typography>
      <Select
        id="select"
        value={selectedValue}
        onChange={handleChange}
        fullWidth
        style={selectStyle}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    </div>
    <div style={{marginBottom:'15px'}}>
      <Typography variant="h6" gutterBottom style={labelStyle}>
        Best of
      </Typography>
      <Select
        id="select"
        value={selectedValue}
        onChange={handleChange}
        fullWidth
        style={selectStyle}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    </div>




   </div>

   <div className="submit" style={{width:'100%',display:'flex',justifyContent:'end'}} >
   <Button variant="contained" size="small" >Next</Button>
   </div>
          </Card>
        </div>
      </Modal>
    </>
  );
}

export default SideBar;
