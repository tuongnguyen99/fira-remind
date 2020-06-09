import React from "react";
import className from "classname";

const Table = ({ tableType, theadType, columns, data }) => {
  return (
    <table
      className={className("table", { ["table-" + tableType]: tableType })}
    >
      <thead className={className({ ["thead-" + theadType]: theadType })}>
        <tr>
          {columns.map((col) => {
            return <th>{col.title}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <tr>
              {columns.map((col) => {
                return <td>{row[col.name]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
