import React, { useContext } from 'react';
import classNames from 'classnames';

import { ThemeContext } from '../Util';

const Select = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  const {
    theme: { select },
  } = useContext(ThemeContext);
  const classes = classNames(select.base, className);

  return <select ref={ref} className={classes} {...rest}></select>;
});

export default Select;
