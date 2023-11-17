import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import style from './App.module.scss'
import Nav from './components/Nav/Nav.jsx'
import Cards from './components/Cards/Cards.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Form from './components/Form/Form.jsx'
import { APIKEY, USERNAME, PASS } from './utils/constants.js'
import Favorites from './components/Favorites/Favorites.jsx'

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
      <div className={style.containerMain}>
        <Routes>
          <Route path="/" element={<Form handleLogin={handleLogin} />} />
          <Route path="/home" element={<Cards characters={characters} onClose={onCloseCharacter} />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/favorites" element={<Favorites onClose={onCloseCharacter} />} />
          {/* <Route path="/detail/:id/:name" element={<Detail />} /> */}
        </Routes>
      </div>
    </>
  )
}

export default App
