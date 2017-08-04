import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Card.css'

class Card extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="study-set-card-container">
        <Link to={'/study-set/' + this.props._id}>
          <div className="study-set-card">
            <div className="study-set-image-container">
              <img className="study-set-image" src={this.props.image} />
            </div>
            <div className="study-set-info-container">
              <div className="term-count">{this.props.term_count} Terms</div>
              <div className="card-profile-image-container">
                {this.props.image_url ? <img src={this.props.image_url} className="card-profile-image"/> : null}
              </div>
              <div className="created-by">{this.props.created_by}</div>
              <div className="user-type">{this.props.account_type}</div>
            </div>
            <h6 className="set-title">{this.props.title}</h6>
          </div>
        </Link>
      </div>
    )
  }
}

export default Card
