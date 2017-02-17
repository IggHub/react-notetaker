import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

class Notes extends React.Component{
  render(){
    //console.log('Notes from Notes: ', this.props.notes);
    return(
      <div>
        <p>Notes</p>
        <AddNote addNote={this.props.addNote} username={this.props.username} />
        <NotesList notes={this.props.notes} />
      </div>
    )
  }
}

Notes.propTypes = {
  notes: React.PropTypes.array.isRequired,
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired
}
export default Notes;
