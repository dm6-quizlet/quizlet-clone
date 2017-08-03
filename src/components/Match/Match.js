import React, {Component} from 'react'
import { Canvas, Text } from 'react-fabricjs';
import './Match.css'

class Match extends Component {
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
      ]
    }
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  render() {



    let listofterms = this.state.cards.map((card, index)=>

        <Text
          text={card.term}
          left={this.getRandomInt(200,800)}
          top={this.getRandomInt(100,900)}
          stroke="#ff1318"
          strokeWidth={1}
          fontStyle="italic"
          fontFamily="Hoefler Text"
          lockRotation={true}
          lockUniScaling={true}
          lockScalingX={true}
          hasControls={false}
          _id={card._id}
        />
    )
      let listofdefs = this.state.cards.map((card, index)=>
        <Text
          text={card.definition}
          left={this.getRandomInt(200,800)}
          top={this.getRandomInt(100,800)}
          stroke="#ff1318"
          strokeWidth={1}
          fontStyle="italic"
          fontFamily="Hoefler Text"
          lockRotation={true}
          lockUniScaling={true}
          lockScalingX={true}
          hasControls={false}
          _id={card._id}
        />

    )


    return(
      <div>
      <Canvas
        ref="canvas"
        width="1000"
        height="1000"
      >
          {listofterms}
          {listofdefs}
      </Canvas>
      </div>
    )
  }
}

export default Match;
