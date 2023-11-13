import { People } from '@mui/icons-material';
import { Button, Card, CardActionArea, CardMedia, Link } from '@mui/material'
import React from 'react'

function OpenWagers() {

  return (
    <div className='container'>
        <div className="wraper">
        <div className="nav">
       <div className="section-heading">Live Wagers  </div>
        </div>
        
        <div className="wagers">
            <div className="icon"><People sx={{fontSize:'70px',color:'rgb(177, 186, 210)'}}/></div>
            <div className="heading">No open wagers</div>
            <div className="sub-heading">Try creating a wager.</div>
        </div>
    </div>
    </div>
  )
}

export default OpenWagers