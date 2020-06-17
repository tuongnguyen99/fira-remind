import React from 'react';
import className from 'classname';

const TableCustom = ({ tableType, theadType, columns, data }) => {
  return (
    <table
      className={className('table', { ['table-' + tableType]: tableType })}
    >
      <thead className={className({ ['thead-' + theadType]: theadType })}>
        <tr>
          {columns.map((col, index) => {
            return <th key={index}>{col.title}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <tr key={row.id}>
              {columns.map((col) => {
                return typeof row[col.name] === 'function' ? (
                  <td key={col.id}>{row[col.name]()}</td>
                ) : (
                  <td key={col.id}>{row[col.name]}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableCustom;
