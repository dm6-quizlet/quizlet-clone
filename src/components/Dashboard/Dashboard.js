import React, { Component } from "react";
import './Dashboard.css'
import SideNav from '../SideNav/SideNav'
import YourStudySet from '../YourStudySet/YourStudySet'

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      folder: null
    }
    this.selectFolder = this.selectFolder.bind(this)
  }

  selectFolder(folder) {
    this.setState({
      folder
    })
  }

  // Method to update selected folder on state
  render() {
    return (
      <div className="opening-container">
      <div className="container dashboard-main-container">
        <div className="dashboard-content-container">
          <div className="dashboard-sidenav-container">

            <SideNav
              selectFolder= {this.selectFolder}
            />
          </div>
          <div className="dashboard-activity-container">
            {/*need if statement to switch views*/}

            {/*Pass selectedFolder to study set*/}
            <YourStudySet
              folder= {this.state.folder}/>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Dashboard
