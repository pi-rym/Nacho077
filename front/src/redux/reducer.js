import { ADD_FAVORITES, REMOVE_FAVORITE, FILTER, RESET_FILTER, ORDER } from "./actions"

const initialState = {
    characterFavorites: [], // filtrados => mujeres [beth, summer]
    allCharacterFavorites: [] // TODOS => [rick, morty, summer ,beth]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITES:
            return {
                ...state,
                characterFavorites: [...state.characterFavorites, action.payload],
                allCharacterFavorites: [...state.allCharacterFavorites, action.payload]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                characterFavorites: state.characterFavorites.filter(character => character.id !== action.payload),
                allCharacterFavorites: state.allCharacterFavorites.filter(character => character.id !== action.payload)
            }
        case FILTER:
            return {
                ...state,
                characterFavorites: state.allCharacterFavorites.filter(character => character.gender === action.payload)
            }
        case RESET_FILTER:
            return {
                ...state,
                characterFavorites: state.allCharacterFavorites
            }
        case ORDER: // A === ascendente // D === descendiente
            var characterFavoritesOrderer = [...state.characterFavorites]
            var characterAllFavoritesOrderer = [...state.allCharacterFavorites]

            // [Morty, Rick, Summer, Beth]
            if(action.payload === "A") {
                characterAllFavoritesOrderer = characterAllFavoritesOrderer.sort((a, b) => a.id - b.id)
                characterFavoritesOrderer = characterFavoritesOrderer.sort((a, b) => a.id - b.id)
            } else if(action.payload === "D") {
                characterAllFavoritesOrderer = characterAllFavoritesOrderer.sort((a, b) => b.id - a.id)
                characterFavoritesOrderer = characterFavoritesOrderer.sort((a, b) => b.id - a.id)
            }

            return {
                ...state,
                characterFavorites: characterFavoritesOrderer,
                allCharacterFavorites: characterAllFavoritesOrderer
            }
        default:
            return state
    }
}

export default reducer
