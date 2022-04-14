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
  return (
    <div>
      <Header />
      <CreateArea onAdd={addContent} />
      {content.map((item, index) => {
        return <Note key={index} title={item.title} content={item.note} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
