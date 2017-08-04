import React, {Component} from 'react'
import DashboardFeedGroup from '../DashboardFeedGroup/DashboardFeedGroup'
import Card from '../Card/Card'
import './YourStudySet.css'
import axios from 'axios'
import {BASE_URL} from '../../services/AuthService'
import {connect} from 'react-redux'
class YourStudySet extends Component {
  constructor() {
    super()
    this.state = {
      studysets : []
    }
  }

  componentDidMount() {
    axios.get(BASE_URL + '/api/studysets/' + this.props.user.id)
    .then(response => {
      return response.data.studyset
    })

    .then(studysets => {
      this.setState({
        studysets
      })
    })
  }

  render(){

    let studysets = this.state.studysets.map(set => {
      return set
    })

    if (this.props.folder) {
      studysets = studysets.filter(studyset => {
        return this.props.folder.studysets.indexOf(studyset._id) > -1
      })
    }
    const cards = studysets.map(set => (
      <div className="studyset-card" key={set.id}>
      <Card key={set._id}
        title={set.title}
        created_by={set.userId.username}
        term_count={set.cards.length}
      />
      </div>
    ))
    return (
      <div className="main-container">
        <div className="header-main-container">
          <div className="header-container">
            <div className="profile-container">
              <div className="profile-image-container">
                  {this.props.user.image_url ? <img src={this.props.user.image_url} className="study-set-profile-image"/> : null}
              </div>
              <div className="profile-content-container">
                <div className="headline-row">
                  <div className="username-container">
                    <h1 className="study-set-username">{this.props.user.username}</h1>
                  </div>
                  <div className="user-info-container">
                    <div className="user-type-container">
                      {/*this.props.user.type*/}
                      <h6 className="user-type">Teacher</h6>
                    </div>
                    <div className="user-name-container">
                      {/*this.props.user.first_name*/}
                      {/*this.props.user.last_name*/}
                      <h6 className="user-name">Jacob Leatherwood</h6>
                    </div>
                    <div className="user-indicator-container">
                    </div>
                  </div>
                </div>
                <div className="tabs-row">
                  <div className="tabs-container">
                    <button className="created-button study-set-buttons" >Created ({/*user.studysets.length*/} )</button>
                    <button className="studied-button study-set-buttons">Studied</button>
                    <button className="folders-button study-set-buttons" >Folders( {/*user.folders.length*/})</button>
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
                <h6 className="studyset-title sort">sort</h6>
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
              {cards}
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default connect(function(state){return {
  user: state.auth.user
}},{})(YourStudySet)
