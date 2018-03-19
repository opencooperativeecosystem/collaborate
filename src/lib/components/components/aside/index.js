import React from 'react'
import style from './style.css'

const Aside = () => {
    return (
        <div className={style.aside}>
            <div className={style.aside_header}>

            </div>
            <section className={style.aside_section}>
                <h3 className={style.section_title}>Network</h3>
                <ul className={style.section_list}>
                <li >
                    <a href="#">
                        <div className={style.list_agent}>
                            <img className={style.agent_photo} src="https://picsum.photos/200/300" />
                            <h4>Mario</h4>
                        </div>
                    </a>
                </li>
                <li >
                    <a href="#">
                        <div className={style.list_agent}>
                            <img className={style.agent_photo} src="https://picsum.photos/200/300" />
                            <h4>Mario</h4>
                        </div>
                    </a>
                </li>
                <li >
                    <a href="#">
                        <div className={style.list_agent}>
                            <img className={style.agent_photo} src="https://picsum.photos/200/300" />
                            <h4>Mario</h4>
                        </div>
                    </a>
                </li>
                <li >
                    <a href="#">
                        <div className={style.list_agent}>
                            <img className={style.agent_photo} src="https://picsum.photos/200/300" />
                            <h4>Mario</h4>
                        </div>
                    </a>
                </li>
                </ul>
            </section>
        </div>
    )
}

export default Aside