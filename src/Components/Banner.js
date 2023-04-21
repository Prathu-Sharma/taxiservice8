import React from 'react';
import Button from './Button';
import AboutBtn from './AboutBtn';
import './Banner.css';

function Banner() {
  
    return(
     <>
     <div className="banner-section">
        <div className='banner-content'>
          <h1 style={{color:"#FFB300",padding:"20px 0px",fontSize:"45px"}}>Welcome to Radhika tour and travels !</h1>
          <h1 style={{fontSize:"35px"}}>Book <span style={{color:"#FFB300"}}>Taxi</span> for your ride</h1>
        </div>
           
          <div className='btn-section'>
            <Button names="Book A Ride" style={{marginRight:"20px"}} />
            <AboutBtn/>
         </div>
     </div>
         
    </>
    );
arpit
}
export default Banner;