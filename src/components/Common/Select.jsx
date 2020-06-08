import React from 'react';

const Select = ({ name, label, items, labelIcon, ...res }) => {
  return (
    <div class='form-group' {...res}>
      <label for={name}>
        <i class={`fas ${labelIcon} mr-2`}></i>
        {label}
      </label>
      <select class='form-control' name={name} id={name}>
        {items.map((item) => {
          return (
            <option key={item.id} value={item.value}>
              {item.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
