import { REMOVE_FROM_FAVOURITE } from "../action"

const initialState = {
    list : []
}

const favoriteRemoveReducer = (state = initialState, action) => {
    switch(action.type){
        case REMOVE_FROM_FAVOURITE:
            return {
                ...state,
                list: state.favourite.list.filter((fav) => fav !== action.payload)
            }
        default: 
        return state
    }
}

export default favoriteRemoveReducer;