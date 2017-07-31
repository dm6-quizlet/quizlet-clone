import React, { Component } from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Splash from './components/Splash/Splash'
import Dashboard from './components/Dashboard/Dashboard'
import SignUpModal from './components/SignUpModal/SignUpModal'
import CreateStudySet from './components/CreateStudySet/CreateStudySet'
import SignInModal from './components/SignInModal/SignInModal'
import QuizletLearn from './components/QuizletLearn/QuizletLearn'
import Students from './components/Students/Students'
import Teachers from './components/Teachers/Teachers'
import Mission from './components/Mission/Mission'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Splash}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/create-set' component={CreateStudySet}/>
          <Route exact path='/splash' component={Splash}/>
          <Route exact path='/quizletLearn' component={QuizletLearn} />
          <Route exact path='/students' component={Students} />
          <Route exact path='/teachers' component={Teachers} />
          <Route exact path='/mission' component={Mission} />
        </Switch>
      </div>
    );
  }
}

export default App;
