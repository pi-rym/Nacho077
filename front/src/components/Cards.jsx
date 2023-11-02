import Card from "./Card"

const Cards = ({characters, onClose}) => {

    return (
      <div className='cards-container'>
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