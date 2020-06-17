import React from 'react';

const Checkbox = ({ name, onChange, ...rest }) => {
  return (
    <div class='form-check form-check-inline'>
      <label class='form-check-label'>
        <input
          class='form-check-input'
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
