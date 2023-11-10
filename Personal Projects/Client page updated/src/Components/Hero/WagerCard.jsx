import React from 'react'
import app3 from '../../assets/images/app3.jpeg'
import favicon from '../../assets/images/favicon.ico';


function WagerCard() {
  return (
    <div className='wager-card'>
        <div className="card-content">
            <div className="left-wager">
                <img src={app3} alt="online wager image" />
                <div className="text">
                    <div className="heading">1v1 Battle</div>
                    <div className="sub-headings">
                        <div>Best of 3</div>
                        <div>1v1</div>
                    </div>
                </div>
            </div>
            <div className="right-wager">
                <img src={favicon} alt="logo" />
                <div className="text">
                    <div className="points">0.93</div>
                    <div className="price">prize</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WagerCard