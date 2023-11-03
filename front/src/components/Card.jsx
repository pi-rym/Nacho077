import { Link } from 'react-router-dom'

function Card({character, closeFunction}) {
    return (
        <div>
            <Link to={`/detail/${character.id}`}>{character.name}</Link>
            <h2>{character.species}</h2>
            <p>{character.gender}</p>
            <img src={character.image} />
            <button onClick={closeFunction}>CERRAR</button>
        </div>
    )
}

export default Card