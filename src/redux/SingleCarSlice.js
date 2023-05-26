import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Url from '../api/Urlapi';

const initialState = {
  loading: true,
  message: '',
  error: null,
  car: {},
};

const token = localStorage.getItem('token');

export const getCar = createAsyncThunk(
  'car/getCar',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${Url}/api/v1/cars/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const singleCarSlice = createSlice({
  name: 'singlecar',
  initialState,
  reducers: {},
  extraReducers: {
    [getCar.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [getCar.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      car: action.payload,
      error: null,
    }),
    [getCar.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.error,
    }),
  },
});

export default singleCarSlice.reducer;
