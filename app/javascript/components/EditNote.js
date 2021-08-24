import React from 'react';

const EditNote = (props) => {
  return (
    <div>
      <h1>Edit Post-It-Note</h1>
      <p>Edit Post-It-Note info below.</p>
      <form action={`/notes/${props.note.id}`} method="post">
        <input type ="hidden" name="_method" value="patch" />
        <p>Title</p>
        <input defaultValue={props.note.title} name="note[title]"/>
        <p>Description</p>
        <input defaultValue={props.note.description} name="note[description]"/>
        <button type="submit">UPDATE NOTE</button>
      </form>
      <a href="/">back to notes</a>
    </div> 
  );
};

export default EditNote;