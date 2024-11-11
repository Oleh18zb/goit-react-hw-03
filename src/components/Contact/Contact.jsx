import React from 'react'
import s from './Contact.module.css'

export const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <div className={s.list}>
        <div className={s.item}>
          <p className={s.text}>{name}</p>
          <p className={s.text}>{number}</p>
        </div>
        <button className={s.btn} type="button" onClick={() => onDeleteContact(id)}>Delete</button>
    </div>
  )
}

export default Contact