import { useSelector } from "react-redux"
import Cards from '../Cards/Cards.jsx'

const Favorites = ({onClose}) => {
    const myFavorites = useSelector(state => state.characterFavorites)

    return (
        <Cards characters={myFavorites} onClose={onClose} /> 
    )
}

export default Favorites
