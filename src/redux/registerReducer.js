import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    registeredUser: null, 
    errorRegister: null,
    isLoadingRegister: false,
  },
  reducers: {
    registerStart: (state) => {
      state.isLoadingRegister = true;
    },
    registerSuccess: (state, action) => {
      state.isLoadingRegister = false;
      state.registeredUser = action.payload;
      state.errorRegister = null;

    },
    registerFailure: (state, action) => {
      state.isLoadingRegister = false;
      state.errorRegister = action.payload;
    },
  },
});

export const { registerStart, registerSuccess, registerFailure } = registerSlice.actions;

export default registerSlice.reducer;