import React from 'react';

const Note = (props) => {
  return (
   <div>
     <p>{props.note.title}</p>
     <p>{props.note.description}</p>
   </div>
  );
};

export default Note;