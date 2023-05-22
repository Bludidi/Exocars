import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import DisplayCars from './components/home/homePage';
import AddCar from './components/addCar/addCar';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<DisplayCars />} />
      <Route path="/cars/create" element={<AddCar />} />
    </Routes>
  </div>
);

export default App;
