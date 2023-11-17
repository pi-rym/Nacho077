import { ADD_FAVORITES, REMOVE_FAVORITE } from "./actions"

const initialState = {
    characterFavorites: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITES:
            return {
                ...state,
                characterFavorites: [...state.characterFavorites, action.payload]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                characterFavorites: state.characterFavorites.filter(character => character.id !== action.payload)
            }
        default:
            return state
    }
}

export default reducer
