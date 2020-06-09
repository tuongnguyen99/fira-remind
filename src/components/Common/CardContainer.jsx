import React from "react";

const CardContainer = ({ children, ...rest }) => {
  return (
    <div class="card" {...rest}>
      {children}
    </div>
  );
};

export default CardContainer;
