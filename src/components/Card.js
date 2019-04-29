import React, { Component } from 'react';
import './Card.css';
  
class Card extends Component {
  constructor(props) {
    super(props);
    let angle = Math.random() * 90 - 50;
    let xVal = Math.random() * 40 - 20;
    let yVal = Math.random() * 40 - 20;
    this.transformCSS = `translate(calc(-50% - ${xVal}px), calc(-50% - ${yVal}px)) rotate(${angle}deg)`;
  }

  render() {
    return (
      <img
        className="Card"
        style={{transform: this.transformCSS}}
        src={this.props.image} 
        alt={`${this.props.value} of ${this.props.suit}`}
      />      
    )
  }
}

export default Card;