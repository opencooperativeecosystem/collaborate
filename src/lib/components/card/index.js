import {compose, withHandlers} from 'recompose'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import Card from './card'

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
)(Card)
