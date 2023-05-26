/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Url from '../api/Urlapi';
const initialState = {
  loading: true,
  data: [],
  message: '',
  error: null,
  car: {},
};
const token = localStorage.getItem('token');
export const createCar = createAsyncThunk(
  'Car/createCar',
  async (car, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(`${Url}/api/v1/cars`, car, config);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getCars = createAsyncThunk(
  'car/getCars',
  async (car, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(`${Url}/api/v1/cars`, car, config);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const deleteCar = createAsyncThunk(
  'Car/getCar',
  async (id, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.delete(`${Url}api/v1/cars/${id}`, config);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {},
  extraReducers: {
    [createCar.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [createCar.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      message: action.payload.message,
      error: null,
    }),
    [createCar.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.error,
    }),
    [getCars.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [getCars.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload,
      error: null,
    }),
    [getCars.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.error,
    }),
    [deleteCar.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [deleteCar.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      message: action.payload.message,
      error: null,
    }),
    [deleteCar.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.error,
    }),
  },
});
export default carSlice.reducer;
