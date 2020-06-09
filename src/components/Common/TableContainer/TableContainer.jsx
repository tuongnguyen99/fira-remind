import React from "react";
import "./TableContainer.css";

const TableContainer = ({ children }) => {
  return <div className="table-responsive table-scroll">{children}</div>;
};

export default TableContainer;
