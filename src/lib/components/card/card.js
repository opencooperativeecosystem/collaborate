import React from 'react'
import CardTemplate from './cardTemplate'

const Card = (props) => {
  const {connectDragSource, id, listId, openModal, connectDropTarget, percentage, isDragging, name, note, editNote, members, due} = props
  return connectDragSource(connectDropTarget(
    <div><CardTemplate action={() => openModal(id, listId)} isDragging={isDragging} percentage={percentage} name={name} members={members} due={due} note={note || 'Add new description...'} editNote={editNote}/></div>
  ))
}

export default Card
