import { createSlice } from "@reduxjs/toolkit";

export const receiptSlice = createSlice({
  name: "receipt",
  initialState: {
    items: [],
    money: 100000000000,
  },
  reducers: {
    buy: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index > -1) {
        state.items[index].piece += 1;
      } else {
        state.items.push(action.payload);
      }
      state.money -= action.payload.price;
    },
    sell: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index > -1 && state.items[index].piece > 1) {
        state.items[index].piece -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
      state.money += action.payload.price;
    },
    inputBuy: (state, action) => {
      if (action.payload.piece !== 0) {
        state.items.push(action.payload);
        state.money -= action.payload.price * action.payload.piece;
      }
    },
    inputBuyReset: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index > -1) {
        state.money += state.items[index].price * state.items[index].piece;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
      if (action.payload.piece === 0) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
  },
});

export const { buy, sell, inputBuy, inputBuyReset } = receiptSlice.actions;
export default receiptSlice.reducer;
