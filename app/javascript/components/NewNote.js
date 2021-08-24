import React from 'react';

const NewNote = () => {
  return (
    <div>
      <h1>New Post-It-Note</h1>
      <p>Enter new Post-It-Note info below.</p>
      <form action="/notes" method="post">
        <p>Title</p>
        <input name="note[title]"/>
        <p>Description</p>
        <input name="note[description]"/>
        <button type="submit">ADD NOTE</button>
      </form>
    </div> 
  );
};

export default NewNote;