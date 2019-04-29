import React from 'react';
import './Card.css';

const Card = props => {
  return (
    <div>
      <img style={{height: '100px', width: '100px'}} src={props.image} alt={`${props.value} of ${props.suit}`}/>
    </div>
  )
}

export default Card;