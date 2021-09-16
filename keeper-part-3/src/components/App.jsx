import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    /*
    1. Implement the add note functionality.
        In the app component - Add new note to an array.

        The array will need state because it's going to be changed
        the initial value for the notes will be an empty array
     */
    const [notes, setNotes] = useState([]);

    /*
    1. Implement the add note functionality.
    Pass the new note back to the App component

    Trigger a function (addNote) that can pass the note back
    over to the App.jsx we have to pass in a function
    as a prop to do that, it will receive a note object
    and will do something with the object

    the addNote will be added as a value to one of the
    props for the CreateArea (onAdd) and we will
    set it equal to addNote

    the value of newNote comes from CreateArea.jsx from the
    function submitNote(event)...
    */
    function addNote(newNote){
        console.log(newNote);

        /*
    1. Implement the add note functionality.
        In the app component - Add new note to an array.

        add to the notes array
        inside the setNotes function we can get hold of the
        previous notes or whatever is the previous value of
        the notes array
     */
        setNotes(prevNotes => {
        /*
        Use the spread operator to add to the notes arrays so
        that we get hold of all of the previous notes and then
        add the new note at the end

        the value of newNote comes from CreateArea.jsx from the
        function submitNote(event)...
         */
            return [...prevNotes, newNote];
        });
    }

  return (
    <div>
      <Header />
      <CreateArea

          /*
            1. Implement the add note functionality.
            Pass the new note back to the App component

            Trigger a function (addNote) that can pass the note back
            over to the App.jsx we have to pass in a function
            as a prop to do that, it will receive a note object
            and will do something with the object

            the addNote will be added as a value to one of the
            props for the CreateArea (onAdd) and we will
            set it equal to addNote
            */
          onAdd={addNote}
          />

      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
