import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface FundingState {
  satValue: number;
  usdValue: number;
  btcPrice: number;
  comment: string;
  reward: any;
  invoiceQr: string;
}

const initialState: FundingState = {
  satValue: 500,
  usdValue: 0,
  btcPrice: 0,

  comment: "",
  reward: [
    { icon: "🎁", title: "Reward: The Bitcoin Game" },
    { icon: "🏆", title: "With this donation you'll earn a trophy!" },
  ],
  invoiceQr:
    "lntb1u1pwz5w78pp5e8w8cr5c30xzws92v36sk45znhjn098rtc4pea6ertnmvu25ng3sdpywd6hyetyvf5hgueqv3jk6meqd9h8vmmfvdjsxqrrssy29mzkzjfq27u67evzu893heqex737dhcapvcuantkztg6pnk77nrm72y7z0rs47wzc09vcnugk2ve6sr2ewvcrtqnh3yttv847qqvqpvv398",
};

export const fundingSlice = createSlice({
  name: "funding",
  initialState,
  reducers: {
    setSatValue: (state, action: PayloadAction<number>) => {
      state.satValue = action.payload;
    },
    setUsdValue: (state, action: PayloadAction<number>) => {
      state.usdValue = action.payload;
    },
    setBtcPrice: (state, action: PayloadAction<number>) => {
      state.btcPrice = action.payload;
    },
    setComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSatValue, setUsdValue, setBtcPrice, setComment } =
  fundingSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSatValue = (state: RootState) => state.funding.satValue;
export const selectUsdValue = (state: RootState) => state.funding.usdValue;
export const selectBtcPrice = (state: RootState) => state.funding.btcPrice;
export const selectComment = (state: RootState) => state.funding.comment;
export const selectInvoiceQr = (state: RootState) => state.funding.invoiceQr;
export const selectReward = (state: RootState) => state.funding.reward;

export default fundingSlice.reducer;
