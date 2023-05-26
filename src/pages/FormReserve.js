import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Url from '../api/Urlapi';
import { getCars } from '../redux/CarSlice';

const ReserveForm = () => {
  const username = window.localStorage.getItem('name');
  const userId = window.localStorage.getItem('userId');

  const cars = useSelector((state) => state.car.data);
  const [date, setDate] = useState('');
  const [car, setCar] = useState([0, '']);
  const [errMsg, setErrMsg] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (date === '') return;
    try {
      await axios.post(`${Url}/api/v1/users/${userId}/reservations`, { user_id: userId, car_id: car, picking_date: date });
      setCar(0);
      setDate('');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else {
        setErrMsg('Registration Failed');
      }
    }
  };

  return (
    <div>
      <h2 className="text-center">Reserve Car</h2>
      <hr className="border-2 w-full mb-3" />
      <p className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">{errMsg}</p>
      <form onSubmit={handleSubmit} className="scale-x-75 ">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Car Name
          </label>
          <select name="car_id" onChange={(e) => setCar(e.target.value)} value={car} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light">
            <option value="1">Select car</option>
            {
          cars.map((val) => (
            <option key={val.id} value={val.id}>{val.name}</option>
          ))
         }
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            readOnly
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Booking Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            // min={newDate}
            onChange={(e) => setDate(e.target.value)}
            value={date}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};
export default ReserveForm;
