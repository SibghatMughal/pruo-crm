import React from 'react'
import footer from '../assets/footer.png'

function Footer() {
  return (
    <div className='footer'>
       <div className="company">
        <div className="heading">
            <img src={footer} className='icon' alt="footer icon" />
            <div className="title">Company Name</div>
        </div>
        <div className="subheading">Lorem ipsum dolor sit amet consectetur. Libero semper lorem vestibulum laoreet vel eget vel purus.</div>
       </div>
       <div className="iinks">
       <div className="title">HELP</div>
       <ul>
       <li>About Features Works</li>
       <li>Terms & Conditions</li>
       <li>Privacy Policy</li>
       </ul>
       </div>
       <div className="news-letter">
        <div className="title">Newsletter</div>
        <div className="register">
            <input type="text"  placeholder='Enter your email address'/>
            <button className='btn'>Subscribe Now</button>
        </div>
       </div>
    </div>
  )
}

export default Footer