import React from 'react';
import Button from './Button';
import AboutBtn from './AboutBtn';

function Banner() {
  
    return(
     <>
     <div className="banner-section">
          <h3>Welcome to Radhika tour and travels !</h3>
          <h1>Book Taxi for your ride</h1>
          <div className='btn-section'>
            <Button/>
            <AboutBtn/>
         </div>
     </div>
         
    </>
    );

}
export default Banner;