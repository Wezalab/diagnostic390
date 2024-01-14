import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Here, we are using the createAsyncThunk function to create an asynchronous thunk to fetch 
// the list of businessPlan. 
// Then we define a new slice called businessPlanSlice with an initial state containing 
// an empty list of businessPlan, isLoading flag, and an error message if any.

export const fetchBusinessPlans = createAsyncThunk(
  "businessPlan/fetchBusinessPlans",
  async () => {
    const response = await axios.get(
      "https://diagnostic-swyu.onrender.com/api/projects/"
    );
    return response.data;
  }
);

// Create an async thunk to create a new BusinessPlan object
export const createBusinessPlan = createAsyncThunk('businessPlan/create', async (BusinessPlanData) => {
  console.log("----------------------",BusinessPlanData);
  try {
    const response = await axios.post(`https://diagnostic-swyu.onrender.com/api/projects/`, BusinessPlanData);
    return response.data;
  } catch (error) {
    console.log("Error =========??????", error);

    throw error;
  }
});

const businessPlanSlice = createSlice({
  name: "businessPlan",
  initialState: {
    businessPlanList:[],
    
    isLoadingBusinessPlan: false,
    errorBusinessPlan: null,

    isLoadingCreateBusinessPlan: false,
    errorCreateBusinessPlan: null,
  },
  reducers: {},
  // In the extraReducers field, we define how the state should change when the asynchronous
  // thunk fetchBusinessPlans is in a pending, fulfilled, or rejected state. 
  extraReducers: (builder) => {
    builder
      .addCase(fetchBusinessPlans.pending, (state) => {
        state.isLoadingBusinessPlan = true;
        state.errorBusinessPlan = null;
      })
      .addCase(fetchBusinessPlans.fulfilled, (state, action) => {
        state.isLoadingBusinessPlan = false;
        state.businessPlanList = action.payload;
        state.errorBusinessPlan = null;
      })
      .addCase(fetchBusinessPlans.rejected, (state, action) => {
        state.isLoadingBusinessPlan = false;
        state.errorBusinessPlan = action.error.message;
      });

    // Handle the createBusinessPlan action
    builder
      .addCase(createBusinessPlan.pending, (state) => {
        state.isLoadingCreateBusinessPlan = true;
      })
      .addCase(createBusinessPlan.fulfilled, (state, action) => {
        state.isLoadingCreateBusinessPlan = false;
        state.businessPlanList.push(action.payload);
      })
      .addCase(createBusinessPlan.rejected, (state, action) => {
        state.isLoadingCreateBusinessPlan = false;
        state.errorCreateBusinessPlan = action.error.message;
      });
  },
});

export default businessPlanSlice.reducer;
