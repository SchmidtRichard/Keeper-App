import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

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
    function addNote(note){
        console.log(note);
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
