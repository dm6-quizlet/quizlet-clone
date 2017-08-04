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
      studysets : [],
      searchTerm : ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.filterSets = this.filterSets.bind(this)
  }

  handleChange(e) {
    this.setState({
      searchTerm : e.target.value
    })
  }

  filterSets(e) {
    e.preventDefault()
    axios.get(BASE_URL + '/api/studysets/' + this.props.user.id + '/' + this.state.searchTerm)
    .then(response => {
      return response.data.studyset
    })
    .then(studysets => {
      this.setState({
        studysets
      })
    })

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

    let {studysets} = this.state

    if (this.props.folder) {
      studysets = studysets.filter(studyset => {
        return this.props.folder.studysets.indexOf(studyset._id) > -1
      })
    }
    console.log(this.state.studysets);
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
                      <h6 className="user-type">{this.props.user.account_type}</h6>
                    </div>
                    <div className="user-name-container">
                      <h6 className="user-name">{this.props.user.first_name} {this.props.user.last_name}</h6>
                    </div>
                    <div className="user-indicator-container">
                    </div>
                  </div>
                </div>
                <div className="tabs-row">
                  <div className="tabs-container">
                    <button className="created-button study-set-buttons" >Created ({studysets.length} )</button>
                    <button className="studied-button study-set-buttons">Studied</button>
                    <button className="folders-button study-set-buttons" >Folders( {/*this.props.folder.length*/})</button>
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
                <form onSubmit={this.filterSets}>
                  <input type="search" value={this.state.searchTerm} onChange={this.handleChange} placeholder="Type to Filter" className="studyset-filter"/>
                </form>
              </div>
            </div>
            <div className="dashboard-feed-main-container">
              <DashboardFeedGroup
                studysets = {studysets}
              />
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
