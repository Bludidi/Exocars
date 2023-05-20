import { createSlice } from '@reduxjs/toolkit';
import fecthCars from './fetchCars';

const initialState = {
  cars: [],
  status: '',
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(
      fecthCars.pending,
      (state) => {
        state.status = 'loading';
      },
      builder.addCase(fecthCars.fulfilled, (state, action) => {
        state.status = 'ok';
        state.cars = action.payload;
      }),
    );
  },
});

export default carsSlice.reducer;
