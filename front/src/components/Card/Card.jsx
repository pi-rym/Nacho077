import { Link } from 'react-router-dom'
import style from './Card.module.scss'

function Card({character, closeFunction}) {
    return (
        <div className={style.card}>
            <Link to={`/detail/${character.id}`} className={style.name}>{character.name}</Link>
            <h4>{character.species}</h4>
            <p>{character.gender}</p>
            <img src={character.image} />
            <button className={style.button} onClick={closeFunction}>CERRAR</button>
        </div>
    )
}

export default Card