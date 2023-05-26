import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { createCar } from '../redux/CarSlice';
const Addcar = () => {
  const [inputData, setInputData] = useState({
    name: '',
    image: '',
    color: '',
    description: '',
    price: 0,
  });
  const dispatch = useDispatch();
  const {
    name, image, color, description, price,
  } = inputData;
  const inputEventHandler = (event) => {
    const { name, value } = event.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };