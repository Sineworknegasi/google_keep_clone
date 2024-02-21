import React, { useState } from "react";
import Header from "./Components/Header";
import CreateArea from "./Components/CreateArea";
import Note from "./Components/Note";

export default function App() {
  const [notes, setNotes] = useState([]);
  const AddNote = (newNote) => {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  };

  function DeleteNotes(id){
    setNotes(preValue => {
      return [...preValue.filter((note, index) => index !== id)]
    })
  }

  return (
    <div>
      <Header />
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
    </div>
  );
}
