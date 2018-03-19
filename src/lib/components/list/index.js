import { DropTarget } from 'react-dnd'

import {CardTypes} from '../constants/card'
import List from './list'
import {compose, withState, withHandlers} from 'recompose'
// import Component from './listTemplate'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import Plan from '../queries/getPlan'

const cardTarget = {
  drop (props, monitor, component) {
    const nextListId = props.id
    const cardId = monitor.getItem().id
    const currentListId = monitor.getItem().listId

    if (nextListId === currentListId) {
      return
    }
    // props.removeCardFromList(cardId, currentListId)
    props.swipeCard(cardId, currentListId, nextListId)
  }
}

function dropCollect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOVer: monitor.isOver()
  }
}

const updateProcess = gql`
mutation ($token: String!, $id: Int!, $isFinished: Boolean ) {
  updateProcess(
    token: $token, 
    id: $id, 
    isFinished: $isFinished
  ) {
    process {
      processPlan {
        id
      }
      id
      name
      isFinished
    }
  }
}`

const enhancedList = compose(
    graphql(updateProcess, {
      props: ({mutate, ownProps: {id}}) => ({
        updateProcessMutation: mutate
      })
    }),
    withState('actionPopup', 'toggleActionPopup', false),
    withState('actionPopupId', 'toggleActionPopupId', null),
    withState('processStatus', 'toggleProcessStatus', props => props.status),
    withHandlers({
      toggleActions: (props) => (id) => {
        props.toggleActionPopupId(id)
        props.toggleActionPopup(!props.actionPopup)
      },
      updateProcess: ({updateProcessMutation, id}) => (status) => {
        return (
          updateProcessMutation({
            variables: {
              token: localStorage.getItem('token'),
              id: id,
              isFinished: status
            },
            update: (store, {data}) => {
              let planProcessesCache = store.readQuery({query: Plan, 
                variables: {
                  token: localStorage.getItem('token'),
                  planId: Number(data.updateProcess.process.processPlan.id)
                }})
              
              const processToUpdateIndex = planProcessesCache.viewer.plan.planProcesses.findIndex(proc => proc.id === data.updateProcess.process.id)
              planProcessesCache.viewer.plan.planProcesses[processToUpdateIndex].isFinished = data.updateProcess.process.isFinished
              store.writeQuery({ query: Plan,
                variables: {
                  token: localStorage.getItem('token'),
                  planId: Number(data.updateProcess.process.processPlan.id)
                },
                data: planProcessesCache })
            }
          })
          .then((data) => console.log('cancellados'))
          .catch((e) => console.log(e))
        )
      }
    })
  )(List)

export default DropTarget(CardTypes.CARD, cardTarget, dropCollect)(enhancedList)
