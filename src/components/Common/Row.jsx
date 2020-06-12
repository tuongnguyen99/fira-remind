import React from 'react';
import cn from 'classname';

const Row = ({ children, className }) => {
  return (
    <div className={cn('row', { [className]: className })}>{children}</div>
  );
};

export default Row;
