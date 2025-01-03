import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Custom CSS for Navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Dashboard</h1>
      <ul className="nav-links">
        <li>
          <Link to="/admin-dashboard">Admin Dashboard</Link>
        </li>
        <li>
          <Link to="/schedule-calendar">Schedule Calendar</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
