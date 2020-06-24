import React from 'react';

const Checkbox = ({ name, onChange, ...rest }) => {
  return (
    <div className='form-check form-check-inline'>
      <label className='form-check-label'>
        <input
          className='form-check-input'
          type='checkbox'
          name={name}
          {...rest}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Checkbox;
