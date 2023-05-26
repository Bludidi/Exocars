import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../redux/RegistrationSlice';
import loginReducer from '../redux/LoginSlice';
import carReducer from '../redux/CarSlice';
import singleCarReducer from '../redux/SingleCarSlice';
import { reserveCarReducer } from '../redux/ReservationSlice';

export default configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    car: carReducer,
    singleCar: singleCarReducer,
    reservedCar: reserveCarReducer,
  },
});
