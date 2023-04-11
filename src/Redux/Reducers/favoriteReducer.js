import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../action"

const initialState = {
    list: []
}

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITE:
            return {
                ...state,

                list: [...state.favourite.list, action.payload],
            }
        default:
        return state
    }
}

export default favoriteReducer;