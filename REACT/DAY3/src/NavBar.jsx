import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/add">Add/Edit Code</Link>
    </nav>
  );
};

export default NavBar;
