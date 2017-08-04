import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import StudySetCard from '../StudySetCard/StudySetCard'
import './Subject.css'

class Subject extends Component {
  render() {
    console.log(this.props);
    const cards = this.props.studysets.map((set, index) => {
      return (
        <StudySetCard
          key = {index}
          title = {set.title}
          image_url = {set.userId.image_url}
          created_by = {set.userId.username}
          term_count = {set.cards.length}
        />
      )
    })
    return (
      <div className="container subject-main-container">
        <div className="subject-search-top">
          <h1 className='subject-search-title'>Study sets matching {/*this.props.searchTerm*/}</h1>
          <div className="subject-search-options">
            <button className="subject-button">Study sets</button>
            <button className="subject-button">Classes</button>
            <button className="subject-button">Users</button>
          </div>
          <div className="subject-options-button">
            <button className="options-button"><i className="fa fa-exchange" aria-hidden="true"></i>Options</button>
          </div>
        </div>
        <div className="subject-results-container">
        </div>
      </div>
    )
  }
}

export default Subject
