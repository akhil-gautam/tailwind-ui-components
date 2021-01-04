import React, { useContext } from 'react';

import { ErrOut, ThemeContext } from '../Util';

const Tr = React.forwardRef((props, ref) => {
  const { children, type = 'odd', ...other } = props;
  const {
    theme: {
      tr: { base },
    },
  } = useContext(ThemeContext);

  return (
    <tr className={base[type]} ref={ref} {...other}>
      {children}
    </tr>
  );
});

export default Tr;
