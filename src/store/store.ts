import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { questionsSlice } from "../services/questionsService/store/slice/questions.slice.ts";

const rootReducer = combineSlices(questionsSlice)

export const store = configureStore({
    reducer: rootReducer,
})
