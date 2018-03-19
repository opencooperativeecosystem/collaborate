import React from 'react'
import style from './style.css'

const CreateCommitment = () => {
    return (
        <section className={style.commitment}>
            <div className={style.commitment_wrapper}>
                <h5 className={style.wrapper_suptitle}>Define a new commitment</h5>
                <div className={style.wrapper_content}>
                    <div className={style.content_process}>
                      <h5>Inside process <select><option>OCP new UI process Logging</option></select></h5>
                    </div>
                    <div className={style.content_sentence}>
                        <select><option>Work</option></select>
                        <input type='number' placeholder='00.00' />
                        <select><option>Work</option></select>
                        <span>within</span>
                        <input type='date' placeholder='11/11/2017' />
                    </div>
                    <div className={style.content_note}>
                        <label>Add commitment information</label>
                        <textarea></textarea>
                    </div>
                    <button>Publish commitment</button>
                </div>
            </div>
        </section>
    )
}

export default CreateCommitment