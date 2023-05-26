import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReservationCard from '../components/ReservationCard';
import { reservedCars } from '../redux/ReservationSlice';
// import { getCar } from '../redux/SingleCarSlice';

const Reservation = () => {
  const dispatch = useDispatch();
  const reservationData = useSelector((state) => state.reservedCar);
  const user_id = localStorage.getItem('userId');

  useEffect(() => {
    dispatch(reservedCars(user_id));
  }, [dispatch, user_id]);
  return (
    <div>
      <div className=" scale-90">
        <h1 className="md:text-3xl text-base font-bold mb-4 text-green-600">My Reservation</h1>
        <div className="flex  gap-3 overflow-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 my-scroll">
          {reservationData.data.map(({
            id, name, image, price,
          }) => (
            <ReservationCard
              key={id}
              name={name}
              image={image}
              price={price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reservation;
