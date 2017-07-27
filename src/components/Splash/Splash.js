import React, { Component } from "react";
import './Splash.css'

class Splash extends Component {
  render() {
    return (
      <div>
        <div className="splash-container">
          <div className="container simple-tools-container">
            <div className="row">
              <div className="col-xs-12 col-md-6 col-md-6 simple-tools-content">
                <h1>Simple tools for learning anything.</h1>
                <p>Search millions of study sets or create your own. Improve your grades by studying with flashcards, games and more.</p>
                <button>Get Started</button>
              </div>
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
                    <p className="learn-more">Learn More</p>
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
                <div className="make-your-own">
                  <div className="make-your-own-content">
                    <h1>Make the perfect study set</h1>
                    <button className="study-set-button">Create your own</button>
                  </div>
                </div>
                <br />
                <div className="study-set-card"></div>
                <div className="study-set-card"></div>
                <div className="study-set-card"></div>
                <div className="study-set-card"></div>
                <div className="study-set-card"></div>
                <div className="study-set-card"></div>
                <div className="study-set-card"></div>
                <div className="study-set-card"></div>
                <div className="study-set-card"></div>
                <div className="study-set-card"></div>
                <div className="study-set-card"></div>
                <div className="study-set-card"></div>
              </div>
              <div className="get-started-button-container">
                <button className="study-set-get-started-button">Get started</button>
              </div>
              <img className="study-set-junk-1" src="https://quizlet.com/a/i/homepage/decoration-c.CXbw.png"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Splash
