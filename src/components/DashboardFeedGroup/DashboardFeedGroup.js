import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import StudySetCard from '../StudySetCard/StudySetCard'
import './DashboardFeedGroup.css'

class DashboardFeedGroup extends Component {
  render() {
    const cards = this.props.studysets.map((set, index) => {
      return (
        <StudySetCard
          key = {index}
          title = {set.title}
          image_url = {set.userId.image_url}
          created_by={set.userId.username}
          term_count={set.cards.length}
          _id={set._id}
        />
      )
    })
    return (
      <div className="feed-main-container">
        <div className="feed-header-container">
          <h6 className="studyset-created-date studyset-title">In August 2017</h6>
          <div className="hr-container">
            <hr className="feed-seperator"/>
          </div>

        </div>
        {cards}
      </div>
    )
  }
}

export default DashboardFeedGroup
