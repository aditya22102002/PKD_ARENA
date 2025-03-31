import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllUsers=createAsyncThunk('fetchAllUsers', async ()=>{
    const response=await fetch('http://localhost:4000/api/user/getAllusers')
    const data=await response.json();    
    return data
})


export const allUserSlice=createSlice({
    name:'allUser',
    initialState:{
        isLoading: false,
        allUsers:[],
        isError:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllUsers.pending,(state,action)=>{
            state.isLoading=true
        })
        builder.addCase(fetchAllUsers.fulfilled,(state,action)=>{
            state.isLoading= false,
            state.allUsers=action.payload
        })
        builder.addCase(fetchAllUsers.rejected,(state,action)=>{
            console.log('ERROR',action.payload);
            
            state.isError=true;
        })
    },
})


export default allUserSlice.reducer