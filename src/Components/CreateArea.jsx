import React, { useState } from "react";

function CreateArea(props) {
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
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={content.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <textarea
          name="note"
          value={content.note}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          required
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
