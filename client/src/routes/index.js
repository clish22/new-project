// import packages for routing
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import components
import Home from '../pages/Home';
import SeasonLadder from '../pages/SeasonLadder';

// render components using Routes and routes
function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/season-ladder" element={<SeasonLadder />} />
    </Routes>
  );
}

// export the function
export default AppRoutes;
