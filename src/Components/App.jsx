import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Notes";
import CreateArea from "./CreateArea";

function App() {
  const [content, setContent] = useState([]);
  function addContent(value) {
    setContent((prevValue) => {
      return [...prevValue, value];
    });
  }

  function deleteItem(id) {
    setContent((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addContent} />
      {content.map((item, index) => {
        return (
          <Note
            onChecked={deleteItem}
            key={index}
            id={index}
            title={item.title}
            content={item.note}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
