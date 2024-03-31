import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./slices/itemSlices.js";
import basketSlice from "./slices/basketSlices.js";

export const store = configureStore({
  reducer: {
    items: itemSlice,
    basketItems: basketSlice,
  },
});
