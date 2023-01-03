import React from 'react';
import uuid from "react-uuid";
import './styles/style.css';
import AppCard from './components/AppCard.jsx';

function App() {

  const [notes, setNotes] = React.useState([]);
  const onAddNote = () => {
    const newNote = {
      id: uuid()
    }
    setNotes([newNote, ...notes]);
  }

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  }

  return (
    <div className="body_container">
      <AppCard notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote}/>
    </div>
  );
}

export default App;