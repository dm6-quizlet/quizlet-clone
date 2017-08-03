import React, {Component} from 'react'
import './Card.css'

class Card extends Component {
  render() {
    return (
      <div className="study-set-card-container">
        <div className="study-set-card">
          <div className="study-set-image-container">
            <img className="study-set-image" src={this.props.image} />
          </div>
          <div className="study-set-info-container">
            <div className="created-by">{this.props.created_by}</div>
            <div className="term-count">{this.props.term_count}</div>
          </div>
          <h6>{this.props.title}</h6>
        </div>
      </div>
    )
  }
}

export default Card
