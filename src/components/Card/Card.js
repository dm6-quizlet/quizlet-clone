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
            <div className="term-count">{this.props.term_count}</div>
            <div className="card-profile-image">{/*this.props.user.image_url*/}</div>
            <div className="created-by">{this.props.created_by}</div>
          </div>
          <h6 className="set-title">{this.props.title}</h6>
        </div>
      </div>
    )
  }
}

export default Card
