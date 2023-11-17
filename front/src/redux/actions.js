export const ADD_FAVORITES = "ADD_FAVORITES"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"

export const addFavorite = (character) => {
    return {
        type: ADD_FAVORITES,
        payload: character
    }
}

export const removeFavorite = (id) => {
    return {
        type: REMOVE_FAVORITE,
        payload: id
    }
}
