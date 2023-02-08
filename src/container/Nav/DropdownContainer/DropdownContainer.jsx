import React from 'react'
import team from '../../../data/employeeData'
import DropdownFilter from '../DropdownFilter/DropdownFilter'


const DropdownContainer = (props) => {
    const {roleArr, handleDropdown} = props


  const rolesJSX = roleArr.map((role, index) => {
    return ( <DropdownFilter 
          role = {role}
          key = {index + 1}
          />
      )
  })

  return (
    <div>
    <label htmlFor="Roles">Roles: </label>
    <select name="Roles" id="Roles" onChange = {handleDropdown}>
        {rolesJSX}
    </select>
    </div>
    )
}

export default DropdownContainer