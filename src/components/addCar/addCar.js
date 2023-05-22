import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCar } from '../../Redux/addCar/addSlice';

const AddCar = () => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [description, setDescription] = useState('');
  const [available, setAvailable] = useState();
  const [price, setPrice] = useState(0);

  const createNewCar = () => ({
    name,
    color,
    description,
    available,
    price,
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const car = createNewCar(name, color, description, available, price);

    dispatch(addCar(car));
    setName('');
    setColor('');
    setDescription('');
    setAvailable();
    setPrice(0);
  };

  const handleToggle = () => {
    setAvailable(!available);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type="text"
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Color"
          type="text"
          name="Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />
        <input
          placeholder="Description"
          type="text"
          name="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label htmlFor="toggleSwitch">Available</label>
        <input type="checkbox" checked={available} onChange={handleToggle} />
        <input
          placeholder="Price"
          type="number"
          step={2}
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          required
        />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default addCar;
