import React from 'react'
import Canvas from './canvas/wrapper'
// import Agent from './agent/wrapper'
import App from './App'
import {Route} from 'react-router-dom'

const Work = ({match}) => (
  <div>
    <Route exact path={match.url} component={App} />
    {/* <Route path={`${match.url}/agent/:id`} component={Agent} /> */}
    <Route path={`${match.url}/canvas/:id`} component={Canvas} />
  </div>
)

export default Work
