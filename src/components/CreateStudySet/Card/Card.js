import React, { Component } from 'react';

class Card extends Component {


  render() {


    return (
      <div className="Card">
      <br/>
      <input type="text"  placeholder="Enter term"/><br/><label>TERM</label><br/>
      <input type="text"  placeholder="Enter definition"/><br/><label>DEFINITION</label><br/>
      <a href="#">X</a>
      <hr />
      </div>
    );
  }
}

export default Card;
