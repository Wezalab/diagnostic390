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

export const sendResetPassword = createAsyncThunk(
  "user/resetPassword",
  async ({ userId, newPassword, confirmPassword }) => {
    try {
      console.log("==>>>>>$$$%%%", `https://diagnostic-swyu.onrender.com/auth/reset-password-no-token/${userId}`, { newPassword, confirmPassword });
      const response = await axios.post(
        `https://diagnostic-swyu.onrender.com/auth/reset-password-no-token/${userId}`, { newPassword, confirmPassword }
      );
      return response.data;
    } catch (error) {
      console.log("Error =========??????", error);

      throw error?.response?.data?.message !== undefined ? error.response.data.message : "Verifiez votre internet!";
    }
  });

export const sendResetPasswordEmail = createAsyncThunk(
  "user/sendOTP",
  async ({ email, code }) => {
    try {

      const response = await axios.post(
        `https://diagnostic-swyu.onrender.com/auth/reset-password-code/`, { email, code }
      );
      // console.log("response.data", response.data);

      return response.data;
    } catch (error) {
      console.log("Error =========??????", error);
      throw error?.response?.data?.message !== undefined ? error.response.data.message : "Verifiez votre internet!";
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    userList: [],
    isLoadingUser: false,
    errorUser: null,

    otpStatus: null,
    isLoadingSendOTP: false,
    errorOTP: null,

    ChangePasswordStatus: null,
    isLoadingSendChangePassword: false,
    errorChangePassword: null,

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

    builder
      .addCase(sendResetPasswordEmail.pending, (state) => {
        state.isLoadingSendOTP = true;
        state.errorOTP = null;
      })
      .addCase(sendResetPasswordEmail.fulfilled, (state, action) => {
        state.isLoadingSendOTP = false;
        state.otpStatus = action.payload;
        state.errorOTP = null;
      })
      .addCase(sendResetPasswordEmail.rejected, (state, action) => {
        state.isLoadingSendOTP = false;
        state.errorOTP = action.error.message;
      });

      builder
      .addCase(sendResetPassword.pending, (state) => {
        state.isLoadingSendChangePassword = true;
        state.errorChangePassword = null;
      })
      .addCase(sendResetPassword.fulfilled, (state, action) => {
        state.isLoadingSendChangePassword = false;
        state.ChangePasswordStatus = action.payload;
        state.errorChangePassword = null;
      })
      .addCase(sendResetPassword.rejected, (state, action) => {
        state.isLoadingSendChangePassword = false;
        state.errorChangePassword = action.error.message;
      });
  },

});

export default usersSlice.reducer;
