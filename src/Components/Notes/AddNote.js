import React from 'react';
import ReactDOM from 'react-dom';

class AddNote extends React.Component{
  handleSubmit(){
    var newNote = ReactDOM.findDOMNode(this.refs.note).value;
    ReactDOM.findDOMNode(this.refs.note).value = '';
    this.props.addNote(newNote);
  }
  render(){
    return(
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add a new note" ref="note" />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit.bind(this)}>Submit</button>
        </span>
      </div>
    )
  }
}

AddNote.propTypes = {
  addNote: React.PropTypes.func.isRequired,
  username: React.PropTypes.string.isRequired
}

export default AddNote;
