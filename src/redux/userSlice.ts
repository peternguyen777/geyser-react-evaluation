import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface userState {
  email: string;
  name: string;
  image: string;
}

//USER STATE TAKEN FROM BACKEND.
const initialState: userState = {
  email: "mick@gmail.com",
  name: "Metamick14",
  image: "/assets/metamick.png",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

// export const {} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
