import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'
import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [characters, setCharacters] = useState([])
  const APIKEY = 'pi-hx-aquintero'

  const onSearch = (id) => {
    axios.get('https://rym2.up.railway.app/api/character/' + id + '?key=' + APIKEY)
    .then(({data}) => {
        if(data) {
          setCharacters([...characters, data])
        } else {
          alert('Algo salio mal')
        }
      })
      .catch(err => alert(err))
  }

  const onCloseCharacter = (id) => {
    const characterFilters = characters.filter(character => character.id != id)
    setCharacters(characterFilters)
  }

  return (
    <>
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onCloseCharacter} />
    </>
  )
}

export default App
