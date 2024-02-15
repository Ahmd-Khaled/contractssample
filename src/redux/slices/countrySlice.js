import { createSlice } from "@reduxjs/toolkit";
import { getCountryData } from "../thunkActions/countryActions";


const initialState = {
  getCountryDataRes: [],
  isLoading: false,
  error: null,
}

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    // Get Country Data
    builder.addCase(getCountryData.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getCountryData.fulfilled, (state, action) => {
      state.getCountryDataRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getCountryData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = countrySlice.actions;

export default countrySlice.reducer;