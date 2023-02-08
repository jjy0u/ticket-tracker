import React from 'react'
import './TrackerCard.scss'
import Counter from '../Counter/Counter'

const TrackerCard = (props) => {
    const {name, role} = props
  return (
    <div className='tracker-card'>
        <h1 className='tracker-card__name'>{name}</h1>
        <h2 className='tracker-card__role'>{role}</h2>
        <Counter/>
    </div>
  )
}

export default TrackerCard