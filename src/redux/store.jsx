import { configureStore } from "@reduxjs/toolkit";
import tastyReducer from "./tastySlice";

export const store = configureStore({
  reducer: {
    tasty: tastyReducer,
  },
});
