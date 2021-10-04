import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    /*
    hold the state for the material ui zoom functionality
    check if the create area is expanded
     */
    const [isExpanded, setExpanded] = useState(false);


    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    /*
    hold the state for the material ui zoom functionality
    check if the create area is expanded
     */
    function expand(){
        /*
        set setExpanded to true when called
         */
        setExpanded(true);

    }

    return (
        <div>
            <form className="create-note">
                { isExpanded ? <input
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title"
                        autoFocus={true}
                    /> : null }

                <textarea
                    name="content"

                    /*
                    hold the state for the material ui zoom functionality
                    check if the create area is expanded
                     */
                    onClick={expand}

                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isExpanded ? 5 : 1}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
