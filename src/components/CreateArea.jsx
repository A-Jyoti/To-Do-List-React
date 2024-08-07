import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom'

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });


  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
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

  const [isPressed, setIsPressed] = useState(false);

  function pressing(){
    setIsPressed(true);
  }
 
  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Task"
          hidden={isPressed===false? true : false}
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="What to do..."
          onClick={pressing}
          rows={isPressed === false ? "1":"3"}
        />
        <Zoom in= {isPressed===false? false : true}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
