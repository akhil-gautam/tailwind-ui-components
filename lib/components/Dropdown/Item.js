import React, { useContext } from 'react';
import classNames from 'classnames';

import { ErrOut, ThemeContext } from '../Util';

const Item = React.forwardRef((props, ref) => {
  const { children, className = '', ...rest } = props;

  if (!children) {
    ErrOut(
      'Unable to find <children>. Make sure you have passed <children> because they are required!'
    );
    return null;
  }

  const {
    theme: {
      dropdown: { item },
    },
  } = useContext(ThemeContext);

  const classes = classNames(item.base, className);

  return (
    <li className={classes} ref={ref}>
      {children}
    </li>
  );
});

export default Item;
