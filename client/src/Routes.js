import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import SeasonLadder from './SeasonLadder';

function Routes() {
  return (
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/season-ladder" component={SeasonLadder} />
    </Routes>
  );
}

export default Routes;
