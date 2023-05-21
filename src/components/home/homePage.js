import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchCars from '../../Redux/Home/fetchCars';

const DisplayCars = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.cars);
  const status = useSelector((state) => state.cars.status);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'ok' && cars.length === 0) {
    return <p>No cars available</p>;
  }

  return (
    <>
      <h1>List of available cars</h1>
      {status === 'ok' && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Color</th>
              <th>Description</th>
              <th>Available</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id}>
                <td>{car.name}</td>
                <td>{car.color}</td>
                <td>{car.description}</td>
                <td>{car.available ? 'Yes' : 'No'}</td>
                <td>
                  $
                  {parseFloat(car.price).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default DisplayCars;
