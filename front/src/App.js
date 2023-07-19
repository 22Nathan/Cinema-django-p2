// Import des modules nécessaires
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import des composants pour chaque page
import Home from './components/Home';
import Login from './components/Login';
import Inscription from './components/Inscription';
import ReservationPage from './components/ReservationPage';
import FilmsPage from './components/FilmsPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/films" element={<FilmsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inscription" element={<Inscription />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
