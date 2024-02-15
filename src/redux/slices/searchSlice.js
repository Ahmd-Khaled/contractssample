import { createSlice } from "@reduxjs/toolkit";
import { getSearchResults } from "../thunkActions/searchActions";


const initialState = {
  getSearchResultsRes: [],
  isLoading: false,
  error: null,
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    // Get Search Results
    builder.addCase(getSearchResults.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getSearchResults.fulfilled, (state, action) => {
      state.getSearchResultsRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getSearchResults.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = searchSlice.actions;

export default searchSlice.reducer;