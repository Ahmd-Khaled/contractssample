import { createSlice } from "@reduxjs/toolkit";
import { getAllSupervisors, getSupervisorDetails } from "../thunkActions/supervisorsActions";


const initialState = {
  GetAllSupervisorsRes: [],
  getSupervisorDetailsRes: [],
  isLoading: false,
  error: null,
}

const supervisorsSlice = createSlice({
  name: "supervisors",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    // Get All Supervisors
    builder.addCase(getAllSupervisors.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllSupervisors.fulfilled, (state, action) => {
      state.GetAllSupervisorsRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getAllSupervisors.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Get Supervisor Details
    builder.addCase(getSupervisorDetails.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getSupervisorDetails.fulfilled, (state, action) => {
      state.getSupervisorDetailsRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getSupervisorDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = supervisorsSlice.actions;

export default supervisorsSlice.reducer;