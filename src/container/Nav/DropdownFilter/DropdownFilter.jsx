import "./DropdownFilter.scss"

const DropdownFilter = (props) => {

    const {role, handleClick} = props

    return(
        <option value={role} onClick={handleClick}>{role}</option>
    )
}

export default DropdownFilter