import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({
  name, color, price, image, description,
}) => (
  <div className="flex md:flex-row justify-around flex-col items-center gap-10 w-full drop-shadow-full mx-4 my-4">
    <div className="md:w-full md:h-full sm:h-full sm:w-full lg:h-[300px] lg:w-[300px]">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div className="mb-3 w-full md:w-1/2  flex-col flex gap-3">
      <div>
        <p className="text-green-600 font-bold text-lg capitalize">
          {name}
        </p>
        <p className="text-slate-600 font-medium text-base">
          color:
          {' '}
          {color}
        </p>
        <p className="text-slate-600 font-medium text-base">
          description:
          {' '}
          {description}
        </p>
        <p className="text-green-700 font-bold text-base">
          Price:
          {' '}
          {price}
        </p>
      </div>
      <div className="align-bottom sm:w-full ">
        <Link to="/reserve-car">
          <button
            type="button"
            className="mt-4 bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-md text-lg"
          >
            Reserve
          </button>
        </Link>
      </div>
    </div>
  </div>
);
export default CarCard;
