/* 
* MOVE CARD INSIDE A LIST 
*/
import update from 'react/lib/update'

const moveCard = (lists, dragIndex, hoverIndex, currentListId) => {
    let currentList = lists.find(x => x.id === currentListId)
    const dragCard = currentList.cards[dragIndex]
    const listIndex = lists.map(x => x.id).indexOf(currentListId)
    let newState = update(lists, {
      [listIndex]: {
        cards: {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard]
          ]
        }
      }
    })
    return newState
  }

/* 
* REMOVE CARD INSIDE A LIST 
*/
const removeCardFromList = (lists, cardId, currentListId) => {
    let list = lists.find(x => x.id === currentListId)
    const listIndex = lists.map(x => x.id).indexOf(currentListId)
    let cardIndex = list.cards
    .map(x => x.id)
    .indexOf(cardId)
    let newState = update(lists, {
      [listIndex]: {
        cards: {
          $splice: [
            [cardIndex, 1]
          ]
        }
      }
    })
    return newState
  }

/* 
* MOVE CARD FROM A LIST TO ANOTHER
*/
const swipeCard = (lists, cardId, currentListId, nextListId) => {
    let list = lists.find(x => x.id === currentListId)
    const listIndex = lists.map(x => x.id).indexOf(currentListId)
    let cardIndex = list.cards
    .map(x => x.id)
    .indexOf(cardId)
    let card = list.cards.find(x => x.id === cardId)
    const nextListIndex = lists.map(x => x.id).indexOf(nextListId)
    let newState = update(lists, {
      [listIndex]: {
        cards: {
          $splice: [
            [cardIndex, 1]
          ]
        }
      },
      [nextListIndex]: {
        cards: {
          $push: [card]
        }
      }
    })
    return newState
}

const cardDnDServices = {
    move: moveCard,
    swipe: swipeCard,
    remove: removeCardFromList
}

export default cardDnDServices