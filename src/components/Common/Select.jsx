import React from 'react';

const Select = ({ name, label, items, labelIcon, onChange, ...res }) => {
  return (
    <div className='form-group' {...res}>
      <label htmlFor={name}>
        <i className={`fas ${labelIcon} mr-2`}></i>
        {label}
      </label>
      <select
        className='form-control'
        name={name}
        id={name}
        onChange={onChange}
      >
        {items.map((item) => {
          return (
            <option key={item.id} value={item.value} data-id={item.id}>
              {item.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
