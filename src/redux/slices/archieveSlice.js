import { createSlice } from "@reduxjs/toolkit";
import { getCountryData } from "../thunkActions/countryActions";
import { uploadContractFiles } from "../thunkActions/archieveActions";

const initialState = {
  uploadContractFilesRes: [],
  isLoading: false,
  error: null,
};

const archieveSlice = createSlice({
  name: "archieve",
  initialState,
  reducers: {
    resetSate: () => initialState,
  },
  extraReducers: (builder) => {
    // Upload Contract Files
    // builder.addCase(uploadContractFiles.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    // });
    // builder.addCase(uploadContractFiles.fulfilled, (state, action) => {
    //   state.uploadContractFilesRes = action.payload;
    //   state.isLoading = false;
    //   state.error = null;
    // });
    // builder.addCase(uploadContractFiles.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // });
  },
});

export const { resetSate } = archieveSlice.actions;

export default archieveSlice.reducer;
