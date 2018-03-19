import React from 'react'
import CardTemplate from './cardTemplate'

const Card = (props) => {
  const {id, listId, openModal, percentage, isDragging, name, note, editNote, members, due} = props
  return (
    <div><CardTemplate action={() => openModal(id, listId)} isDragging={isDragging} percentage={percentage} name={name} members={members} due={due} note={note || 'Add new description...'} editNote={editNote} /></div>
  )
}

export default Card
