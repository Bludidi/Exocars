import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCar } from '../../Redux/addCar/addSlice';

const AddCar = () => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [description, setDescription] = useState('');
  const [available, setAvailable] = useState();
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);

  const createNewCar = () => ({
    name,
    color,
    description,
    available,
    price,
    image,
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const car = createNewCar();

    dispatch(addCar(car));
    setName('');
    setColor('');
    setDescription('');
    setAvailable();
    setPrice(0);
    setImage(null);
  };

  const handleToggle = () => {
    setAvailable(!available);
  };

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };
  return (
    <div className="container">
      <div className="heading"><h2>Add your car below</h2></div>
      <form className="add-car-form" onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type="text"
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
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
        <textarea
          placeholder="Description"
          name="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="availableInput">Available</label>
        <input
          id="available"
          type="checkbox"
          checked={available}
          onChange={handleToggle}
        />
        <input
          id="price"
          placeholder="Price"
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          required
        />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default AddCar;
