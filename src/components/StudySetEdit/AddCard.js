import React, { Component } from 'react';
import Card from './Card'
import uuid from 'uuid'
import './StudySetEdit.css'

class AddCard extends Component {

  render() {
    return (
      <div>
            <input type="submit" value="Add Card" id="SubmitBottom" className="Add-Card-Button" {...this.props}/>
      </div>
    );
  }
}

export default AddCard;
