import React from "react";
import cn from "classname";
import SearchBox from "./SearchBox";

const CardWithHeader = ({ title, children, className }) => {
  return (
    <div className={cn("card", { [className]: className })}>
      <div className="card-header">
        {title}
        <SearchBox />
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default CardWithHeader;
