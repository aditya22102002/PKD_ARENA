import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "../features/courseSlice"; // ✅ Correct import


export const store = configureStore({
    reducer: {
        courses: courseReducer, 

    },
});