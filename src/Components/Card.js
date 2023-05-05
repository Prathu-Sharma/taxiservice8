import React from 'react'
import './Card.css';

 function Card(props)
  {
  return (
    <div className="maincard">
         <div className="imgebox"><img src={props.imagess} width="100%" height="100%" alt="Loading"/></div>
    <div>
    <div className='head1'>{props.city}</div>
        <ul>
            <li>{props.item1}</li>
            <li>{props.item2}</li>
            <li>{props.item3}</li>
            <li>{props.item4}</li>
        </ul>
    </div>
    </div>
    )
}
export default Card;