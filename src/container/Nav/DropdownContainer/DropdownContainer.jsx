import React from 'react'
//import team from "../../data/employeeData";
import DropdownFilter from '../DropdownFilter/DropdownFilter'


const DropdownContainer = (props) => {
  const {teamArr} = props

  const rolesJSX = teamArr.map((employee) => {
    return ( <DropdownFilter 
          role = {employee.role}
          key = {employee.id} />
      )
  })

  return (
    <select name="Role " id="Roles">
        {rolesJSX}
    </select>
    )
}

export default DropdownContainer