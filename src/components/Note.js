import React, { useState} from 'react'

const Notes = () => {
    const [notes, setNotes] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const addNote = () => {
      const newNote = "random";
      setNotes(n => [...n, newNote]);
    };
    return (
      <div>
      <h1>Button:</h1>
      {notes.map((note, index) => (
        <p key={index}>{note}</p>
      ))}
      </div>
    );
   };
   

export default Notes
