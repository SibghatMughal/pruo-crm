import { HdrPlusSharp } from '@mui/icons-material'
import React from 'react'
// import app1 from '../../assets/images/app1.jpeg';


function RightMenu({images}) {
 
  return (
    <div className='menuBar'>
        {
            images.map((app, index) => {
                return (
                    <div className="matchApp" key={app.id}>
                  <img src={app.image} alt={app.image}/>
                        </div>
                )
            })
        }
        <div className="matchApp">
            <div className="btn">+</div>
        </div>
        
    </div>
  )
}

export default RightMenu