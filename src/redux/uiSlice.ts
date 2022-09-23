import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface uiState {
  sideBarDesktopOpen: boolean;
}

const initialState: uiState = {
  sideBarDesktopOpen: false,
};

//REDUCERS TO TRIGGER OPENING/CLOSING OF DESKTOP SIDEBAR
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
  },
});

export const {
  toggleSideBarDesktopClose,
  toggleSideBarDesktopOpen,
  toggleSideBarDesktop,
} = uiSlice.actions;

export const selectSideBarDesktopOpen = (state: RootState) =>
  state.ui.sideBarDesktopOpen;

export default uiSlice.reducer;
