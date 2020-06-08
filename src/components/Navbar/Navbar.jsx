import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand navbar-dark bg-dark'>
      <div className='nav navbar-nav'>
        <a className='nav-item nav-link active' href='/'>
          Home <span className='sr-only'>(current)</span>
        </a>
        <a className='nav-item nav-link' href='/'>
          Dashboard
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
