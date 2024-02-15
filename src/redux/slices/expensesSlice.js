import { createSlice } from "@reduxjs/toolkit";
import { addChildExpenseType, getAllExpensesTypes, getExpensesTypes } from "../thunkActions/expensesActions";

const initialState = {
  getAllExpensesTypesRes: [],
  getExpensesTypesRes: [],
  addChildExpenseTypeRes: [],
  isLoading: false,
  error: null,
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    resetSate: () => initialState,
  },
  extraReducers: (builder) => {
    // Get All Expenses Types
    builder.addCase(getAllExpensesTypes.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllExpensesTypes.fulfilled, (state, action) => {
      state.getAllExpensesTypesRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getAllExpensesTypes.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Get Expenses Types
    builder.addCase(getExpensesTypes.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getExpensesTypes.fulfilled, (state, action) => {
      state.getExpensesTypesRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getExpensesTypes.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Add Child Expense Type
    builder.addCase(addChildExpenseType.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addChildExpenseType.fulfilled, (state, action) => {
      state.addChildExpenseTypeRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(addChildExpenseType.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { resetSate } = expensesSlice.actions;

export default expensesSlice.reducer;
