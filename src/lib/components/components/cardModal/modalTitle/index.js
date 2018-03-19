import { compose, withState, withHandlers } from 'recompose'
import {graphql} from 'react-apollo'
import UpdateCommitmentTitle from '../../../mutations/updateCommitmentTitle'
import ModalTitle from './modalTitle'
import {addFlagAction} from '../../../store/actions/flags'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  state
})

const mapDispatchToProps = dispatch => ({
  addFlag: (data) => {
    dispatch(addFlagAction(data))
  }
})

export default compose(
  graphql(UpdateCommitmentTitle, {
    props: ({mutate, ownProps: {id, note}}) => ({
      mutate: mutate,
      id: id,
      note: note
    })
  }),
  connect(mapStateToProps, mapDispatchToProps),
  withState('isVisible', 'toggleVis', false),
  withHandlers({
    toggleVisibility: ({ toggleVis, isVisible }) => (event) => toggleVis(!isVisible),
    editTitle: ({mutate, id, note, addFlag}) => (event) => mutate({
      variables: {
        token: localStorage.getItem('token'),
        id: id,
        note: event.target.value
      }
    })
    .then(data => console.log(data))
    .catch(e => addFlag({
      title: 'Not authorized',
      message: 'You do not have the permission to edit the commitment note'
    }))
  })
)(ModalTitle)

