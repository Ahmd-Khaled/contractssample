import { createSlice } from "@reduxjs/toolkit";
import { assignNotebooks, createNotebook, getNotAssignedNotebook, getNotebookDetails, getNotebooksStatistics } from "../thunkActions/noteBooksActions";
import { PURGE } from "redux-persist";


const initialState = {
  createNotebookRes: [],
  assignNotebooksRes: [],
  getNotAssignedNotebookRes: [],
  getNotebooksStatisticsRes: [],
  getNotebookDetailsRes: [],
  isLoading: false,
  error: null,
}

// if (action.type === 'example/clearResults') {

//   // this applies to all keys defined in persistConfig(s)
//   storage.removeItem('persist:root')

//   state = {};
// }

const noteBooksSlice = createSlice({
  name: "noteBooks",
  initialState,
  reducers: {
    resetSate: () => initialState,
    purgeState: () => {
      return { type: PURGE };
    },
  },
  extraReducers: (builder) => {
    // Create Notebook
    builder.addCase(createNotebook.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(createNotebook.fulfilled, (state, action) => {
      state.createNotebookRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(createNotebook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Assign Notebooks to Supervisor
    builder.addCase(assignNotebooks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(assignNotebooks.fulfilled, (state, action) => {
      state.assignNotebooksRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(assignNotebooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Get Not Assigned Notebooks
    builder.addCase(getNotAssignedNotebook.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getNotAssignedNotebook.fulfilled, (state, action) => {
      state.getNotAssignedNotebookRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getNotAssignedNotebook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Get Notebooks Statistics
    builder.addCase(getNotebooksStatistics.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getNotebooksStatistics.fulfilled, (state, action) => {
      state.getNotebooksStatisticsRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getNotebooksStatistics.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Get Notebook Details
    builder.addCase(getNotebookDetails.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getNotebookDetails.fulfilled, (state, action) => {
      state.getNotebookDetailsRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getNotebookDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(PURGE, () => {
      return initialState;
    });
  }
})

export const { resetSate, purgeState } = noteBooksSlice.actions;

export default noteBooksSlice.reducer;