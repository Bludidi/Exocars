import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars, deleteCar } from '../redux/CarSlice';

const DeleteCar = () => {
  const dispatch = useDispatch();
  const [cars, setCars] = useState([]);
  const load = useSelector((state) => state.car);
  useEffect(() => {
    dispatch(getCars()).then((response) => {
      setCars(response.payload);
    });
  }, [dispatch]);
}