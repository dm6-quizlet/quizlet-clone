import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Nav from './components/Nav/Nav'
import Splash from './components/Splash/Splash'
import Dashboard from './components/Dashboard/Dashboard'
import CreateStudySet from './components/CreateStudySet/CreateStudySet'
import QuizletLearn from './components/QuizletLearn/QuizletLearn'
import Students from './components/Students/Students'
import Teachers from './components/Teachers/Teachers'
import Mission from './components/Mission/Mission'
import Match from './components/Match/Match'
import Flashcard from './components/Flashcard/Flashcard'
import StudySet from './components/StudySet/StudySet'
import Subject from './components/Subject/Subject'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Splash} />
          <Route exact path='/create-set' component={CreateStudySet}/>
          <Route exact path='/splash' component={Splash}/>
          <Route exact path='/quizletLearn' component={QuizletLearn} />
          <Route exact path='/students' component={Students} />
          <Route exact path='/teachers' component={Teachers} />
          <Route exact path='/mission' component={Mission} />
          <Route exact path='/study-set/match' component={Match} />
          <Route exact path='/study-set/flashcards' component={Flashcard} />
          <Route exact path='/study-set' component={StudySet} />
          <Route exact path='/subject' component={Subject} />
          <Route path="/:username" render={({match}) => {
            if (this.props.userId && match.params.username === this.props.username) {
              return <Dashboard />
            } else {
              return <Redirect to="/" />
            }
          }} />
        </Switch>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    userId: state.auth.user.id,
    username: state.auth.user.username
  }
}
export default connect(mapStateToProps)(App);
