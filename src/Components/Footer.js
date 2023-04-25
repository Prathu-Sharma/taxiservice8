import React from 'react';
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer-section'>
      <div className="container">
        <div className="inner_footer">
            <div className="footer_content">
                <div>Logo</div>
                <p>Logo Para</p>
                <div className="social_links">
                    <div className="facebook">Facebook</div>
                    <div className="twitter">Twitter</div>
                    <div className="youtube">Youtube</div>
                </div>
            </div>
            <div className="footer_links">
                <ul>
                    <li>About</li>
                    <li>News</li>
                    <li>Contact</li>
                    <li>Form</li>
                </ul>
                <ul>
                    <li>Booking</li>
                    <li>Tickets</li>
                    <li>Watch Demo</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
