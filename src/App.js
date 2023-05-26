import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomeLayout from './components/Home';
import Homepage from './pages/HomePage';
import AddCar from './pages/AddCar';
import ReserveForm from './pages/FormReserve';
import Reservation from './pages/Reservation';
import DeleteCar from './pages/DeleteCar';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Routing from './components/Routing';
import NotFound from './pages/NotFound';
import Car from './pages/Car';
import './index.css';

function App() {
  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path=""
          element={(
            <Routing>
              <HomeLayout />
            </Routing>
          )}
        >
          <Route index element={<Homepage />} />
          <Route path="/add-car" element={<AddCar />} />
          <Route path="/cars/:id" element={<Car />} />
          <Route path="/reserve-car" element={<ReserveForm />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/delete-car" element={<DeleteCar />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
