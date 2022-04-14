import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [content, setContent] = useState({
    title: "",
    note: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setContent((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function handleSubmit(event) {
    props.onAdd(content);
    setContent({
      title: "",
      note: ""
    });
    event.preventDefault();
  }
  function handleExpand() {
    setExpanded(true);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="create-note">
        {isExpanded && (
          <input
            name="title"
            value={content.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
        )}
        <textarea
          name="note"
          value={content.note}
          onClick={handleExpand}
          onChange={handleChange}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          required
        />
        {/* <button>
          <AddIcon />
        </button> */}
        <Zoom in={isExpanded}>
          <Fab>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
