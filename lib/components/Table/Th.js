import React, { useContext } from 'react';

import { ErrOut, ThemeContext } from '../Util';

const Th = React.forwardRef((props, ref) => {
  const { children, ...other } = props;
  const {
    theme: {
      th: { base },
    },
  } = useContext(ThemeContext);

  return (
    <th className={base} ref={ref} {...other}>
      {children}
    </th>
  );
});

export default Th;
