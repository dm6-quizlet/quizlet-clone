import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

document.addEventListener('DOMContentLoaded', () => {
  const reactNode = document.getElementById('root')

  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
    reactNode
  )
})
