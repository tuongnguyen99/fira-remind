import React from 'react';

const SearchBox = ({ name, value, onChange, position = '', onClick }) => {
  return (
    <form className={`form-inline mr-2 ${position}`}>
      <input
        className='form-control mr-sm-2'
        name={name}
        type='text'
        value={value}
        onChange={onChange}
      />
      <button
        className='btn btn-outline-primary my-auto my-sm-0'
        type='submit'
        onClick={onClick}
      >
        Tìm kiếm
      </button>
    </form>
  );
};

export default SearchBox;
