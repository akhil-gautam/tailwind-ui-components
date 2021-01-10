import React, { useContext } from 'react';
import classNames from 'classnames';

import { ThemeContext } from '../Util';

const Label = React.forwardRef((props, ref) => {
  const { children, variant = 'default', className, ...rest } = props;

  const {
    theme: { label },
  } = useContext(ThemeContext);

  const classes = classNames(label.base, label[variant], className);

  return (
    <label ref={ref} className={classes} {...rest}>
      {children}
    </label>
  );
});

export default Label;
