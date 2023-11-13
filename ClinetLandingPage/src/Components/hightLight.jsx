import React from 'react'
import hightlight from '../assets/hightlight.png'
import HighCard from './highCard'

function HightLight() {
  return (
    <div className='highLight'>
        <div className="headings">
            <img src={hightlight} alt="hightlight image" />
            <div className="heading">Key Highlights</div>
            <div className="subheading">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>            
        </div>
        <div className="content">
            <HighCard background='transparent' iconbg='red'/>
            <HighCard background='white' iconbg='red'/>
            <HighCard background='transparent' iconbg='red'/>

        </div>
    </div>
  )
}

export default HightLight