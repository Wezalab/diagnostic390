import { createSlice } from "@reduxjs/toolkit";

// Retrieve user data from LocalStorage
const userData = JSON.parse(localStorage.getItem('user'));
console.log("userData", userData);
const u = {
  "message": "Connexion réussie",
  "user": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTk0M2RlMmYzNmYzMzk4NDEzN2E4YzciLCJuYW1lIjoiV0VaQSBMQUIiLCJlbWFpbCI6IndlemFsYWJAZ21haWwuY29tIiwibW9iaWxlIjoiKzI0MyA5NzMxMTExOTIiLCJzZXgiOiJGIiwidXNlcm5hbWUiOiJXRVpBIExBQiIsInByb2ZpbGVfcGljdHVyZSI6Imh0dHBzOi8vaS5wcmF2YXRhci5jYy80OD91PTE2OTE2NSIsImlhdCI6MTcwNDMwMTI3NiwiZXhwIjoxNzA0Mzg3Njc2fQ.BDjojhM5Imk3WxXpM_n1fwNeqATvhlc4dY-tMAqVwHo",
      "user": {
          "userId": "65943de2f36f33984137a8c7",
          "name": "WEZA LAB",
          "email": "wezalab@gmail.com",
          "mobile": "+243 973111192",
          "sex": "F",
          "role": 'USER',
          "username": "WEZA LAB",
          "profile_picture": "https://i.pravatar.cc/48?u=169165"
          
          // "userId": "65af908a6045c2a868195d36",
          // "name": "Jean Baptite Man",
          // "email": "jean@test.com",
          // "mobile": "243 9991 979001",
          // "mobile_secondaire": "243 9991 979001",
          // "username": "ean Baptite Man",
          // "sex": "M",
          // "role": "USER",
          // "profile_picture": "https://i.pravatar.cc/48?u=662770",
      }
  }
}

// {
//   "message": "Utilisateur créé avec succès",
//   "email": "colp@gmail.com",
//   "password": "1234567890"
// }




const authSlice = createSlice({
  name: 'auth',
  initialState: {
    // user: userData ? userData.user : null, // Use user data from LocalStorage or set to null
    user: u,
    error: null,
    isLoading: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;

      // Store user data to LocalStorage
      localStorage.setItem('user', JSON.stringify({ user: action.payload }));
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.isLoading = false;
      state.user = null;
      state.error = null;

      localStorage.clear();

    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logoutUser } = authSlice.actions;

export default authSlice.reducer;