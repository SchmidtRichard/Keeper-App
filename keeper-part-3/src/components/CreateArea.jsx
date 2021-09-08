import React, {useState} from "react";

function CreateArea() {

    /*
    1. Implement the add note functionality.
        - Create a constant that keeps track of the title and content.

     Save what's typed into the input under title and content
     */

    //Create the state for the constants - create an object that contains title and content
    const [note, setNote] = useState({
       //The initial state will be an object with a title and content key set to an empty string each
        title: "",
        content: ""
    });

    /*
    Receive an event when it gets triggered, and we'll destructure the event so
    that we get hold of the event.target name and value so we create
    a new destructured object using the const keyword and this destructured object
    will tap into the event.target.name and event.target.value
     */
    function handleChange(event){
        const {name, value} = event.target;
        /*
        Now name and value can be used as separate constants and we can
        add to the note by calling setNote. setNote will receive the previous note
        and we will use that to add to the existing note, so we return a new object
        with the previous note (prevNote) and in addition we will add the new
        name and value
         */
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

  return (
    <div>
      <form>
        <input
            /*
            onChange - Now that we got the inputs controlled, the next step is to update them when they get changed
            inside the onChange call a function (handleChange), and then we can pass it in as the onChange
            */
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title" />
        <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows="5" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
