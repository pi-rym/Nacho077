export const ADD_FAVORITES = "ADD_FAVORITES"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"
export const FILTER = "FILTER"
export const RESET_FILTER = "RESET_FILTER"
export const ORDER = "ORDER"

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

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const resetFilter = () => {
    return {
        type: RESET_FILTER
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}
