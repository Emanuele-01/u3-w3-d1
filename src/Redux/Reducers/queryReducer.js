import { SET_QUERY } from "../action"

const initialState = {
    content : ' '
}

const queryReducer = (state = initialState, action) => {
    switch(action.type){

        case SET_QUERY : 
        return {
            ...state, 

                content : action.payload
        }
        default : 
        return state
    }
}

export default queryReducer;