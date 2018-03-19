import React from 'react'
import style from './style.css'
import Cards from '../components/cards'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Feed from '../components/feed/feed'
import { NavLink } from 'react-router-dom'

const Agent = ({data}) => {
    return (
        <section className={style.agent}>
            <div className={style.agent_info}>
                <span className={style.info_image}>
                    <img className={style.image_photo} src={data.image} />
                </span>
                <h1 className={style.info_title}>{data.name}</h1>
            </div>
            <div className={style.section}>
          <div className={style.section_wrapper}>
          <Tabs selectedTabClassName={style.list_active}>
          <TabList className={style.scope_list}>
              <Tab>Diary</Tab>
              <Tab>Plans</Tab>
              {data.type !== 'Person' ? <Tab>Agents</Tab> : ''}
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
            {data.type !== 'Person'
            ? <TabPanel>
              <div className={style.agent_list}>
                {data.agentRelationships.map((item, i) => (
                  <div key={i} className={style.list_item + ' ' + style.item_member}>
                    <NavLink key={i} activeClassName={style.activeLink} to={'/work/agent/' + item.subject.id}>
                        <div className={style.item_photo}><img src={item.subject.image} /></div>
                        <h5>{item.subject.name}</h5>
                    </NavLink>
                  </div>
                ))}
              </div>
            </TabPanel>
            : '' }
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
