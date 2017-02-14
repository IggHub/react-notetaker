import React from 'react';
import NotesList from './NotesList';

class Notes extends React.Component{
  render(){
    console.log('Notes from Notes: ', this.props.notes);
    return(
      <div>
        <p>Notes</p>
        <NotesList notes={this.props.notes} />
      </div>
    )
  }
}

export default Notes;
