import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Users from './users';
import Contacts from './contacts';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';


const myRoutes = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/users" component={App} />
      <Route path="/contacts" component={App} />

    </div>
  </Router>
)

ReactDOM.render (
  myRoutes,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
