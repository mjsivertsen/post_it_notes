import React from 'react';

const Note = (props) => {
  return (
   <div>
     <h2>{props.note.title}</h2>
     <h3>{props.note.description}</h3>
     <a href="/">back to notes</a>
   </div>
  );
};

export default Note;