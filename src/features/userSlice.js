import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser=createAsyncThunk('fetchUser', async ()=>{
    const token =localStorage.getItem('token')
    const response=await fetch('http://localhost:4000/api/user/getUser', {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
    const data=await response.json();    
    return data
})


export const userSlice=createSlice({
    name:'user',
    initialState:{
        isLoading: false,
        userData:[],
        isError:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUser.pending,(state,action)=>{
            state.isLoading=true
        })
        builder.addCase(fetchUser.fulfilled,(state,action)=>{
            state.isLoading= false,
            state.userData=action.payload
        })
        builder.addCase(fetchUser.rejected,(state,action)=>{
            console.log('ERROR',action.payload);
            
            state.isError=true;
        })
    },
})


export default userSlice.reducer