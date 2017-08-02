import React, {Component} from 'react'
import DashboardFeedGroup from '../DashboardFeedGroup/DashboardFeedGroup'
import './YourStudySet.css'

class YourStudySet extends Component {
  render(){
    return (
      <div className="main-container">
        <div className="header-main-container">
          <div className="header-container">
            <div className="profile-container">
              <div className="profile-image-container">
                <img className="profile-image"/>
              </div>
              <div className="profile-content-container">
                <div className="headline-row">
                  <div className="username-container">
                    {/*USERNAME*/}
                  </div>
                  <div className="user-info-container">
                    <div className="user-type-container">
                      {/*USER.TYPE*/}
                    </div>
                    <div className="user-name-container">
                      {/*USER.FIRST_NAME*/}
                      {/*USER.LAST_NAME*/}
                    </div>
                    <div className="user-indicator-container">
                    </div>
                  </div>
                </div>
                <div className="tabs-row">
                  <div className="tabs-container">
                    <button className="created-button">Created ({/*user.studysets.length*/})</button>
                    <button className="studied-button">Studied</button>
                    <button className="folders-button">Folders({/*user.folders.length*/})</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-main-container">
          <div className="content-container">
            <div className="content-filter-container">
              <div className="sort-container">
                <h6 className="studyset-title">sort</h6>
                <select className="filter-dropdown">
                  <option value="latest" selected>Latest</option>
                  <option value="alphabetical">Alphabetical</option>
                </select>
              </div>
              <div className="filter-container">
                <input type="search" placeholder="Type to Filter" className="studyset-filter"/>
                <span className="search-border"></span>
              </div>
            </div>
            <div className="dashboard-feed-main-container">
              <DashboardFeedGroup />
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default YourStudySet
