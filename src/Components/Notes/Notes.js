import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

const Notes = ({addNote, username, notes}) => {
  return(
    <div>
      <p>Notes</p>
      <AddNote addNote={addNote} username={username} />
      <NotesList notes={notes} />
    </div>
  )
}

Notes.propTypes = {
  notes: React.PropTypes.array.isRequired,
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired
}
export default Notes;
