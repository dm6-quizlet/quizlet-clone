import React, { Component } from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Splash from './components/Splash/Splash'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          {/*}<Route exact path='/' component={Splash}/>*/}
        </Switch>
      </div>
    );
  }
}

export default App;
