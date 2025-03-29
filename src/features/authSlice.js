import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/login",
        credentials
      );
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const fetchAllUsers = createAsyncThunk("fetchUser", async () => {
  try {
    const response = await axios.get(
      "http://localhost:4000/api/user/getAllUsers"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const courseSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    users: [],
    user: null,
    isAuthenticated: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      (state.isLoading = false), (state.users = action.payload);
    });
    builder.addCase(fetchAllUsers.rejected, (state, action) => {
      console.log("ERROR", action.payload);

      state.isError = true;
    });
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isError = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.isError = action.payload;
      });
  },
});

export const { setCourses } = courseSlice.actions;

export default courseSlice.reducer;
