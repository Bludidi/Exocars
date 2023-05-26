import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Car = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector((state) => state.singleCar.car);
  const loading = useSelector((state) => state.singleCar.loading);