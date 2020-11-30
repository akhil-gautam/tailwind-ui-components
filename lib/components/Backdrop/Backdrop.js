import React from 'react';

const Backdrop = ({ bg = 'bg-black', ...rest }) => {
  return (
    <div
      className={`absolute z-10 top-0 left-0 h-full w-full
     ${bg} bg-opacity-40`}
      {...rest}
    ></div>
  );
};

export default Backdrop;
