import { configureStore } from "@reduxjs/toolkit";
import receiptSlice from "./receiptSlice";

export const store = configureStore({
  reducer: {
    receipt: receiptSlice,
  },
});
