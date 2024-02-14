import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Here, we are using the createAsyncThunk function to create an asynchronous thunk to fetch 
// the list of users. 
// Then we define a new slice called usersSlice with an initial state containing 
// an empty list of users, isLoading flag, and an error message if any.

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async () => {
    const response = await axios.get(
      "https://diagnostic-swyu.onrender.com/auth/user-list"
    );
    return response.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    userList:[],
    isLoadingUser: false,
    errorUser: null,

  },
  reducers: {},
  // In the extraReducers field, we define how the state should change when the asynchronous
  // thunk fetchUsers is in a pending, fulfilled, or rejected state. 
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoadingUser = true;
        state.errorUser = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoadingUser = false;
        state.userList = action.payload;
        state.errorUser = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoadingUser = false;
        state.errorUser = action.error.message;
      });
  },
});

export default usersSlice.reducer;
