import React from 'react';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import Rebase from 're-base';
import helpers from '../utils/helpers';

var base = Rebase.createClass({
  apiKey: "AIzaSyA7SIMcL06ICRoe7pqCuwp7YB9Ix9o4zq4",
  authDomain: "react-notaker.firebaseapp.com",
  databaseURL: "https://react-notaker.firebaseio.com",
  storageBucket: "react-notaker.appspot.com",
});

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: [],
      bio: {},
      repos: []
    }
  }
  componentDidMount(){
    base.syncState(this.props.params.username, {
      context: this,
      state: 'notes',
      asArray: true
    });
    helpers.getGithubInfo(this.props.params.username)
      .then(function(data){
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
      }.bind(this))
  }
  componentWillUnmount(){
    //this.unbind('notes');
    base.removeBinding(this.ref);
  }
  handleAddNote(newNote){
    this.setState({
      notes: this.state.notes.concat(newNote)
    })
  }
  render(){
    var username = this.props.routeParams.username;
    //console.log('notes from Profile: ',this.state.notes)
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos username={username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes
            username={username}
            notes={this.state.notes}
            addNote={this.handleAddNote.bind(this)}
             />
        </div>
      </div>
    )
  }
};

export default Profile;
