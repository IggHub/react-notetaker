import React from 'react';

class UserProfile extends React.Component{
  render(){
    console.log('bio: ', this.props.bio)
    return(
      <div>User Profile
        <p>Username: {this.props.username} </p>

      </div>
    )
  }
}

UserProfile.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
}

export default UserProfile;
