import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/CartSlice";
import itemAddedReducer from "./cart/ItemAddedSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add other slices as needed
    itemAdded: itemAddedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
