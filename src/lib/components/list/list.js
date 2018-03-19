import React, {Component} from 'react'
import ListTemplate from './listTemplate'
// import NewCommitment from '../mutations/CreateCommitment'

class List extends Component {
  constructor (props) {
    super(props)
    this.setTitle = this.setTitle.bind(this)
    this.openCardController = this.openCardController.bind(this)
    this.updateNewCardTitle = this.updateNewCardTitle.bind(this)
    this.addCardToList = this.addCardToList.bind(this)
    this.state = {
      setTitle: false,
      cardController: false,
      newCardTitle: ''
    }
  }

  openCardController () {
    this.setState({
      ...this.state,
      newCardTitle: '',
      cardController: !this.state.cardController
    })
  }

  updateNewCardTitle (e) {
    this.setState({
      ...this.state,
      newCardTitle: e.target.value
    })
  }

  setTitle () {
    this.setState({
      ...this.state,
      setTitle: !this.state.setTitle
    })
  }


  addCardToList () {
    this.openCardController()
    this.props.addCardToList(this.state.newCardTitle, this.props.id)
    this.props.mutate({variables: {action: 'work', note: this.state.newCardTitle, scopeId: 2, committedNumericValue: "1", committedResourceClassificationId: 17, providerId: 64,  due: '2017-10-10', committedUnitId: 2 }})
  }

  render () {
    const {name, agents, id, updateProcess, actionPopup, actionPopupId, toggleActions, toggleActionPopupId, moveCard, cards, outputs, status, openModal, info, connectDropTarget} = this.props
    const {setTitle, cardController, newCardTitle} = this.state
    return connectDropTarget(
      <span>
        <ListTemplate
          key={id}
          agents={agents}
          outputs={outputs}
          setTitle={setTitle}
          name={name}
          status={status}
          info={info}
          id={id}
          updateProcess={updateProcess}
          cards={cards}
          openModal={openModal}
          moveCard={moveCard}
          openCardController={this.openCardController}
          cardController={cardController}
          addCardToList={this.addCardToList}
          updateNewCardTitle={this.updateNewCardTitle}
          newCardTitle={newCardTitle}
          actionPopup={actionPopup}
          actionPopupId={actionPopupId}
          toggleActions={toggleActions}
          toggleActionPopupId={toggleActionPopupId}
        />
      </span>
    )
  }
}

export default List

