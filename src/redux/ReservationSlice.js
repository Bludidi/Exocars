import { createAsyncThunk } from '@reduxjs/toolkit';
import Url from '../api/Urlapi';

const RESERVECARS = 'reserved/reservedCars';
export const reservedCars = createAsyncThunk(
  RESERVECARS,
  async (id, { dispatch }) => {
    const data = await fetch(`${Url}/api/v1/users/${id}/reservations`);
    const res = await data.json();
    dispatch({
      type: RESERVECARS,
      payload: res,
    });
  },
);

export const reservedCarsReducer = (state = [], action = {}) => {
  switch (action.type) {
    case `${RESERVECARS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};
