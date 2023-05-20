import { configureStore } from '@reduxjs/toolkit';
import carsSliceReducer from './carSlice';

const store = configureStore({
  reducer: {
    cars: carsSliceReducer,
  },
});

export default store;
