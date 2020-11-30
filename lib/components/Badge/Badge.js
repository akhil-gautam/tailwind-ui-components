import React from 'react';
import { ErrOut } from '../Util';

const Badge = React.forwardRef((props, ref) => {
  const { children, type } = props;
  if (!children) {
    ErrOut(
      'Returned null. Make sure you have passed <children> as they are required!'
    );
    return null;
  }
  return (
    <div
      className="rounded-full px-3 py-px bg-purple-200 text-purple-700"
      ref={ref}
    >
      {children}
    </div>
  );
});

export default Badge;
