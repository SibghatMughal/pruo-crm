import React from 'react'
import hightlight from '../assets/hightlight.png'
import phone1 from '../assets/phone1.png';
import phone2 from '../assets/phone2.png';
import phone3 from '../assets/phone3.png';
import phone4 from '../assets/phone4.png';

function ScreenShots() {
  return (
    
    <div className='screenshots'>
        <div className="headings">
            <img src={hightlight} alt="hightlight image" />
            <div className="heading">Key Highlights</div>
            <div className="subheading">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>            
        </div>
        <div className="content">
           
            <img src={phone1} alt="phone1 image" />
            <img src={phone2} alt="phone2 image" />
            <img src={phone3} alt="phone3 image" />
            <img src={phone4} alt="phone4 image" />


        </div>
    </div>

  )
}

export default ScreenShots