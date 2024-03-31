import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const fetchBasketItems = createAsyncThunk(
  "items/fetchBasketItems",
  async () => {
    const { data } = await axios("https://7a6d59b7b16a5ada.mokky.dev/basket");
    return data;
  }
);

export const basketSlice = createSlice({
  name: "basketItems",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    deleteItem(state, action) {
      state.items = state.items.filter((item) => item.curId !== action.payload);
    },
    increment(state, action) {
      state.items.forEach((item) => {
        if (item.curId === action.payload) {
          item.count++;
        }
        return item;
      });
    },
    decrement(state, action) {
      state.items.forEach((item) => {
        if (item.curId === action.payload) {
          item.count--;
        }
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBasketItems.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchBasketItems.rejected, (state) => {
        state.items = [];
      });
  },
});

export const { addItem, deleteItem, increment, decrement } =
  basketSlice.actions;
export default basketSlice.reducer;
