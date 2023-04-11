// import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, SET_JOBS, SET_QUERY } from  "../action"

// const initialState = {
//   favourite: {
//     list: [],
//   },
//   query : {
//     content : ''
// },
// jobs : {
// content : []
// }
// }

// const mainReducer = (state = initialState, action) => {
//   switch (action.type) {
//     // case ADD_TO_FAVOURITE:
//     //   return {
//     //     ...state,
//     //     favourite: {
//     //       ...state.favourite,
//     //       list: [...state.favourite.list, action.payload],
//     //     },
//     //   }
//     // case REMOVE_FROM_FAVOURITE:
//     //   return {
//     //     ...state,
//     //     favourite: {
//     //       ...state.favourite,
//     //       list: state.favourite.list.filter((fav) => fav !== action.payload),
//     //     },
//     //   }
//       // case SET_QUERY : 
//       // return {
//       //     ...state, 
//       //     query : {
//       //         ...state.query,
  
//       //         content : action.payload
//       //     }
//       // }
//       case SET_JOBS : 
//       return{
//           ...state,
//           jobs : { ...state.jobs,
  
//               content : action.payload}
//       }
//     default:
//       return state
//   }
// }

// export default mainReducer
