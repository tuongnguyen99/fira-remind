import React from "react";

const Dropdown = ({ label, items }) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-light dropdown-toggle"
        type="button"
        id="triggerId"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {label}
      </button>
      <div
        className="dropdown-menu"
        aria-labelledby="triggerId"
        x-placement="bottom-start"
        style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 38px, 0px);"
      >
        {items.map((item) => {
          return (
            <a className="dropdown-item" key="item" href="#">
              <i className={`fas fa-${item.icon} mr-2`}></i>
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
