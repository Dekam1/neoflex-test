import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: "loading",
};

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const { data } = await axios("https://7a6d59b7b16a5ada.mokky.dev/items");
  return data;
});

export const itemSlice = createSlice({
  name: "items",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state) => {
        state.status = "failed";
        state.items = [];
      });
  },
});

export default itemSlice.reducer;
