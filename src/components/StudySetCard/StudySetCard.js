import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './StudySetCard.css'

class StudySetCard extends Component {
  render() {
    return (
      <Link to={"/study-set/" + this.props._id}>
        <div className="feed-list-item-container">
          <div className="set-preview-container">
            <div className="set-preview-header">
              <div className="term-count-container">
                {this.props.term_count} Terms
              </div>
              <div className="feed-user-container">
                <div className="feed-user-profile-image">
                {this.props.image_url ? <img src={this.props.image_url} className="feed-user-profile-image"/> : null}
                </div>
                <div className="feed-user-username">
                  {this.props.created_by}
                </div>
              </div>
            </div>
            <div className="set-preview-title-container">
              <div className="set-preview-title">{this.props.title}
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
export default StudySetCard
