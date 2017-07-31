import React, { Component } from 'react';
import Card from './Card'
import uuid from 'uuid'

class AddCard extends Component {

  render() {
    return (
          <button {...this.props}>
            Add Card
          </button>
    );
  }
}

export default AddCard;
