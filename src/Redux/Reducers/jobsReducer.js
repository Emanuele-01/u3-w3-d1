import { SET_JOBS } from "../action"

const initialState = {
    content : ''
}

const jobsReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_JOBS : 
        return{
            ...state,

                content : action.payload}
    default:
        return state
    }
}

export default jobsReducers; 