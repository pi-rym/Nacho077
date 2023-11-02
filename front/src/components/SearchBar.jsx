import { useState } from "react"

export default function SearchBar({onSearch}) {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const emptyInput = () => {
        setInputValue('')
    }

    return (
        <div className='searchbar-container'>
            <input type="text" placeholder="search..." onChange={handleChange} value={inputValue} />
            <button onClick={() => {onSearch(inputValue); emptyInput()}}> Buscar </button>
        </div>
    )
}