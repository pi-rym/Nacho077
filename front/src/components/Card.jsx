function Card({character, closeFunction}) {
    return (
        <div>
            <h2>{character.name}</h2>
            <h2>{character.species}</h2>
            <p>{character.gender}</p>
            <img src={character.image} />
            <button onClick={closeFunction}>CERRAR</button>
        </div>
    )
}

export default Card