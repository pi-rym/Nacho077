import SearchBar from "./SearchBar";
import React from 'react'

const Nav = ({onSearch}) => {
    return (
        <div className='nav-container'>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default Nav