import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import style from './App.css'
import {Link} from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Cards from './components/cards'

const Lists = (props) => {
  const {viewer, loading, error} = props.data
  return (
    loading ? <strong>Loading...</strong> : (
    error ? <p style={{ color: '#F00' }}>API error</p> : (
      <section className={style.agent}>
      <Tabs selectedTabClassName={style.list_active}>
      <div className={style.agent_sidebar_wrapper}>
        <div className={style.agent_sidebar}>
          <h1>Your Network</h1>
          <ul className={style.sidebar_panel}>
            <TabList className={style.scope_list}>
              {viewer.myAgent.agentRelationships.map((item, i) => (
                <Tab key={i}>{item.object.name}</Tab>
              ))}
            </TabList>
          </ul>
        </div>
      </div>
      <div className={style.agent_profile}>
        {viewer.myAgent.agentRelationships.map((item, i) => (
          <TabPanel key={i}>
            <div className={style.agent_info}>
              <div className={style.info_data}>
                <h1 className={style.info_title}>{item.object.name}</h1>
                <h5 className={style.info_note}>{item.object.note}</h5>
              </div>
            </div>
            <Cards
              data={item.object.agentPlans}
              link='work/canvas'
            />
          </TabPanel>
        ))}
    </div>
    </Tabs>
  </section>
    ))
  )
}

const agentPlans = gql`
query ($token: String) {
  viewer(token: $token) {
    myAgent {
      id
      name
      image
      agentRelationships {
        relationship {
          label
          category
        }
        object {
          id
          name
          note
          image
          agentPlans {
            name
            id
            note
            due
            plannedOn
          }
        }
      }
    }
  }
}  
`

export default graphql(agentPlans, {
  options: (props) => ({variables: {
    token: localStorage.getItem('oce_token')
}})
})(Lists)
