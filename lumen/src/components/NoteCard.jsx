import React from 'react'
import '../assets/styles/noteCard.css'

export const NoteCard = ({title,content}) => {
  return (
    <div className="note-card">
    <h2 className="note-title">{title}</h2>
    <p className="note-content">{content}</p>
  </div>

  )
}
