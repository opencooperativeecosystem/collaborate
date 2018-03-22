import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import style from './App.css'
import {Link} from 'react-router-dom'

// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
// import Feed from './components/feed/feed'
// import Cards from './components/cards'

const Lists = (props) => {
  const {viewer, loading, error} = props.data
  return (
    loading ? <strong>Loading...</strong> : (
    error ? <p style={{ color: '#F00' }}>API error</p> : (
      <div className={style.profile_lists}>
        <div className={style.lists}>
          <h2 className={style.profile_title}><span role='img'>👋</span> Hello {viewer.myAgent.name}</h2>
          <div className={style.section}>
            <div className={style.section_wrapper}>
              <h5>You can log your work on the following projects:</h5>
              <div className={style.wrapper_list}>
                  {viewer.myAgent.agentRelationships.map((item, i) => (
                    <div className={style.list_item} key={i}>
                      <Link to={`${props.match.url}/agent/${item.object.id}`}>
                        <h3>{item.object.name}</h3>
                        <h5>{item.object.note}</h5>
                        <h6>{item.relationship.label}</h6>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {/* <h5 className={style.profile_address}>ƒ <span>{viewer.myAgent.faircoinAddress}</span></h5> */}
          {/* <div className={style.section}>
            <div className={style.section_wrapper}>
              <Tabs selectedTabClassName={style.list_active}>
                <TabList className={style.scope_list}>
                  <Tab>Overview</Tab>
                  <Tab>Diary</Tab>
                </TabList>
                <TabPanel>
                  <div className={style.wrapper}>
                    <Cards
                      data={viewer.myAgent.agentPlans}
                      link='work/canvas'
                    />
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className={style.section_wrapper}>
                    <div className={style.wrapper + ' ' + style.wrapper_feed}>
                      <Feed feed={viewer.myAgent.agentEconomicEvents} />
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div> */}
        </div>
      </div>
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
        }
      }
    }
  }
}  
`

export default graphql(agentPlans, {
  options: (props) => ({variables: {
    token: localStorage.getItem('token')
}})
})(Lists)
