import React, { useState } from "react";
import Header from "./Components/Header";
import CreateArea from "./Components/CreateArea";
import Note from "./Components/Note";
import Count from "./Components/Count";
import Footer from "./Components/Footer";

export default function App() {
  const [notes, setNotes] = useState([]);
  const AddNote = (newNote) => {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  };

  function DeleteNotes(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  }

  return (
    <div>
      <Header />
      <Count
        count={
          notes.length === 0
            ? "Empty"
            : `Showing ${notes.length} Notes in Database`
        }
      />
      <CreateArea onAdd={AddNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={DeleteNotes}
        />
      ))}
      <Footer/>
    </div>
  );
}
