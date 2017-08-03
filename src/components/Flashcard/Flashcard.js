import React, {Component} from 'react'
import './Flashcard.css'

class Flashcard extends Component {
  constructor() {
    super()
    this.state = {
      cards: [
        {term: 'Cat',
        definition: 'A feline mammal',
        _id:1},
        {term: 'Dog',
        definition: 'A smelly mutt',
        _id:2},
        {term: 'Monkey',
        definition: 'A banana eater',
        _id:3}
      ],
      toggleTermDefinition: true,
      activeCard: 0,
      progress: 0,
      total: 3
    }
  }


  render() {




    return(
      <div className="game">
      {/*SIDEBAR*/}
      <div className="container gamebar-main-container">
        <div className="gamebar-content-container">
          <div className="gamebar-header-container gamebar-containers">
            <div className="settings-container content-containers">
              <i className="fa" aria-hidden="true">&#9664;</i>
              <p>Back</p>
            </div>
          </div>
          <div className="gamebar-header-container gamebar-containers">
            <div className="gamebar-header settings-container">
              <p>CARDS</p>
            </div>

          <div className="gamebar-footer-container">
            <div className="progression-bar">
              <div className="progression-total"></div>
              <div className="progression-progress"></div>
            </div>
            <label className="Input-Label">Progress</label>
            <div className="game-buttons">
              <button className="Side-Button">&#9654; Play</button>
              <button className="Side-Button">&#10542; Shuffle</button>
              <button className="Side-Button Side-Button-Primary">&#8645; Options</button>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <div onclick={() => this.setState({
            ...this.state, toggleTermDefinition: !this.state.toggleTermDefinition
          })} className="cardtext">
        {
          this.state.toggleTermDefinition ?
          this.state.cards[this.state.activeCard].term :
          this.state.cards[this.state.activeCard].definition
        }
          </div>
        </div>
{/*        <svg viewBox="0 0 200 200" xmlns="http://w3.org/2000/svg">
        <circle cx="100" cy="50" r="50"/>
        </svg> */}
      </div>

      </div>
    )
  }
}

export default Flashcard;
