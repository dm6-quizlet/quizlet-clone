import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import store from './store'
import {Provider} from 'react-redux'
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

document.addEventListener('DOMContentLoaded', () => {
  const reactNode = document.getElementById('root')

  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <Route component={App} />
      </Provider>
    </BrowserRouter>
    ,
    reactNode
  )
})
