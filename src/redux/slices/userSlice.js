import { createSlice } from "@reduxjs/toolkit";
import { getUserDues, getUserOperations, getUserSettlements, getUserWithdrowals } from "../thunkActions/userActions";


const initialState = {
  clickedUserOperation: "Expenses",
  getUserOperationsRes: [],
  getUserSettlementsRes: [],
  getUserWithdrowalsRes: [],
  getUserDuesRes: [],
  isLoading: false,
  error: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetSate: () => initialState,
    clickOperation: (state, action) => {
      state.clickedUserOperation = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Get User Operations
    builder.addCase(getUserOperations.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getUserOperations.fulfilled, (state, action) => {
      state.getUserOperationsRes = action.payload;
      state.isLoading = false;
      state.error = null;
      console.log("___@__@@___@@@@_____state.clickedUserOperation:  ", state.clickedUserOperation)
    });
    builder.addCase(getUserOperations.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Get User Settlements------------------------------------------------------------
    builder.addCase(getUserSettlements.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getUserSettlements.fulfilled, (state, action) => {
      state.getUserSettlementsRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getUserSettlements.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Get User Withdrowals------------------------------------------------------------
    builder.addCase(getUserWithdrowals.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getUserWithdrowals.fulfilled, (state, action) => {
      state.getUserWithdrowalsRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getUserWithdrowals.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Get User Dues------------------------------------------------------------
    builder.addCase(getUserDues.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getUserDues.fulfilled, (state, action) => {
      state.getUserDuesRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getUserDues.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate, clickOperation } = userSlice.actions;

export default userSlice.reducer;