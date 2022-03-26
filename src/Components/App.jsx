import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import notes from "../notes";

function createCard(card) {
  return <Notes title={card.title} content={card.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createCard)}
      <Footer />
    </div>
  );
}

export default App;
