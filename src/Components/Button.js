import React from 'react';
import "./Button.css";

function Button(props) {
  return (
<button className={`btn ${props.styling}`}>{props.names}</button>
  );
}

export default Button ;