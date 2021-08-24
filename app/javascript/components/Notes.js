import React from 'react';

const Notes = (props) => {
  return (
    <div>
    <h1>Post-It-Notes</h1>
    <p>Post-It-Notes might be found here</p>
    {props.notes.map((note) => {
      return (
      <div key={note.id}>
        <p>{note.title}</p>
        <p>{note.description}</p>
      </div>
      );
    }
    )}
  </div>
  );
};

export default Notes;