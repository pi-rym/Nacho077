import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'
import { useState } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import About from './components/About.jsx'
import Detail from './components/Detail.jsx'

function App() {
  const [characters, setCharacters] = useState([])
  const APIKEY = 'henrystaff'

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
      <Routes>
        <Route path="/" element={<div>BIENVENIDO A MI APP</div>} />
        <Route path="/home" element={<Cards characters={characters} onClose={onCloseCharacter} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        {/* <Route path="/detail/:id/:name" element={<Detail />} /> */}
      </Routes>
    </>
  )
}

export default App
