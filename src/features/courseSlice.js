import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { dummyCourses } from "../assets/assets";

export const fetchCourses=createAsyncThunk('fetchCourses', async ()=>{
    const response=await fetch('http://localhost:4000/api/courses/allCourses')
    const data=await response.json();
    console.log('fetched data:' , data);
    
    return data
})


export const courseSlice=createSlice({
    name:'course',
    initialState:{
        isLoading: false,
        allCourses:[],
        isError:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCourses.pending,(state,action)=>{
            state.isLoading=true
        })
        builder.addCase(fetchCourses.fulfilled,(state,action)=>{
            state.isLoading= false,
            state.allCourses=action.payload
        })
        builder.addCase(fetchCourses.rejected,(state,action)=>{
            console.log('ERROR',action.payload);
            
            state.isError=true;
        })
    },
})

export const {setCourses}= courseSlice.actions

export default courseSlice.reducer