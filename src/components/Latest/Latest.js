import React, {Component} from 'react'
import './Latest.css'

class Latest extends Component {
  render() {
    return (
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
    )
  }
}

export default Latest
