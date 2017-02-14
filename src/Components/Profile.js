import React from 'react';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
//import * as firebase from 'firebase';
import Rebase from 're-base';


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
      notes: [1,2,3],
      bio: {},
      repos: []
    }
  }
/*  init(){
    const rootRef = firebase.database().ref();
    console.log('borillo: ', rootRef);
    const userRef = this.props.params.username;
    console.log('userRef: ', userRef)
    const childRef = rootRef.child(userRef);
    this.setState({
      notes: childRef
    })
  }
*/
  componentDidMount(){
    base.syncState(this.props.params.username, {
      context: this,
      state: 'notes',
      asArray: true
    })
  }
  componentWillUnmount(){
    //this.unbind('notes');
    base.removeBinding(this.ref);
  }
  componentWillReceiveProps(){

  }

  render(){
    var username = this.props.routeParams.username;
    console.log('notes from Profile: ',this.state.notes)
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
             />
        </div>
      </div>
    )
  }
};


export default Profile;
