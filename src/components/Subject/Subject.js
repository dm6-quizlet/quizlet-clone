import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {BASE_URL} from '../../services/AuthService'
import DashboardFeedGroup from '../DashboardFeedGroup/DashboardFeedGroup'
import './Subject.css'

class Subject extends Component {
  constructor() {
    super()
    this.state = {
      studysets: []
    }
    this.getStudySets = this.getStudySets.bind(this)
  }

  getStudySets(searchTerm) {
    axios.get(BASE_URL + '/api/studysets/all/' + searchTerm)
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
    this.getStudySets(this.props.searchTerm)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.searchTerm !== this.props.searchTerm) {
      this.getStudySets(nextProps.searchTerm)
    }
  }
  render() {
    const {studysets} = this.state
    return (
      <div className="container subject-main-container">
        <div className="subject-search-top">
          <h1 className='subject-search-title'>Study sets matching  {this.props.searchTerm}</h1>
          <div className="subject-button-container">
            <div className="subject-search-options">
              <button className="subject-button">Study sets</button>
              <button className="subject-button">Classes</button>
              <button className="subject-button">Users</button>
            </div>
            <div className="subject-options-button">
              <button className="options-button"><i className="fa fa-exchange" aria-hidden="true"></i>Options</button>
            </div>
          </div>
        </div>
        <div className="subject-results-container">
          <DashboardFeedGroup
            studysets = {studysets}
          />

        </div>
      </div>
    )
  }
}

export default Subject
