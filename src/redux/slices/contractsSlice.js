import { createSlice } from "@reduxjs/toolkit";
import { getAllContracts, getContractDetails, uploadContractFiles } from "../thunkActions/contractsActions";

const initialState = {
  getContractDetailsRes: [],
  uploadContractFilesRes: [],
  getAllContractsRes: [],
  isLoading: false,
  error: null,
};

const contractsSlice = createSlice({
  name: "contracts",
  initialState,
  reducers: {
    resetSate: () => initialState,
  },
  extraReducers: (builder) => {
    // Get Contract Details
    builder.addCase(getContractDetails.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getContractDetails.fulfilled, (state, action) => {
      state.getContractDetailsRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getContractDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Upload Contract Files
    builder.addCase(uploadContractFiles.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(uploadContractFiles.fulfilled, (state, action) => {
      state.uploadContractFilesRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(uploadContractFiles.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Get All Contracts
    builder.addCase(getAllContracts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllContracts.fulfilled, (state, action) => {
      state.getAllContractsRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getAllContracts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { resetSate } = contractsSlice.actions;

export default contractsSlice.reducer;
