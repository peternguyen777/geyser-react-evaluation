import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface uiState {
  sideBarDesktopOpen: boolean;
  menuOpen: boolean;
}

const initialState: uiState = {
  sideBarDesktopOpen: false,
  menuOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSideBarDesktop: (state) => {
      state.sideBarDesktopOpen = !state.sideBarDesktopOpen;
    },
    toggleSideBarDesktopClose: (state) => {
      state.sideBarDesktopOpen = false;
    },
    toggleSideBarDesktopOpen: (state) => {
      state.sideBarDesktopOpen = true;
    },
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    toggleMenuClose: (state) => {
      state.menuOpen = false;
    },
    toggleMenuOpen: (state) => {
      state.menuOpen = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleSideBarDesktopClose,
  toggleSideBarDesktopOpen,
  toggleSideBarDesktop,
  toggleMenu,
  toggleMenuClose,
  toggleMenuOpen,
} = uiSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSideBarDesktopOpen = (state: RootState) =>
  state.ui.sideBarDesktopOpen;
export const selectMenuOpen = (state: RootState) => state.ui.menuOpen;

export default uiSlice.reducer;
