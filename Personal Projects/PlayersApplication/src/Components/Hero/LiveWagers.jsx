import { People } from '@mui/icons-material';
import { Button, Card, CardActionArea, CardMedia, Link } from '@mui/material'
import React from 'react'

function LiveWagers() {
    const btn = {
        fontSize:'14px',
        color:'white',
        backgroundColor:'rgb(57,84,102)',
        fontweight:'bolder',
        display:'flex',
        alignitems:'center',
        marginLeft:'12px',
        "&:hover": {
          background:'rgb(50,84,104)',
        },
      };

  return (
    <div className='container'>
        <div className="wraper">
        <div className="nav">
       <div className="section-heading">Live Wagers  <Button variant="contained" sx={btn} startIcon={<People/>}>Link Twitch</Button></div>
        </div>
        
        <div className="wagers">
            <div className="icon"><People sx={{fontSize:'70px',color:'rgb(177, 186, 210)'}}/></div>
            <div className="heading">No live streams</div>
            <div className="sub-heading">Try linking your Twitch and streaming</div>
        </div>
    </div>
    </div>
  )
}

export default LiveWagers