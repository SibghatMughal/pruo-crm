import React, { useEffect, useState } from 'react';
import { Button, Drawer, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import app1 from '../../assets/images/app1.jpeg';
import app2 from '../../assets/images/app2.jpeg';
import app3 from '../../assets/images/app3.jpeg';
import game1 from '../../assets/images/game1.png';
import game2 from '../../assets/images/game2.jpeg';
import game3 from '../../assets/images/game3.jpeg';

import './hero.css'; // Import your CSS file
import SideBar from './SideBar';
import RightMenu from './rightMenu';
import { People, TravelExplore } from '@mui/icons-material';
import BrowseGames from './BrowseGames.jsx';
import LiveWagers from './LiveWagers';
import OpenWagers from './OpenWagers';
import OnGoingWagers from './OnGoingWagers';


function Hero() {
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showRightBar,setshowRightBar] = useState(true);

  useEffect(() => {
    // Function to update the window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
     

    
    if(window.innerWidth>768){
      setshowRightBar(true)
    }
    else{
      setshowRightBar(false)
    }
  };

  // Attach the event listener when the component mounts
  window.addEventListener('resize', handleResize);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, [window.innerWidth]); 

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const HeroSection = [{
    heading:'ONGOING MATCH',
    icon:true,
    mainHeading:'No ongoing match',
    subHeading:'You are not in a match.',
    buttonText:'Create Match',
  },
  {
    heading:'RECENTLY PLAYED',
    icon:true,
    mainHeading:'No recent matches',
    subHeading:'Try playing a match.',
    buttonText:null,
  },
  {
    heading:'RECENTLY PURCHASED',
    icon:true,
    mainHeading:'No recent purchases',
    subHeading:'Visit our shop.',
    buttonText:'Shop Now',
  },
]

const rightApps = [
  {
    id:1,
    image:app1
  },
  {
    id:2,
    image:app2
  },
  {
    id:3,
    image:app3
  }
  ]

  const drawerWidth = 240; // Define the width of the drawer
  const drawerMarginTop = open ? '80px' : '100px'; // Define the top margin for the drawer


  const games = [
    {
      id:1,
      image:`${game1}`,
      text:'Call of Duty: Warzone'
    },
    {
      id:2,
      image:`${game2}`,
      text:'FIFA 23'
    },
    {
      id:3,
      image:`${game3}`,
      text:'Clash Royale'
    }
  ]

  return (
    <div className='hero-section'>

      <div className={`sideMenu ${open ? 'open' : ''}`} >
        <div className='arrow-icon'>
          <IconButton
  onClick={toggleSidebar}
  style={{
    position: 'fixed',
    top: '80px',
    left: open ? '210px' : '20px',
    zIndex: 1,
    color: 'white',
    minWidth: '70px',
  }}
  className={`sticky-toggle-button ${open ? 'open' : ''}`}
>
            {open ? (
              <ChevronLeftIcon
                sx={{
                  fontSize: 30,
                  color: 'white',
                  borderRadius: '6px',
                  backgroundColor:'rgba(111, 116, 119, 0.5)',
                  minWidth:'70px'
                }}
              />
            ) : (
              <ChevronRightIcon
                sx={{
                  fontSize: 30,
                  color: 'white',
                  borderRadius: '6px',
                  backgroundColor:'rgba(111, 116, 119, 0.5)',
                  minWidth:'70px'
                }}
                className='arrow'
              />
            )}
          </IconButton>
        </div>

        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          className='drawer'
          sx={{ width: drawerWidth, flexShrink: 0, marginTop: drawerMarginTop,background:'red' }}
        >
          <List className='SideSection'>
            {/* Your menu items */}
           <SideBar HeroSection = {HeroSection}/>
          </List>
        </Drawer>
      </div>

      
      <div className="main-section">
  <div className="heropage">
    {/* Your content goes here */}
    <Typography variant="h1" component="h1" className='mainHeading'>
      The Fastest Growing Esports Wager Platform
    </Typography>
    <Typography variant="h5" component="h5" className='subHeading'>
      Join <span>84,870</span> other players competing in wager matches and start earning today.
    </Typography>
    <div className="btns">
      <Button variant="contained" size='medium' sx={{color:'white',fontSize:'20px',background:'rgb(51, 144, 255)',display:'flex',alignContent:'center',fontWeight:'bold',textTransform:'capitalize'}} startIcon={<People />}>Find Wagers</Button>
      <Button variant="contained" size='medium' sx={{color:'white',fontSize:'20px',background:'rgb(51, 144, 255)',display:'flex',alignContent:'center',fontWeight:'bold',textTransform:'capitalize'}} startIcon={<People />}>Leaderboard</Button>
    </div>
    <div className="paidText">
      <Typography variant="h5" component="h5" sx={{display:'flex',alignItems:'center',gap:'4px',fontFamily:'inter',color:'rgb(215,288,241)',fontSize:'16px',fontWeight:'500',wordSpacing:'2px'}}>
        <div><People sx={{color:'rgb(51, 144, 255)'}}/> </div><span>865,833</span> Wagers Played
      </Typography>
      <span>.</span>
      <Typography variant="h5" component="h5" sx={{display:'flex',alignItems:'center',gap:'4px',fontFamily:'inter',color:'rgb(215,288,241)',fontSize:'16px',fontWeight:'500',wordSpacing:'2px'}}>
        <div><People sx={{color:'rgb(51, 144, 255)'}}/> </div><span>165,721.17</span> Winnings Paid
      </Typography>
    </div>
  </div>

  <div className="next-section">
    <BrowseGames games ={games}/>
  </div>
  <div className="next-section">
    <LiveWagers/>
  </div>
  <div className="next-section">
    <OpenWagers/>
  </div>
  <div className="next-section">
    <OnGoingWagers/>
  </div>
  {showRightBar?(
  <div className="rightMenu">
    <RightMenu images={rightApps} />
  </div>
  ):''}
</div>

    </div>
  
  );
}

export default Hero;
