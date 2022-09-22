import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface paymentState {
  isFunded: boolean;
  isPaid: boolean;
}

const initialState: paymentState = {
  isPaid: false,
  isFunded: false,
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setIsPaid: (state) => {
      state.isPaid = !state.isPaid;
    },
    setIsFunded: (state) => {
      state.isFunded = !state.isFunded;
    },
  },
});

export const { setIsFunded, setIsPaid } = paymentSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectIsPaid = (state: RootState) => state.payment.isPaid;
export const selectIsFunded = (state: RootState) => state.payment.isFunded;

export default paymentSlice.reducer;
