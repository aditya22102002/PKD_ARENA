import { createSlice,  nanoid } from "@reduxjs/toolkit";
import { dummyCourses } from "../assets/assets";



export const courseSlice=createSlice({
    name:'course',
    initialState:{
        allCourses:dummyCourses
    },
    reducers:{
        setCourses: (state,action)=>{
            state.allCourses=action.payload
        },
    },
})

export const {setCourses}= courseSlice.actions

export default courseSlice.reducer