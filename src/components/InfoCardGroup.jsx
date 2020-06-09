import React from "react";
import { Link } from "react-router-dom";
import className from "classname";

const InfoCardGroup = ({ items, activeItem, onItemChange }) => {
  return (
    <div class="card">
      <div class="card-header">Thông tin</div>
      <div class="card-body">
        <div class="row d-flex justify-content-around">
          {items.map((item) => {
            return (
              <div class="col-xs-1-12 flex-fill">
                <Link
                  class={className("card px-4 m-4", {
                    "bg-primary text-light": activeItem.id === item.id,
                  })}
                  to="/admin/info/teachers"
                  onClick={() => {
                    onItemChange(item);
                  }}
                >
                  <div class="card-body">
                    <h3 class="card-title">
                      <i
                        class={className(
                          "fas mr-2",
                          // { [`fas-${item.icon}`]: item.icon })
                          { [`fa-${item.icon}`]: item.icon }
                        )}
                      ></i>
                      199
                    </h3>
                    <p class="card-text">{item.value}</p>
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
