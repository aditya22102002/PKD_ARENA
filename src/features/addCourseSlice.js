import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { handleSuccess } from "../components/toast";

const API_URL = "http://localhost:4000/api/courses/addCourse";

// Async action to add a course
export const addCourse = createAsyncThunk(
  "course/addCourse",
  async (courseData, { rejectWithValue }) => {
    try {

      const response = await axios.post(API_URL, courseData, {});
      handleSuccess("Course Uploaded Successfully")
      return response.data;
    } catch (error) {
      console.log(error);
      
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

const addCourseSlice = createSlice({
  name: "addCourse",
  initialState: {
    course: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.course = action.payload;
      })
      .addCase(addCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default addCourseSlice.reducer;
