import { createSlice } from "@reduxjs/toolkit";
import { getCountryData } from "../thunkActions/countryActions";
import { addDues } from "../thunkActions/duesActions";


const initialState = {
    addDuesRes: [],
  isLoading: false,
  error: null,
}

const duesSlice = createSlice({
  name: "dues",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    // Add Dues
    builder.addCase(addDues.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addDues.fulfilled, (state, action) => {
      state.addDuesRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(addDues.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = duesSlice.actions;

export default duesSlice.reducer;