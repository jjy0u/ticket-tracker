import React from 'react'
import team from "../../data/employeeData";
import TrackerCard from '../TrackerCard/TrackerCard';
import './TrackerContainer.scss'


const TrackerContainer = () => {
    const teamTrackerJSX = team.map((employee) => {
        return ( <TrackerCard 
            name = {employee.name}
            role = {employee.role}
            key = {employee.id} />
        )
    })

  return (
    <div className='tracker-container'>{teamTrackerJSX}</div>
  )
}

export default TrackerContainer