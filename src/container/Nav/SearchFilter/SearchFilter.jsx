const SearchFilter = (props) => {

    const {handleInput} = props

    return(
        <div className="search">
            <label htmlFor="search-bar">Search Name </label>
            <input type="text" id="search-bar" onInput={handleInput}/>
        </div>
    )
}

export default SearchFilter