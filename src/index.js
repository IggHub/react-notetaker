import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import Main from './Components/Main';
import Home from './Components/Home';
import Profile from './Components/Profile';
import {Router, Route, Link, IndexRoute} from 'react-router';
import * as firebase from 'firebase';
import Rebase from 're-base';

var config = {
  apiKey: "AIzaSyA7SIMcL06ICRoe7pqCuwp7YB9Ix9o4zq4",
  authDomain: "react-notaker.firebaseapp.com",
  databaseURL: "https://react-notaker.firebaseio.com",
  storageBucket: "react-notaker.appspot.com",
  messagingSenderId: "402654997367"
};

//firebase.initializeApp(config);

ReactDOM.render(
  <Router>
    <Route path="/" components={Main}>
      <IndexRoute components={Home} />
      <Route path="profile/:username" components={Profile} />
    </Route>
  </Router>,
  document.getElementById('root')
);
