import React, { useContext } from 'react';
import classNames from 'classnames';

import { ThemeContext } from '../Util';

const Th = React.forwardRef((props, ref) => {
  const { children, className, ...other } = props;
  const {
    theme: {
      th: { base },
    },
  } = useContext(ThemeContext);

  return (
    <th className={classNames(base, className)} ref={ref} {...other}>
      {children}
    </th>
  );
});

export default Th;
