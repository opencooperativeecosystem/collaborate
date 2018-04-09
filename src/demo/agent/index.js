import React from 'react'
import style from './style.css'
import Cards from '../components/cards'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Feed from '../components/feed/feed'
import { NavLink } from 'react-router-dom'

const Agent = ({data}) => {
  console.log(data)
  return (
      <section className={style.agent}>
        <div className={style.agent_info}>
          <h1 className={style.info_title}>
          <span className={style.info_image}>
            <img className={style.image_photo} src={data.image} />
          </span> {data.name}</h1>
        </div>
        <div className={style.section}>
        <div className={style.section_wrapper}>
        <Tabs selectedTabClassName={style.list_active}>
        <TabList className={style.scope_list}>
            <Tab>Diary</Tab>
            <Tab>Plans</Tab>
            <Tab>Network</Tab>
            <Tab>Resources</Tab>
        </TabList>
        <TabPanel>
            <Feed feed={data.agentEconomicEvents} />
          </TabPanel>
          <TabPanel>
            <div className={style.wrapper}>
              <Cards
                data={data.agentPlans}
                link='work/canvas'
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className={style.agent_list}>
              {data.agentRelationships.map((item, i) => (
                <div key={i} className={style.list_item + ' ' + style.item_member}>
                  {data.type !== 'Person'
                    ? <NavLink key={i} activeClassName={style.activeLink} to={'/agent/' + item.subject.id}>
                      <div className={style.item_photo}><img src={item.subject.image} /></div>
                      <h5>{item.subject.name}</h5>
                    </NavLink>
                    : <NavLink key={i} activeClassName={style.activeLink} to={'/agent/' + item.object.id}>
                        <div className={style.item_photo}><img src={item.object.image} /></div>
                        <h5>{item.object.name}</h5>
                    </NavLink>}
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
          <div className={style.resources_list}>
              {data.ownedEconomicResources.map((item, i) => (
                  <div key={i} className={style.list_item}>
                    <div className={style.item_desc}>
                      <span>{item.currentQuantity.numericValue + ' ' + item.currentQuantity.unit.name }</span> of <b>{item.resourceClassifiedAs.name}</b>
                    </div>
                    <div className={style.type}>{item.resourceClassifiedAs.category}</div>
                  </div>
                ))}
            </div>
          </TabPanel>
          </Tabs>
          </div>
    </div>
  </section>
  )
}

export default Agent
