import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Component from './index'

const plan = gql`
query ($token: String, $id: Int) {
    viewer(token: $token) {
      agent(id: $id) {
        id
        name
        image
        type
        agentRelationships{
          id
          subject {
            name
            image
            id
          }
        }
        ownedEconomicResources {
          resourceClassifiedAs {
            name
            category
          }
          currentQuantity {
            numericValue
            unit {
              name
            }
          }
        }
        agentEconomicEvents(latestNumberOfDays: 30) {
          note
          action
          provider {
            image
            name
          }
          inputOf {
            name
          }
          receiver {
            name
          }
          start
          requestDistribution
          note
          affectedQuantity {
            numericValue
            unit {
              name
            }
          }
        }
        agentPlans {
          name
          id
          note
          due
          plannedOn
          planProcesses {
            isStarted
            isFinished
            name
            workingAgents {
              id
              name
              image
            }
          }
        }
      }
    }
  }
  
`
class AgentWrapper extends React.Component {
  render () {
    const {loading, error, data} = this.props
    return (
      loading ? <strong>Loading...</strong> : (
        error ? <p style={{ color: '#F00' }}>API error</p> : (
        <Component data={data} />
      ))
    )
  }
}

export default graphql(plan, {
  options: (props) => ({ variables: {
    token: localStorage.getItem('token'),
    id: props.match.params.id
  }}),
  props: ({ ownProps, data: { viewer, loading, error, refetch } }) => ({
    loading: loading,
    error: error,
    refetchAgent: refetch,  // :NOTE: call this in the component to force reload the data
    data: viewer ? viewer.agent : null
  })
})(AgentWrapper)
