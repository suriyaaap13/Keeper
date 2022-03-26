import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((card) => (
        <Notes key={card.key} title={card.title} content={card.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
