import React from 'react'
//import team from "../../data/employeeData";
import TrackerCard from '../TrackerCard/TrackerCard';
import './TrackerContainer.scss'


const TrackerContainer = (props) => {
  const {teamArr} = props

    const teamTrackerJSX = teamArr.map((employee) => {
        return ( <TrackerCard 
            name = {employee.name}
            role = {employee.role}
            key = {employee.id}/>
        )
    })

  return (
    <div className='tracker-container'>{teamTrackerJSX}</div>
  )
}

export default TrackerContainer