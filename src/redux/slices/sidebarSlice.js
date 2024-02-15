import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isOpen: true,
  isHidden: false,
  loginRes: [],
  isLoading: false,
  error: null,
}

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isOpen = true
    },
    closeSidebar: (state) => {
      state.isOpen = false
    },
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen
    },
    hideSidebar: (state) => {
      state.isHidden = !state.isHidden
    },
  },
})

export const { openSidebar, closeSidebar, toggleSidebar, hideSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;