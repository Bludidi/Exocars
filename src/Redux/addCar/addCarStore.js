import { configureStore } from "@reduxjs/toolkit";
import { carSliceReducer } from "./addSlice";

const store = configureStore({
  reducer: { car: carSliceReducer }
});

export default store;