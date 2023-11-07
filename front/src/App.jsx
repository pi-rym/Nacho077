import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import About from './components/About.jsx'
import Detail from './components/Detail.jsx'
import Form from './components/Form.jsx'
import { APIKEY, USERNAME, PASS } from './utils/constants.js'

function App() {
  const [characters, setCharacters] = useState([])
  const [isLoged, setIsLoged] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    !isLoged && navigate('/')
  }, [isLoged])

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

  const handleLogin = userData => {
    if(userData.username === USERNAME && userData.password === PASS) {
      setIsLoged(true)
      navigate('/home')
    }
  }

  return (
    <>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form handleLogin={handleLogin} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onCloseCharacter} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        {/* <Route path="/detail/:id/:name" element={<Detail />} /> */}
      </Routes>
    </>
  )
}

export default App
