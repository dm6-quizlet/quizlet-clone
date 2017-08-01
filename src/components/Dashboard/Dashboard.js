import React, { Component } from "react";
import './Dashboard.css'
import SideNav from '../SideNav/SideNav'

class Dashboard extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="container latest-main-container">
        <div className="latest-content-container">
          <div className="latest-sidenav-container">
            <SideNav />
          </div>
          <div className="latest-activity-container">
            <div className="latest-activity-page-header">
              <div className="latest-activity-header">
                <div className="latest-activity-container">
                  <div className="latest-activity-row">
                    <div className="latest-activity-column">
                      <div className="column-title">
                        <h1>Latest Activity</h1>
                      </div>
                    </div>
                    <div className="latest-activity-column">
                      <div className="filter-container">
                        <input className="search-input" type="text" placeholder="Search your sets by title" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="latest-activity-body">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
