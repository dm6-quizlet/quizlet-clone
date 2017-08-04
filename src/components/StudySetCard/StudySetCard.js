import React, {Component} from 'react'
import './StudySetCard.css'

class StudySetCard extends Component {
  render() {
    return (
      <div className="feed-list-item-container">
        <div className="set-preview-container">
          <div className="set-preview-header">
            <div className="term-count-container">
              {this.props.term_count}
            </div>
            <div className="feed-user-container">
              <div className="feed-user-profile-image">{this.props.user.image_url}</div>
              <div className="feed-user-username">{this.props.user.username}</div>
            </div>
          </div>
          <div className="set-preview-title-container">
            <div className="set-preview-title">{this.props.title}</div>
          </div>
        </div>
      </div>
  )
}

export default StudySetCard
