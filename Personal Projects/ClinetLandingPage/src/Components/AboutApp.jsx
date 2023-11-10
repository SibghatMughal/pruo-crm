import React from 'react'
import about from '../assets/about.png';
import arrow from '../assets/arrow.png';
function AboutApp() {
  return (
    <div className="container">
    <div className='aboutApp'>
        <div className="image">
            <img src={about} alt="about image" />
        </div>
            <div className="headings">
                <div className="heading">About Our App</div>
                <div className="subheading">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                <button className='btn'>Contact Us <img src={arrow} alt="arrow"  /> </button>
            </div>
        </div> 

    </div>
  )
}

export default AboutApp