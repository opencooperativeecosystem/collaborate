import React from 'react'
import List from '../list'
import style from './canvas.css'

class StatusFlow extends React.Component {
  render () {
    return (
            <div className={style.board}>
              <div className={style.board_panels}>
                <List
                  name={'Todo'}
                  cards={this.props.cards.filter(card => card.wip === false)}
                  id={1}
                  info={[]}
                  outputs={[]}
                  agents={[]}
                  removeCardFromList={this.props.removeCardFromList}
                  addCardToList={this.props.addCardToList}
                  moveCard={this.props.moveCard}
                  swipeCard={this.props.swipeCard}
                  openModal={this.props.openModal}
                  /* MUTATIONS */
                  addNewTask={this.props.addNewTask}
                />
                <List
                  cards={this.props.cards.filter(card => card.wip === true)}
                  id={2}
                  info={[]}
                  outputs={[]}
                  agents={[]}
                  name={'Doing'}
                  removeCardFromList={this.props.removeCardFromList}
                  addCardToList={this.props.addCardToList}
                  moveCard={this.props.moveCard}
                  swipeCard={this.props.swipeCard}
                  openModal={this.props.openModal}
                  /* MUTATIONS */
                  addNewTask={this.props.addNewTask}
                />
                <List
                  cards={this.props.cards.filter(card => card.isFinished === true)}
                  id={3}
                  info={[]}
                  outputs={[]}
                  agents={[]}
                  name={'Done'}
                  removeCardFromList={this.props.removeCardFromList}
                  addCardToList={this.props.addCardToList}
                  moveCard={this.props.moveCard}
                  swipeCard={this.props.swipeCard}
                  openModal={this.props.openModal}
                  /* MUTATIONS */
                  addNewTask={this.props.addNewTask}
                />
              </div>
            </div>
    )
  }
}

export default StatusFlow
