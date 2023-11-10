import React from 'react';
import './matches.css';
import Menu from '../Menu/menu';
import Footer from '../../Components/Footer/Footer';
import favicon from '../../assets/images/favicon.ico';
import { Avatar, Button, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { KingBed } from '@mui/icons-material';

function Match() {

  const buttonStyle = {
    minWidth: '100%',
    padding: '12px',
    background: '#6edb0f',
  };
  
  const chatHeaderStyle = {
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    background: '#1a2c39',
    borderRadius: '12px',
    color: '#6edb0f',
  };
  
  const chatCardStyle = {
    minWidth: '100%',
    background: 'rgb(33, 55, 68)',
  };
  
  const chatContainerStyle = {
    minWidth:'90%',
    height: '280px',
    background: '#1a2c39',
    padding: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };
  
  const chatMessageStyle = {
    fontWeight: 'bold',
    color: 'white',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px',
    background: 'rgb(7, 24, 38)',
    minWidth:'90%'
  };
  const cardStyles = {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    background: "#32424c",
    height: "200px",
    padding: "12px"
  };

  const divStyles = {
    display: "flex",
    alignItems: "center",
    gap: "15px"
  };

  const headerStyles = {
    marginTop: "-18px",
    paddingLeft:'0px',
    color:'white',
    fontWeight:'bolder'
  };

  return (
    <>
    <div className='matches'>
      {/* <div className='menu'> */}
        {/* <Menu /> */}
      {/* </div> */}
      <div className='content'>
        {/* Your content for the remaining portion */}
        <div className='match-content'>
          <div className="left">
            <div className="score-board">
              <div className='section'>
                <div className="heading">Game Mode</div>
                <div className="score">Realistic</div>
              </div>
              <div className='section'>
                <div className="heading">Entery Fee/Player</div>
                <div className="points">
                   <img src={favicon} alt="favicon" />
                   <div className="point">1.00</div>
                </div>
              </div>
              <div className='section'>
                <div className="heading">Prize/Player</div>
                <div className="points">
                   <img src={favicon} alt="favicon" />
                   <div className="point" style={{color:'darkpurple'}}>1.85</div>
                </div>
              </div>
             
            </div>
            
           <Button variant="contained" size="large" sx={buttonStyle}>
  Success
</Button>

<div className="chat">
  <Card sx={chatCardStyle}>
    <CardContent>
      <Typography gutterBottom variant="h6" component="div" sx={chatHeaderStyle}>
        Chat
      </Typography>
      <Card sx={chatContainerStyle}>
        <Typography variant="h6" sx={chatMessageStyle}>
          <span style={{ marginRight: '8px', color: '#6edb0f' }}>gindy</span> gigs mate
        </Typography>
        <Typography variant="h6" sx={chatMessageStyle}>
          <span style={{ marginRight: '8px', color: 'purple' }}>user 3</span> gig!
        </Typography>
        <Typography variant="h6" sx={chatMessageStyle}>
          <span style={{ marginRight: '8px', color: 'red' }}>system</span> Team 1 won!
        </Typography>
      </Card>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'center',
          background: '#1a2c39',
          borderRadius: '12px',
          color: 'lightgray',
          marginTop: '8px',
        }}
      >
        Match is Finished
      </Typography>
    </CardContent>
  </Card>
            </div>
          </div>
          <div className="right">
          <Card sx={{background:'#243c49',width:'100%',padding:'12px',display:'flex',flexDirection:'column',gap:'15px',borderRadius:'6px'}}>
      <Card sx={cardStyles}>
      <div style={divStyles}>
        <Typography sx={{fontWeight:'bolder',fontSize:'20px',color:'yellow'}}>Team 1</Typography>
        <Button variant="contained" size="small" sx={{background:'yellowgreen'}}>
          Victory
        </Button>
      </div>
      <CardHeader
        
        avatar={<Avatar sx={{ bgcolor: "lightgray" }}>Me</Avatar>}
        title="Me"
        subheader="epic username"
        sx={headerStyles}
      />
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "lightgray" }}>R</Avatar>}
        title="Me"
        subheader="epic username"
        sx={headerStyles}
      />
    </Card>
    <Card sx={cardStyles}>
      <div style={divStyles}>
        <Typography sx={{fontWeight:'bolder',fontSize:'20px',color:'yellow'}}>Team 2</Typography>
        <KingBed sx={{color:'yellowgreen'}}/>
        <Button variant="contained" size="small" sx={{background:'red'}}>
          Defeat
        </Button>
      </div>
      <CardHeader
        
        avatar={<Avatar sx={{ bgcolor: "lightgray" }}>Me</Avatar>}
        title="Me"
        subheader="epic username"
        sx={headerStyles}
      />
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "lightgray" }}>R</Avatar>}
        title="Me"
        subheader="epic username"
        sx={headerStyles}
      />
    </Card>
    </Card>    
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Match;
