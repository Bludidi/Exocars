import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const carsURL = 'http://127.0.0.1:3000/cars/index';
const FETCH_CAR_DATA = 'FETCH_CAR_DATA';

const fecthCars = createAsyncThunk(FETCH_CAR_DATA, async () => {
  const response = await axios.get(carsURL);
  return response.data;
});

export default fecthCars;
