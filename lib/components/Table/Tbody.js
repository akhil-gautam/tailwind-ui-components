import React, { useContext } from 'react';

import { ErrOut, ThemeContext } from '../Util';

const Tbody = React.forwardRef((props, ref) => {
  const { children, ...other } = props;
  const {
    theme: {
      tbody: { base },
    },
  } = useContext(ThemeContext);

  return (
    <tbody className={base} ref={ref} {...other}>
      {children}
    </tbody>
  );
});

export default Tbody;
