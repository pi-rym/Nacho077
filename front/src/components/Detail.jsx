import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { APIKEY } from "../utils/constants"

const Detail = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState({})
    const [isRotate, setRotate] = useState(false)
    const handleRotate = () => {
        setRotate(!isRotate)
    }

    useEffect(() => {
        setTimeout(() => {
            axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`)
            .then(
            ({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            }
            );
            
            setCharacter({});
            }, 2000)
     }, [id]);

    return character.name ? (
        <div>
            <h1>{character.name}</h1>
            <h2>{character.species}</h2>
            <p>{character.gender}</p>
            <img src={character.image} className={isRotate ? 'rotateImage': null}/>
            <button onClick={handleRotate}>Girar carta</button>
        </div>
    ) : (
        <h1>Cargando su personaje...</h1>
    )
}

export default Detail
