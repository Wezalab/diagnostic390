import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Here, we are using the createAsyncThunk function to create an asynchronous thunk to fetch 
// the list of entreprises. 
// Then we define a new slice called entreprisesSlice with an initial state containing 
// an empty list of entreprises, isLoading flag, and an error message if any.

export const fetchEntreprises = createAsyncThunk(
  "entreprise/fetchEntreprises",
  async () => {
    const response = await axios.get(
      "https://diagnostic-swyu.onrender.com/api/projects/"
    );
    return response.data;
  }
);

const entreprisesSlice = createSlice({
  name: "entreprises",
  initialState: {
    entrepriseList: [],
    isLoadingEntreprise: false,
    errorEntreprise: null,
  },
  reducers: {},
  // In the extraReducers field, we define how the state should change when the asynchronous
  // thunk fetchEntreprises is in a pending, fulfilled, or rejected state. 
  extraReducers: (builder) => {
    builder
      .addCase(fetchEntreprises.pending, (state) => {
        state.isLoadingEntreprise = true;
        state.errorEntreprise = null;
      })
      .addCase(fetchEntreprises.fulfilled, (state, action) => {
        state.isLoadingEntreprise = false;
        state.entrepriseList = action.payload;
        state.errorEntreprise = null;
      })
      .addCase(fetchEntreprises.rejected, (state, action) => {
        state.isLoadingEntreprise = false;
        state.errorEntreprise = action.errorEntreprise.message;
      });
  },
});

export default entreprisesSlice.reducer;
