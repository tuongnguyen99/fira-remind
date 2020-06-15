import React from "react";

const MiniInput = ({ name, type, dark, onChange, ...rest }) => {
  return (
    <input
      type={type}
      class={`form-control d-inline-block ${dark && "bg-dark text-light"}`}
      name={name}
      aria-describedby="helpId"
      style={
        type === "date" ? { height: 40, width: 260 } : { height: 40, width: 60 }
      }
      onChange={onChange}
      {...rest}
    />
  );
};

export default MiniInput;
