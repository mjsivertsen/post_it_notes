import React from 'react';

const Notes = (props) => {
  return (
    <div>
    <h1>Post-It-Notes</h1>
    <p>Post-It-Notes might be found here</p>
    <a href="/notes/new">create new note</a>
    {props.notes.map((note) => {
      return (
      <div style={{margin: "20px", border: "2px solid"}} key={note.id}>
        <p>ID: {note.id}</p>
        <p>{note.title}</p>
        <p>{note.description}</p>
        <div>
          <a href={`/notes/${note.id}`}>view note</a>
          <a href={`/notes/${note.id}/edit`}>edit note</a>
          <a href={`/notes/${note.id}`} data-method="delete">delete note</a>
        </div>
      </div>
      );
    }
    )}
  </div>
  );
};

export default Notes;