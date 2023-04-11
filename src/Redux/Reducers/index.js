
const initalState = {
        query : {
            content : ''
        },
        jobs : {
        content : []
        }
};

// eslint-disable-next-line no-unused-vars
const functionStorage = (state = initalState, action) => {
switch(action.type){
    case 'SET_QUERY' : 
    return {
        ...state, 
        query : {
            ...state.query,

            content : action.payload
        }
    }
    case 'SET_JOBS' : 
    return{
        ...state,
        jobs : { ...state.jobs,

            content : action.payload}
    }
    default : 
    return state
}
};

export default functionStorage;