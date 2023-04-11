import { configureStore } from "@reduxjs/toolkit";
import functionStorage from "../Reducers";

const storage = configureStore({
    reducer : functionStorage
})

export default storage