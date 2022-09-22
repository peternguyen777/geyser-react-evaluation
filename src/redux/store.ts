import { configureStore } from "@reduxjs/toolkit";
import fundingReducer from "./fundingSlice";
import uiReducer from "./uiSlice";
import userReducer from "./userSlice";
import paymentReducer from "./paymentSlice";

export const store = configureStore({
  reducer: {
    funding: fundingReducer,
    ui: uiReducer,
    user: userReducer,
    payment: paymentReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
