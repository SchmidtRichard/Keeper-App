import React from "react";

function Note(props) {

    {/*
        2. Implement the delete note functionality.
        Callback from the Note component to trigger a delete function.

        Get the delete button to trigger a function in the App.jsx (deleteNote(id))
        and we need the props to do it, inside the function we will
        to trigger a function that gets passed over from the props that
        will delete this note from the array
        */}
    function handleClick(){
        props.onDelete(props.id)
    }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>

        {/*
        2. Implement the delete note functionality.
        Callback from the Note component to trigger a delete function.

        Get the delete button to trigger a function in the App.jsx
        and we need the props to do it
        */}
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
