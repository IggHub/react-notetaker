import React from 'react';
import Router from 'react-router';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import ReactFire from 'reactfire';
import Firebase from 'firebase';

class Profile extends React.Component{
  constructor(){
    super();
    this.state = {
      notes: ['noteA', 'noteB', 'noteC'],
      bio: {
        name: 'Iggy'
      },
      repos: ['a','b','c']
    }
  }
  componentDidMount(){
    var Rebase = require('re-base');
    var base = Rebase.createClass({
      apiKey: "AIzaSyA7SIMcL06ICRoe7pqCuwp7YB9Ix9o4zq4",
      authDomain: "react-notaker.firebaseapp.com",
      databaseURL: "https://react-notaker.firebaseio.com",
      storageBucket: "react-notaker.appspot.com",
      messagingSenderId: "402654997367"
    }, 'react-notetaker');
    var childRef = this.ref.child(this.props.name.username);
    this.bindAsArray(childRef, 'notes')
  }
  componentWillUnmount(){
    this.unbind('notes');
  }
  render(){
    console.log(this.props);
    return(
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.username} notes={this.state.notes} />
        </div>
      </div>
    )
  }
}

export default Profile;
