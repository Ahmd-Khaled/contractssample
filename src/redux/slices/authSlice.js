import { createSlice } from "@reduxjs/toolkit";
import { addPosition, getNotAdminUsers, logIn, logOut } from "../thunkActions/authActions";


const initialState = {
  loginRes: [],
  logOutRes: [],
  addPositionRes: [],
  getNotAdminUsersRes: [],
  isLoading: false,
  error: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(logIn.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.loginRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Logout
    builder.addCase(logOut.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.logOutRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(logOut.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Add Position
    builder.addCase(addPosition.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addPosition.fulfilled, (state, action) => {
      state.addPositionRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(addPosition.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Get No Admin Users
    builder.addCase(getNotAdminUsers.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getNotAdminUsers.fulfilled, (state, action) => {
      state.getNotAdminUsersRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getNotAdminUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = authSlice.actions;

export default authSlice.reducer;