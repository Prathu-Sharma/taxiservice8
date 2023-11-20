import React from "react";
import Button from "./Button";
import "./Header.css";
function Header()
{
return(
<div className="header-main">
    
    <div className="header-symbol"><span className="symbol">Radhika</span>Travels</div>
        <nav className="menu">
            <a>Home</a>
            <a>About us</a>
            <a>Taxi</a>
            <a>Services</a>
            <a>Contact Us</a>
        </nav>
    
    <div>
    <Button names="Book A Taxi"/>
    </div>
     
</div>

);

}


export default Header;