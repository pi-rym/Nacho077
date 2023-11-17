import { useNavigate } from 'react-router-dom'
import React from 'react'
import style from './Nav.module.scss'
import SearchBar from "../SearchBar/SearchBar.jsx";

const Nav = ({onSearch}) => {
    const navigate = useNavigate()

    return (
        <nav className={style.navContainer}>
            {/* <Link to="/home">HOME</Link>
            <Link to="/about">ABOUT</Link> */}
            <div className={style.containerAll}>
                <div className={style.containerButtons}>
                    <button className={style.button} onClick={() => navigate('/home')}>HOME</button>
                    <button className={style.button} onClick={() => navigate('/about')}>ABOUT</button>
                    <button className={style.button} onClick={() => navigate('/favorites')}>FAVORITES</button>
                </div>
                <div>
                    <SearchBar onSearch={onSearch} />
                </div>
            </div>
        </nav>
    )
}

export default Nav