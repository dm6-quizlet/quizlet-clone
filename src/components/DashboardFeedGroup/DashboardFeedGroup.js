import React, {Component} from 'react'
import './DashboardFeedGroup.css'

class DashboardFeedGroup extends Component {
  render() {
    return (
      <div className="feed-main-container">
        <div className="feed-header-container">
          <h6 className="studyset-title">In {/*studyset.created.month*/}{/*studyset.created.year*/}</h6>
          <div className="feed-seperator">
            {/*how to make the serator  span?*/}
          </div>
        </div>
        <div className="feed-list-item-container">  {/*NEEDS TO BE LINK TO STUDYSET BY ID*/}
          <div className="set-preview-container">
            <div className="set-preview-header">
              <div className="term-count-container">
              </div>
              <div className="feed-user-container">
                <div className="feed-user-profile-image">{/*user.profile-image*/}</div>
                <div className="feed-user-username">{/*user.username*/}</div>
              </div>
            </div>
            <div className="set-preview-title-container">
              <div className="set-preview-title">{/*studyset.title*/}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardFeedGroup
