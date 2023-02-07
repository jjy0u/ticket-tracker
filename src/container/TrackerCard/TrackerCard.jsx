import React from 'react'
import './TrackerCard.scss'
import Counter from '../Counter/Counter'

const TrackerCard = (props) => {
    const {name, role} = props
  return (
    <div className='tracker-card'>
        <h1>Name: {name}</h1>
        <h2>Role: {role}</h2>
        <Counter/>
    </div>
  )
}

export default TrackerCard