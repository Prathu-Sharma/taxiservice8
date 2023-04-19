import React from 'react';
import "./Button.css";

function Button(props) {
  return (
<button className={`btn ${props.styling}`}>Book a Taxi</button>
  );
}

export default Button;