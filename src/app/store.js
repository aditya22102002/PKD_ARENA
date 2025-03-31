import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "../features/courseSlice"; // ✅ Correct import
import userReducer from "../features/userSlice";
import allUserReducer from "../features/allUserSlice";
import addCourseSlice from "../features/addCourseSlice";
export const store = configureStore({
    reducer: {
        courses: courseReducer, 
        user:userReducer,
        allUser:allUserReducer,
        addCourse:addCourseSlice
    },
});