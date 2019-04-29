import React, { Component } from 'react';
import './Deck.css';
import Card from './Card';
import axios from 'axios';
const API_BASE_URL = 'https://deckofcardsapi.com/api/deck/';
  
class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: null,
      drawnCards: []
    }
    this.getCard = this.getCard.bind(this);
  }

  async componentDidMount() {
    let response = await axios.get(`${API_BASE_URL}new/shuffle/`);
    // console.log(response.data.deck_id);
    this.setState({deck: response.data});
  }

  async getCard () {
    try {
      let cardRes = await axios.get(`${API_BASE_URL}${this.state.deck.deck_id}/draw/`);
      // console.log(cardRes.data);
      if (!cardRes.data.success) {
        throw new Error('No cards remaining');
      }
      let card = cardRes.data.cards[0];
      this.setState({drawnCards: [...this.state.drawnCards, card]});
    } catch (err) {
      alert(err);
    }
  }

  render() {
    const displayCards = this.state.drawnCards.map(card => (
      <Card 
        image={card.image}
        suit={card.suit}
        value={card.value}
        key={card.code}
      />
    ));
    return (
      <div>
        <h1>Deal Me In!</h1>
        <button onClick={this.getCard}>Deal!</button>
        <div>{displayCards}</div>
      </div>
    )
  }
}

export default Deck;