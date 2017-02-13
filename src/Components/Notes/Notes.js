import React from 'react';

class Notes extends React.Component{
  render(){
    return(
      <div>
        <p>Notes</p>
        <p>{this.props.notes}</p>
      </div>
    )
  }
}

export default Notes;
