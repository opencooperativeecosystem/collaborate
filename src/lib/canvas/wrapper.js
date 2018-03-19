import React from 'react'
import Component from './index'
import { graphql } from 'react-apollo'
import Plan from '../queries/getPlan'

class CanvasWrapper extends React.Component {
  render () {
    const {loading, error, viewer} = this.props
    return (
        loading ? <strong>Loading...</strong> : (
          error ? <p style={{ color: '#F00' }}>API error</p> : (
           <Component data={viewer} param={this.props.match.params.id} />
        ))
    )
  }
}

export default graphql(Plan, {
  options: (props) => ({ 
    variables: {
      token: localStorage.getItem('token'),
      planId: Number(props.match.params.id)
    }
  }),
  props: ({ ownProps, data: { viewer, loading, error, refetch } }) => {
    return ({
      loading: loading,
      error: error,
      viewer: viewer ? viewer.plan : null
  })}
})(CanvasWrapper)
