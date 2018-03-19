import {compose, withState, withHandlers} from 'recompose'
import Component from './listTemplate'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

const createCommitment = gql`
mutation ($token: String!, $action: String! , $due: String!, $note: String, $committedResource: Int, $committedNumeric: String, $committedUnit; Int, $inputOf: Int, $planId: Int) {
    createCommitment(
      token: $token,
      action: $action,
      due: $due,
      note: $note,
      committedResourceClassifiedAsId: $committedResource ,
      committedNumericValue: $committedNumeric,
      committedUnitId: $committedUnit,
      inputOfId: $inputOf,
      planId: $planId
    ) {
      commitment {
        id
      }
    }
  }
`

export default compose(
    graphql(createCommitment, {
      props: ({mutate, ownProps: {id}}) => ({
        id, mutate
      })
    }),
    withState('actionPopup', 'toggleActionPopup', false),
    withState('actionPopupId', 'toggleActionPopupId', null),
    withHandlers({
      toggleActions: (props) => (id) => {
        props.toggleActionPopupId(id)
        props.toggleActionPopup()
      },
      deleteEvent: ({mutate}) => (id) => {
        return (
          mutate({
            variables: {
              token: localStorage.getItem('token'),
              id: id
            }
          })
          .then((data) => console.log('cancellados'))
          .catch((e) => console.log(e))
        )
      }
    })
  )(Component)
