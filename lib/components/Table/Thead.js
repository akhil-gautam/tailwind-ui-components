import React, { useContext } from 'react';

import { ErrOut, ThemeContext } from '../Util';

const Thead = React.forwardRef((props, ref) => {
  const { children, ...other } = props;
  const {
    theme: {
      thead: { base },
    },
  } = useContext(ThemeContext);

  return (
    <thead className={base} ref={ref} {...other}>
      {children}
    </thead>
  );
});

export default Thead;