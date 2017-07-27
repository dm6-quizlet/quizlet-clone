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
        </div>
      </div>
    )
  }
}

export default Splash
