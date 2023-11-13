import React from 'react'
import cardicon from '../assets/cardicon.png'

function HighCard({background,iconbg,}) {
  return (
    <div className='hightCard' style={{boxShadow: `${background=='white'?'0px 50px 50px 0px rgba(0, 0, 0, 0.07)':'none'}`,backgroundColor:`${background}`}}>
        <div className="icon" style={{backgroundColor:`${iconbg}`}}>

       <img src={cardicon} alt="card icon" />
        </div>
       <div className='hightCardContent'>
         <h3 className='heading'>Website Dev</h3>
         <p className='subheading'>Make your business more leverage by having an optimal website and we are ready to help</p>
   </div>
    </div>
  )
}

export default HighCard