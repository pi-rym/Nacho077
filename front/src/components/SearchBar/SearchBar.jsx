import { useState } from "react"
import style from './SearchBar.module.scss'

export default function SearchBar({onSearch}) {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const emptyInput = () => {
        setInputValue('')
    }

    return (
        <div className={style.searchbarContainer}>
            <input type="text" placeholder="search..." onChange={handleChange} value={inputValue} />
            <button onClick={() => {onSearch(inputValue); emptyInput()}}> Buscar </button>
        </div>
    )
}