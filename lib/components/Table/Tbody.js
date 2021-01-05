import React, { useContext } from 'react';
import classNames from 'classnames';

import { ThemeContext } from '../Util';

const Tbody = React.forwardRef((props, ref) => {
  const { children, className, ...other } = props;
  const {
    theme: {
      tbody: { base },
    },
  } = useContext(ThemeContext);

  return (
    <tbody className={classNames(className, base)} ref={ref} {...other}>
      {children}
    </tbody>
  );
});

export default Tbody;
