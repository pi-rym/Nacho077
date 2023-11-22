import { useSelector, useDispatch } from "react-redux"
import * as actions from '../../redux/actions.js'
import Cards from '../Cards/Cards.jsx'

const Favorites = ({onClose}) => {
    const myFavorites = useSelector(state => state.characterFavorites)
    const dispatch = useDispatch()

    const handleOrder = event => {
        dispatch(actions.orderCards(event.target.value))
    }

    const handleFilter = event => {
        if(event.target.value === "All") {
            dispatch(actions.resetFilter())
        } else {
            dispatch(actions.filterCards(event.target.value))
        }
    }

    return (
        <div>
            <div>
                <select onChange={handleOrder}>
                    <option disabled>Select Order</option>
                    <option value="A">ASCENDENTE</option>
                    <option value="D">DESCENDENTE</option>
                </select>
                <select onChange={handleFilter}>
                    <option disabled>Select Filter</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="unknown">Unknown</option>
                    <option value="Genderless">Genderless</option>
                    <option value="All">All Gender</option>
                </select>
            </div>
            <Cards characters={myFavorites} onClose={onClose} /> 
        </div>
    )
}

export default Favorites
