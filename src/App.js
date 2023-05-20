import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import DisplayCars from './components/home/homePage';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<DisplayCars />} />
    </Routes>
  </div>
);

export default App;
