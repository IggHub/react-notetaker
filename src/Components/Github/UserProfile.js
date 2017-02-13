import React from 'react';

class UserProfiles extends React.Component{
  render(){
    return(
      <div>User Profile
        <p>Username: {this.props.username} </p>
        <p>Bio: {this.props.bio.name}</p>
      </div>
    )
  }
}

export default UserProfiles;
