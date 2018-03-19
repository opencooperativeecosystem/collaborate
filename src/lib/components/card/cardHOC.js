import {compose, withHandlers} from 'recompose'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import CardTemplate from './cardTemplate'

const editCommittmentNote = gql`
mutation ($token: String!, $id: Int!, $note: String! ) {
    updateCommitment(token: $token, note: $note, id: $id) {
      commitment {
        id
        note
      }
    }
  }
`

export default compose(
  graphql(mutation),
  withHandlers({
      editNote:({_id, _note}) => {
          return () => {
            return mutate({
                variables: {
                    token: localStorage.getItem('token'),
                    id: _id,
                    note: _note
                }
            })
            .then((data) => {
                console.log(data)
            }).catch((e) => {
                console.log(e)
            })
          }
      }
  })
)(CardTemplate)