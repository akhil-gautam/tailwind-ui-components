import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ErrOut, ThemeContext } from '../Util';

const Pill = React.forwardRef((props, ref) => {
  const {
    children,
    type,
    iconBefore,
    iconAfter,
    className = '',
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
  } = useContext(ThemeContext);

  const classes = classNames(pill.base, pill[type], className);

  return (
    <button className={classes} ref={ref} {...rest}>
      {iconBefore}
      <span>{children}</span>
      {iconAfter}
    </button>
  );
});

Pill.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  iconAfter: PropTypes.node,
  iconBefore: PropTypes.node,
  className: PropTypes.string,
};

export default Pill;
