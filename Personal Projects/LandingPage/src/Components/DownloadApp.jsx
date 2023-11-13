import React from 'react'
import apple from '../assets/apple.png';
import google from '../assets/google.png';
import download from '../assets/download.png';

function DownloadApp() {
  return (
    <div className='download'>
        <div className="text-section">
            <div className="heading">Download the App</div>
            <div className="subheading">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages</div>
            <div className="btns">
                    <img src={google} alt="play store" />
                    <img src={apple} alt="apple store" />
                </div>
        </div>
        <div className="image">
            <img src={download} alt="mobile image" />
        </div>
    </div>
  )
}

export default DownloadApp