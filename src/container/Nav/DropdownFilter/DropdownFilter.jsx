import "./DropdownFilter.scss"

const DropdownFilter = (props) => {

    const {role} = props

    return(
        <option value={role}>{role}</option>
    )
}

export default DropdownFilter