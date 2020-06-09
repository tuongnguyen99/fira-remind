import React from "react";
import { Link } from "react-router-dom";
import className from "classname";

const ListGroup = ({ items, selectedItem, onChange }) => {
  return (
    <div className="list-group">
      {items.map((item) => {
        return (
          <Link
            key={item.id}
            to={item.href}
            className={`list-group-item list-group-item-action ${
              selectedItem.id === item.id ? "active text-light" : ""
            }`}
            onClick={() => {
              onChange(item);
            }}
          >
            <i
              className={className(
                "fas mr-2",
                // { [`fas-${item.icon}`]: item.icon })
                { [`fa-${item.icon}`]: item.icon }
              )}
            ></i>
            {item.value}
          </Link>
        );
      })}
    </div>
  );
};

export default ListGroup;
