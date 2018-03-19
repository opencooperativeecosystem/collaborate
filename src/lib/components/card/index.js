import React from 'react'
import {CardTypes} from '../constants/card'
import { DragSource, DropTarget } from 'react-dnd'
import { findDOMNode } from 'react-dom'
import {compose, withHandlers} from 'recompose'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import Card from './card'

const cardSource = {
  beginDrag (props) {
    return {
      id: props.id,
      listId: props.listId,
      index: props.index,
      card: props
    }
  }
}

const cardTarget = {
  hover (props, monitor, component) {
    const dragIndex = monitor.getItem().index
    const hoverIndex = props.index
    const sourceListId = monitor.getItem().listId
    
    // Don't replace items with themselves
    if (dragIndex === hoverIndex) { return }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

    // Determine mouse position
    const clientOffset = monitor.getClientOffset()

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) { return }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) { return }
      // Time to actually perform the action
      props.moveCard(dragIndex, hoverIndex, sourceListId)
      monitor.getItem().index = hoverIndex
  }
}

function collect (connect, monitor) {
  return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
  }
}

function dropCollect (connect) {
    return {
      connectDropTarget: connect.dropTarget(),
    }
}

const updateCommitment = gql`
mutation ($token: String!, $id: Int!, $note: String, $due: String, $isFinished: Bool ) {
    updateCommitment(token: $token, note: $note, id: $id, due: $due, isFinished:$isFinished ) {
      commitment {
        id
        note
        isFinished,
        due
      }
    }
  }
`

export default compose(
  graphql(updateCommitment),
  withHandlers({
      editNote:({mutate, id, newNote}) => {
          return () => {
            return mutate({
                variables: {
                    token: localStorage.getItem('token'),
                    id: id,
                    note: newNote
                }
            })
            .then((data) => {
                console.log(data)
            }).catch((e) => {
                console.log(e)
            })
          }
      }
  }),
  DropTarget(CardTypes.CARD, cardTarget, dropCollect),
  DragSource(CardTypes.CARD, cardSource, collect)
)(Card)
