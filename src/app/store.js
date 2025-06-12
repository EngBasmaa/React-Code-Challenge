import { configureStore } from "@reduxjs/toolkit";
import skipReducer from "../features/skips/skipSlice";

export const store = configureStore({
  reducer: {
    skips: skipReducer
  }
});
