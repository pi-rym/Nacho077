import SearchBar from "./SearchBar";
import { useNavigate } from 'react-router-dom'
import React from 'react'

const Nav = ({onSearch}) => {
    const navigate = useNavigate()

    return (
        <div className='nav-container'>
            {/* <Link to="/home">HOME</Link>
            <Link to="/about">ABOUT</Link> */}
            <button onClick={() => navigate('/home')}>HOME</button>
            <button onClick={() => navigate('/about')}>ABOUT</button>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default Nav