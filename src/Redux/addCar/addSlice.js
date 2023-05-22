import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const POST_CAR_DATA = 'POST_CAR_DATA';

export const addCar = createAsyncThunk(POST_CAR_DATA, async (car) => {
  const { name } = car;
  try {
    await axios.post('', {
      name,
    });
    return car;
  } catch (error) {
    return error.message;
  }
});

export const carSlice = createSlice({
  name: 'car',
  initialState: [],
  extraReducers(builder) {
    builder.addCase(addCar.fulfilled, (state, { payload }) => {
      state.push(payload);
    });
  },
});

export default carSlice.reducer;
