import React from 'react';

class UserProfile extends React.Component{
  render(){
    return(
      <div>User Profile
        <p>Username: {this.props.username} </p>
        <p>Bio: {this.props.bio.name}</p>
      </div>
    )
  }
}

UserProfile.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
}

export default UserProfile;
