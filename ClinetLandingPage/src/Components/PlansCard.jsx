import React, { useState, useEffect } from 'react';
import star from '../assets/star.png';
import checkmark from '../assets/checkmark.png';
import arrow from '../assets/arrow.png';

function PlansCard() {
    const cardNO = [1,2,3]
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    useEffect(() => {
        // Function to update the window width in the state
        const updateWindowWidth = () => {
          setWindowWidth(window.innerWidth);
        };
    
        // Add the event listener
        window.addEventListener('resize', updateWindowWidth);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', updateWindowWidth);
        };
      }, [windowWidth]);
      const cardMargin = windowWidth>1024?-30:0;

  return (
    <>
    {cardNO.map((card)=>{
        return(

    <div className='plansCard' style={{marginTop:`${card=='2'?`${cardMargin}px`:`0px`}`}}>
        <div className="header">

        <div className="icon">
            <img src={star} alt="dimond icon" />
        </div>
        <div className="advertise">POPULAR PLAN</div>
        </div>
        <div className="headings">
            <div className="heading">Starter</div>
            <div className="subheading">Lorem ipsum dolor sit amet, consect etur adipiscing elit.</div>
        </div>
        <div className="checks">
            <div className="heading">Whats Included :</div>
            <div className="check">
                   <img src={checkmark} alt="tickt icon" className="icon" />
                <div className="heading">All basic CRM features</div>
            </div>

            <div className="check">
                   <img src={checkmark} alt="tickt icon" className="icon" />
                <div className="heading">All basic CRM features</div>
            </div>

            
        </div>
        <div className="price">
        $99.00 <span>/Month</span>
        </div>
        <div className="footer">
            
        <button className="btn">Get Started <img src={arrow} alt='arrow'/> </button>
        <div className="status">No credit card required</div>      
        </div>
    </div>
        )
    })}
    
    </>
  )
}

export default PlansCard