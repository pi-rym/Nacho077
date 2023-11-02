import data, { Rick } from './data.js'
import Card from './Card.jsx'
import './App.css'

function App() {
  const closeFunction = () => {
    alert("Cerrando card...")
  }

  return (
    <>
      <Card character={Rick} closeFunction={closeFunction} />
      {data.map((character, i) => (
        <Card
        character={character}
        closeFunction={closeFunction}
        key={i}
        />
      ))}
    </>
  )
}

export default App
