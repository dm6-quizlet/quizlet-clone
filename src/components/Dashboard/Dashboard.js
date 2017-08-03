import React, { Component } from "react";
import './Dashboard.css'
import SideNav from '../SideNav/SideNav'
import Latest from '../Latest/Latest'
import YourStudySet from '../YourStudySet/YourStudySet'

class Dashboard extends Component {
  render() {
    return (
      <div className="container dashboard-main-container">
        <div className="dashboard-content-container">
          <div className="dashboard-sidenav-container">
            <SideNav />
          </div>
          <div className="dashboard-activity-container">
            {/*need if statement to switch views*/}
            <YourStudySet />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
