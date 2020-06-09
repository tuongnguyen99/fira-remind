import React from "react";

const CardHeader = ({ title, children }) => {
  return (
    <div className="card-header">
      <h5 className="d-inline">{title}</h5>
      {children}
    </div>
  );
};

export default CardHeader;
