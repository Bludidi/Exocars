import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Url from '../api/Urlapi';

const initialState = {
  data: {},
};

const RESERVECAR = 'reserved/reserveCar';
const RESERVECARS = 'reserved/reservedCars';

const token = localStorage.getItem('token');

export const reserveCar = createAsyncThunk(
  RESERVECAR,
  async (car, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(`${Url}/api/v1/reservations`, car, config);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const reservedCars = createAsyncThunk(
  RESERVECARS,
  async ({ rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(`${Url}/api/v1/reservations`, config);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const reserveCarReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${RESERVECAR}/fulfilled`:
      console.log('state', state);
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export const reservedCarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${RESERVECARS}/fulfilled`:
      console.log('state', state);
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

// const reservedCarSlice = createSlice({
//   name: 'reserved',
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [reserveCar.pending]: (state) => ({
//       ...state,
//       loading: true,
//     }),
//     [reserveCar.fulfilled]: (state, action) => ({
//       ...state,
//       loading: false,
//       message: action.payload,
//       error: null,
//     }),
//     [reserveCar.rejected]: (state, action) => ({
//       ...state,
//       loading: false,
//       error: action.payload.error,
//     }),
//     [reservedCars.pending]: (state) => ({
//       ...state,
//       loading: true,
//     }),

//     [reservedCars.fulfilled]: (state, action) => ({
//       ...state,
//       loading: false,
//       data: action.payload,
//       error: null,
//     }),
//     [reservedCars.rejected]: (state, action) => ({
//       ...state,
//       loading: false,
//       error: action.payload.error,
//     }),
//   },
// });

// export default reservedCarSlice.reducer;
