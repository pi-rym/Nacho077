import { Link } from 'react-router-dom'
import style from './Card.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite } from '../../redux/actions.js'
import { useState, useEffect } from 'react'

function Card({character, closeFunction}) {
    const [isFav, setIsFav] = useState(false)
    const dispatch = useDispatch()
    const myFavorites = useSelector(state => state.characterFavorites)

    useEffect(() => {
        myFavorites.forEach(char => {
            if(char.id === character.id) {
                setIsFav(true)
            }
        })
    }, [myFavorites])

    const toogleFavorite = () => {
        if(isFav) {
            setIsFav(false)
            dispatch(removeFavorite(character.id))
        } else {
            setIsFav(true)
            dispatch(addFavorite(character))
        }
    }

    return (
        <div className={style.card}>
            <Link to={`/detail/${character.id}`} className={style.name}>{character.name}</Link>
            <button onClick={toogleFavorite}>{isFav ? "❤️" : "🤍"}</button>
            <h4>{character.species}</h4>
            <p>{character.gender}</p>
            <img src={character.image} />
            <button className={style.button} onClick={closeFunction}>CERRAR</button>
        </div>
    )
}

export default Card