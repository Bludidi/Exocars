/* eslint-disable */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCar } from '../redux/SingleCarSlice';
import CarCard from '../components/CarCard';
import Load from '../components/Load';

const Car = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector((state) => state.singleCar.car);
  const loading = useSelector((state) => state.singleCar.loading);
  useEffect(() => {
    dispatch(getCar(id));
  }, [dispatch, id]);
  if (loading) {
    return (
      <div className="flex justify-center min-h-[60vh] items-center">
        <Load />
      </div>
    );
  }
  return (
    <div className="flex  justify-center items-center">
      <div className="w-full mt-4">
        <h1 className="text-center text-base md:text-2xl font-bold">
          car Details
        </h1>
        <CarCard
          id={car.id}
          name={car.name}
          image={car.image}
          color={car.color}
          description={car.description}
          price={car.price}
        />
      </div>
    </div>
  );
};
export default Car;
