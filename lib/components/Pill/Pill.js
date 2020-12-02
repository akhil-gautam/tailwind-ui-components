import React from 'react';
import classNames from 'classnames';

import { ErrOut, ThemeContext } from '../Util';

const Pill = React.forwardRef((props, ref) => {
  const {
    children,
    type,
    iconBefore = null,
    iconAfter = null,
    klass = '',
    ...rest
  } = props;

  if (!children) {
    ErrOut(
      'Unable to find <children>. Make sure you have passed <children> because they are required!'
    );
    return null;
  }

  const {
    theme: { pill },
  } = React.useContext(ThemeContext);

  const classes = classNames(pill.base, pill[type], klass);

  return (
    <button className={classes} ref={ref} {...rest}>
      {iconBefore}
      <span>{children}</span>
      {iconAfter}
    </button>
  );
});

export default Pill;
