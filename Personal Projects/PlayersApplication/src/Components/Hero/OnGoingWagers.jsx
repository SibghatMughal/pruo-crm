import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import React from 'react'
import WagerCard from './WagerCard';

function OnGoingWagers() {




  return (
    <div className='container'>
        <div className="wraper">
        <div className="nav">
       <div className="section-heading">Ongoing Wagers  </div>
        </div>
        
        <div className="online-wagers">
        <Grid container spacing={2}>
        <Grid item md={6} sm={12} xs={12}>
          <WagerCard/>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
        <WagerCard/>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
        <WagerCard/>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
        <WagerCard/>
        </Grid>
      </Grid>
        </div>
    </div>
    </div>
  )
}

export default OnGoingWagers