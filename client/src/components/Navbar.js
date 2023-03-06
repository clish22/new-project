import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/season-ladder">2023 Season Ladder</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
