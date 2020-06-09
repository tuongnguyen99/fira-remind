import React from "react";
import { Link } from "react-router-dom";
import className from "classname";

const InfoCardGroup = ({ items, activeItem, onItemChange }) => {
  return (
    <div className="card">
      <div className="card-header">Thông tin</div>
      <div className="card-body">
        <div className="row d-flex justify-content-around">
          {items.map((item) => {
            return (
              <div key={item.id} className="col-xs-1-12 flex-fill">
                <Link
                  className={className("card px-4 m-4", {
                    "bg-primary text-light": activeItem.id === item.id,
                  })}
                  to="/admin/info/teachers"
                  onClick={() => {
                    onItemChange(item);
                  }}
                >
                  <div className="card-body">
                    <h3 className="card-title">
                      <i
                        className={className(
                          "fas mr-2",
                          // { [`fas-${item.icon}`]: item.icon })
                          { [`fa-${item.icon}`]: item.icon }
                        )}
                      ></i>
                      199
                    </h3>
                    <p className="card-text">{item.value}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfoCardGroup;
