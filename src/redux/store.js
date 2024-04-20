import { configureStore } from "@reduxjs/toolkit";
import { complexesReducer } from './slices/complexes.js'
const store = configureStore({
    reducer: {
        complexes: complexesReducer
    }
})

export default store