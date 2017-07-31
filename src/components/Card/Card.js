import React, {Component} from 'react'
import './Card.css'

class Card extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="study-set-card-container">
        <div className="study-set-card">
          <h6>{this.props.title}</h6>
          <img src={this.props.image} />
          <div className="created-by">{this.props.created_by}</div>
          <div className="term-count">{this.props.term_count}</div>
        </div>
      </div>
    )
  }
}

export default Card
