import { combineReducers, configureStore } from "@reduxjs/toolkit";
import jobsReducers from "../reducers/jobsReducer";
import queryReducer from "../reducers/queryReducer";
import favoriteReducer from "../reducers/favoriteReducer";

const store = combineReducers({
  jobs : jobsReducers,
  query : queryReducer,
  favorite : favoriteReducer
})

export default store
