import React from 'react';
import Car from '../images/carImage.png'
import owner from '../images/amitsharma.jpg'
import coowner from '../images/arjunsharma.jpg'
import Button from './Button';
import './carsection.css'
export default function Carsection() {
  return (
    <div className='carsection'>
        <div className='p1'><img src={Car} alt="working"></img></div>
        <div className='p2'> 
        <h2 style={{color:"#FFB300",fontSize:"30px"}}>About Us</h2>
        <h1 style={{fontSize:"45px"}}>We Provide Trusted <span style={{color:"#FFB300"}}>Cab Service</span>  In The World</h1> 
<div className='owners'>
<div style={{textalign:"center"}}>
    <div className='ownerimg'><img src={owner} height="40px" alt="working"></img></div>
    <p style={{color:"#FFB300",fontSize:"16px",fontWeight:"bold"}}>Amit Sharma (Owner)</p>
</div>

<div>
<div className='ownerimg'><img src={coowner} alt="working"></img></div>
<p style={{color:"#FFB300",fontSize:"16px",fontWeight:"bold"}}>Ajun Sharma (Co-owner)</p>
</div>

</div>
<div className='intro'><p style={{color:"#757F95",fontSize:"16px",fontWeight:"400"}}>
There are many variations of passages of Lorem Ipsum available, but the majority have
suffered alteration in some form, by injected humour.There are many variations of passages of Lorem Ipsum available, but the majority have
suffered alteration in some form, by injected humour.</p></div>


<Button names="Book Now"/>
</div>   
</div>
  )
}
