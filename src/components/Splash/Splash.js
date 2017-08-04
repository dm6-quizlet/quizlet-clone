import React, { Component } from "react";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {toggleSignUpModal} from '../../actions/modal'
import axios from 'axios'
import {BASE_URL} from '../../services/AuthService'
import Card from '../Card/Card'
import Footer from '../Footer/Footer'
import './Splash.css'

class Splash extends Component {
  constructor () {
    super()
    this.state = {
      studysets: [],
      user: {}
    }

  }

  componentWillMount () {
    axios.get(BASE_URL + '/api/studysets')
    .then(response => response.data)
    .then(studysets => {
      this.setState({
        studysets
      })
    })
  }

  render() {
    const studySetCards = this.state.studysets.map(set => {
      return (
        <Card key={set._id}
        title={set.title}
        created_by={set.userId.username}
        term_count={set.cards.length}
        image={set.image_url}
        image_url={set.userId.image_url}
        _id={set._id}
        />
      )
    })
    return (
      <div className="Splash">
        <div className="splash-container">
          <div className="container simple-tools-container">
              <div className="simple-tools-content">
                <h1>Simple tools for learning anything.</h1>
                <p>Search millions of study sets or create your own. Improve your grades by studying with flashcards, games and more.</p>
                <h1>{this.state.title}</h1>

                <button onClick={this.props.toggleSignUpModal}>Get Started</button>
              </div>
          </div>
          <div className="container meet-quizlet-container">
            <div className="row">
              <img className="meet-quizlet-junk-1" src="https://quizlet.com/a/i/homepage/decoration-a.djyA.png" />
              <img className="meet-quizlet-junk-2" src="https://quizlet.com/a/i/homepage/decoration-b.uvSa.png" />
              <div className="meet-quizlet-content">
                <div className="meet-quizlet-info">
                  <h1>Meet the new Quizlet Learn</h1>
                  <br />
                  <p>Create a study set and tell us when you need to know the material, and Quizlet Learn will kickstart your studying with an adaptive plan that charts your progress, helps you stay motivated with encouraging checkpoints, and keeps you on track with helpful study reminders.</p>
                  <br />
                  <div>
                    <Link to='/quizletLearn' className="learn-more">Learn More</Link>
                  </div>
                </div>
                <div className="meet-quizlet-image">
                  <img src="https://quizlet.com/a/i/homepage/learn.qenA.jpg"/>
                </div>
              </div>
            </div>
          </div>
          <div className="container study-set-container">
            <div className="row study-set-row">
              <h2>184,519,000
              <br />
              Study Sets and Counting</h2>
              <div className="study-sets">
                {studySetCards.length ?
                  <div className="make-your-own">
                    <div className="make-your-own-content">
                      <h1>Make the perfect study set</h1>
                      <Link to="/create-set"><button className="study-set-button">Create your own</button></Link>
                    </div>
                  </div>
                  :
                  null
                }
                <br />
                {studySetCards}
              </div>
              <div className="get-started-button-container">
                <button className="study-set-get-started-button" onClick={this.props.toggleSignUpModal}>Get started</button>
              </div>
              <img className="study-set-junk-1" src="https://quizlet.com/a/i/homepage/decoration-c.CXbw.png"/>
            </div>
          </div>
          <div className="container teacher-and-student-main-container">
            <div className="teacher-student-mission-container">
              <div className="teacher-and-student-row">
                <div className="teacher-column">
                  <div className="study-smarter-container">
                    <h1>Study smarter</h1>
                    <p>More than 95% of students who learn with Quizlet improved their grades. See how Quizlet’s simple tools can help you learn anything, from beginning algebra, to AP US History, to college level econometrics — and beyond.</p>
                    <Link to='/students' className="student-link">I&lsquo;m a student</Link>
                  </div>
                  <div className="teacher-image-container">
                    <img className="teacher-image" src="https://quizlet.com/a/i/homepage/teachers.v2UD.jpg" />
                  </div>
                </div>
                <div className="student-column">
                  <div className="student-image-container">
                    <img className="student-image" src="https://quizlet.com/a/i/homepage/students.ZdrY.jpg" />
                  </div>
                  <div className="share-knowledge-container">
                    <h1>Share knowledge</h1>
                    <p>Keep students engaged and motivated with Quizlet. Create your own classroom sets, collaborate with other teachers, play <span className="quizlet-live">Quizlet Live</span>, and give your students materials to help them learn in a more fun and more efficient way.</p>
                    <Link to='/teachers' className="teacher-link"><span>I&lsquo;m a teacher</span></Link>
                  </div>
                </div>
              </div>
              <div className="mission-info">
                <div className="mission-info-left-col">
                  <h1>Our mission is to help students practice and master whatever they are learning.</h1>
                </div>
                <div className="mission-info-right-col">
                  <p>We do this by making it simple for students and teachers to create and share online learning materials. Quizlet is proud to be the most popular online educational service in the United States, used by more than 20 million students and teachers each month.</p>
                  <p>Starting with a simple online learning tool, Quizlet today offers tools for students to make flashcards, practice spelling, play learning games, test their knowledge, collaborate with other students, and more.</p>
                  <Link to='/mission' className="quizlet-mission-link">Quizlet&lsquo;s Mission</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default connect(function (){return {}},{toggleSignUpModal})(Splash)
