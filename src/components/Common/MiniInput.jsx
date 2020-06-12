import React from 'react';

const MiniInput = ({ name, type, onChange, ...rest }) => {
  return (
    <div class='form-group'>
      <input
        type={type}
        class='form-control'
        name={name}
        aria-describedby='helpId'
        style={{ height: 40, width: 60 }}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default MiniInput;
