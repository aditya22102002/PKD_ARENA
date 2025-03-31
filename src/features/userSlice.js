import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("fetchUser", async (_, { rejectWithValue }) => {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch("http://localhost:4000/api/user/getUser", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    if (response.status === 401) {
      console.log("Session expired. Logging out...");
      localStorage.removeItem("token"); // Remove token
      localStorage.removeItem("loggedInUser"); // Remove token
      localStorage.removeItem("LoggedInEmail"); // Remove token

      window.location.href = "/sign-up"; // Redirect to login page
      return rejectWithValue("Unauthorized");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    userData: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userData = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      console.log("ERROR", action.payload);
      state.isError = true;
    });
  },
});

export default userSlice.reducer;
