import React, { useContext } from 'react';
import classNames from 'classnames';

import { ThemeContext } from '../Util';

const Thead = React.forwardRef((props, ref) => {
  const { children, className, ...other } = props;
  const {
    theme: {
      thead: { base },
    },
  } = useContext(ThemeContext);

  return (
    <thead className={classNames(base, className)} ref={ref} {...other}>
      {children}
    </thead>
  );
});

export default Thead;