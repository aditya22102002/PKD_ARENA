import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "../features/courseSlice"; // ✅ Correct import
import userReducer from '../features/authSlice';

export const store = configureStore({
    reducer: {
        courses: courseReducer, 
        user: userReducer
    },
});