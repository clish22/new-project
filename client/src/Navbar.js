import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    //load component for the ladder  page  - 2023 season ladder page
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/season-ladder">2023 Season Ladder</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
