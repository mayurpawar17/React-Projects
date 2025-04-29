import React from "react";
import "../assets/styles/noteCard.css";

export const NoteCard = (notes) => {
  return (
    <div className="note-card">
      <h2 className="note-title">{notes.title}</h2>
      <p className="note-content">{notes.content}</p>
    </div>
  );
};
