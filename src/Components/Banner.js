import React from 'react';
import Button from './Button';
import AboutBtn from './AboutBtn';
import './Banner.css';

function Banner() {
  
    return(
     <>
     <div className="banner-section">
        <div className='banner-content'>
          <h1 className='Heading1'>Welcome to Radhika tour and travels !</h1>
          <h1 className='Heading2'>Book <span style={{color:"#FFB300"}}>Taxi</span> for your ride</h1>
        </div>
           
          <div className='btn-section'>
            <Button styling='first_btn' names="Book A Ride" style={{marginRight:"20px"}} />
            <AboutBtn/>
         </div>
     </div>
         
    </>
    );
}
export default Banner;