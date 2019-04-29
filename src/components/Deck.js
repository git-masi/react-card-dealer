import React, { Component } from 'react';
import './Deck.css';
import Card from './Card';
import axios from 'axios';
const API_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/';
  
class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: null
    }
  }

  async componentDidMount() {
    let response = await axios.get(API_URL);
    console.log(response.data.deck_id);
  }

  render() {
    return (
      <div>cards or something here</div>
    )
  }
}

export default Deck;