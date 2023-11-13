import Card from "../Card/Card"
import style from './Cards.module.scss'

const Cards = ({characters, onClose}) => {
    return (
      <div className={style.cards_container}>
        {characters.map((character, index) => (
            <Card
            character={character}
            closeFunction={() => onClose(character.id)}
            key={index}
            />
        ))}
      </div>
    )
}

export default Cards