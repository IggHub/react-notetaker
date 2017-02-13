import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import Main from './Components/Main';
import Home from './Components/Home';
import Profile from './Components/Profile';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

ReactDOM.render(
  <Router>
    <Route path="/" components={Main}>
      <IndexRoute components={Home} />
      <Route path="profile/:username" components={Profile} />
    </Route>
  </Router>,
  document.getElementById('root')
);
