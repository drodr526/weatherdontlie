import React from 'react';
import Home from './pages/Home';
import Team from './pages/Team'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams/:teamID" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
