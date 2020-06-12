import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand navbar-dark bg-dark'>
      <div className='nav navbar-nav'>
        <Link className='nav-item nav-link active' to='/'>
          Home <span className='sr-only'>(current)</span>
        </Link>
        <Link className='nav-item nav-link' to='/'>
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
