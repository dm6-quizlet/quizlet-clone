import React, { Component } from 'react';

class Card extends Component {


  render() {


    return (
      <div className="Card">
      <br/>
      <div className="row">


      <div className="col-md-6"><input type="text"  placeholder="Enter term"/><br/><label>TERM</label></div>
      <div className="col-md-6"><input type="text"  placeholder="Enter definition"/><br/><label>DEFINITION</label></div>
      </div><br/>
      <hr />
      </div>
    );
  }
}

export default Card;
