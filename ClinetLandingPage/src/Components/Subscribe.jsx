import React from 'react'
import call from '../assets/call.png';
import email from '../assets/email.png';
import arrow from '../assets/arrow.png';

function Subscribe() {
  return (
    <div className='subscribe'>
        <div className="heading">Subscribe our newsletter</div>
        <div className="fields">
            <div className="field">
             <img src={email} alt="email icon" />
             <div className="text">Your E-mail </div>
            </div>
            <div className="field">
            <img src={call} alt="email icon" />
             <div className="text">Phone number</div>
            </div>
        </div>
        <button className='btn'>Subscribe now <img src={arrow} alt="" /></button>
    </div>
  )
}

export default Subscribe