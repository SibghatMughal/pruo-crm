import React, { useState } from 'react'
import './home.scss';
import icon from '../assets/Icon.png'
import heroimage from '../assets/heroimage.png';
import apple from '../assets/apple.png';
import google from '../assets/google.png';
import herolow from '../assets/herolow.png';
import cloud from '../assets/cloud.svg';
import HightLight from './hightLight';
import AboutApp from './AboutApp';
import ScreenShots from './ScreenShots';
import Plans from './Plans';
import DownloadApp from './DownloadApp';
import Subscribe from './Subscribe';
import Footer from './Footer';

function Home() {
    const [showHamburger,setShowHamburger] =useState(false);
  return (
    <div className='home'>
        <div className="hero">
        <nav>
            <div className="logo">Web Design</div>
            <div className="links">
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>About Us</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="contact">
                <div className="icon"><img src={icon} alt="phono icon" /></div>
                <button className='btn'>Contact Us</button>
            </div>
            <div className="hamburger" onClick={()=>setShowHamburger(!showHamburger)}>Hamburger</div>
          
                <div className={`hamlinks  ${showHamburger?'hamshow':''}`}>

                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>About Us</li>
                    <li>Blog</li>
                </ul>
                </div>
           
        </nav>
        <div className="cloud">
            <img src={cloud} alt="cloud" />
        </div>
        <div className="main">
            <div className="text">
                <div className="heading">Do great work with great people</div>
                <div className="subheading">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</div>
                <div className="btns">
                    <img src={google} alt="play store" />
                    <img src={apple} alt="apple store" />
                </div>
            </div>
            <div className="image">
                <img src={heroimage} alt="hero image" />
            </div>
        </div>
            <div className="hero-low">
                <img src={herolow} alt="hero-low" />
            </div>
            <div className="container">
                <HightLight/>
            </div>
            <div className="about-section">
                <AboutApp/>
            </div>
            <div className="container">
                <ScreenShots/>
            </div>
            <div className="container">
                <Plans/>
            </div>

            <div className="container">
                <DownloadApp/>
            </div>
            <div className="container">
                <Subscribe/>
            </div>
            <div className="container">
                <Footer/>
            </div>

        </div>
    </div>
  )
}

export default Home