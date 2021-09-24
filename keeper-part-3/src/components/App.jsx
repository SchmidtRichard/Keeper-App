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

    {/*
        2. Implement the delete note functionality.
        Callback from the Note component to trigger a delete function.

        Get the delete button to trigger a function in the App.jsx
        and we need the props to do it, inside the function we will
        to trigger a function that gets passed over from the props that
        will delete this note from the array

        deleteNote function - we will need the id of the note
        that needs to be deleted, then this function will be
        passed over to each of these notes that gets rendered
        on the below code - {notes.map(noteItem... - as a property
        */}
    function deleteNote(id){
        console.log("Delete was triggered");

        /*
        Once we have access to all of the previous notes array
        we can loop through it using the filter function
         */
        setNotes(prevNotes =>  {
            /*
            the filter function can take up to 3 arguments
            1st - value that we are currently looping through in the array (noteItem)
            2nd - the index of the noteItem
             */
            return prevNotes.filter((noteItem, index) => {
                /*
                return all of the notes where the index is not equal to the
                id of the note that needs to be deleted

                This way we should end up with an array that contains everything
                in the prevNotes other than the ones where the index matches the id
                of the note to be deleted

                the last thing to do is to pass over the index of the note
                that is being deleted through this deleteNote function
                 */
                return index !== id;
            })
        })
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

        {/*
        1. Implement the add note functionality.
        Take array and render separate Note components for each item.

        Use the notes array and map through it to render a different note
        component for each item inside the array

        the map will take an arrow function, and for each of the noteItem 
        inside the notes array, then return a new note component and
        this note component will need some properties (title, content)
        passed over

        add curly braces around the code below for it to be recognized as JS code
        */}
        { notes.map((noteItem, index) => {
        return <Note

            /*
            2. Implement the delete note functionality.
            Pass a id over to the Note component, pass it back to the App when deleting,
            in order to identify the Note that needs to be removed from the array
            */
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}

            onDelete={deleteNote}
        />
    })}

      <Footer />
    </div>
  );
}

export default App;
