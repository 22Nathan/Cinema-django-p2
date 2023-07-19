// Import des modules nécessaires
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import des composants pour chaque page
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
