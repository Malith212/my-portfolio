import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Cv from './pages/Cv';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
