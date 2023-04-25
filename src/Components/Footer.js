import React from 'react';
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer-section'>
      <div className="container">
        <div className="inner_footer">
            <div className="footer_content">
                <div className='logo'>RADHIKA<span>TRAVELS</span></div>
                <p className='logo_para'>We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.</p>
                <div className="social_links">
                    <div className="contact_num"><i className="fa-solid fa-phone"></i>Contact Number</div>
                    <div className="location"><i className="fa-solid fa-location-dot"></i>Location</div>
                    <div className="email_id"><i className="fa-solid fa-envelope"></i>Email@email.com</div>
                </div>
            </div>
            <div className="footer_links">
                <div className="quick_links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>About</li>
                        <li>News</li>
                        <li>Contact</li>
                        <li>Form</li>
                    </ul>
                </div>
                <div className="quick_links">
                    <h3>Contact us</h3>
                    <ul>
                    <li>Booking</li>
                    <li>Tickets</li>
                    <li>Watch Demo</li>
                </ul>
                </div>
                
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
