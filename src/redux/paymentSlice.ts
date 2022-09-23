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

//isFunded triggers Confirm Component.
//isPaid triggers Success Component.
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

export const selectIsPaid = (state: RootState) => state.payment.isPaid;
export const selectIsFunded = (state: RootState) => state.payment.isFunded;

export default paymentSlice.reducer;
