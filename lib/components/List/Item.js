import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ThemeContext } from '../Util';

const Item = React.forwardRef((props, ref) => {
  const { children, Component = 'li', className, ...rest } = props;

  const {
    theme: {
      list: {
        item: { base },
      },
    },
  } = useContext(ThemeContext);

  const classes = classNames(className, base, {
    'cursor-pointer': rest.onClick,
  });

  return (
    <Component ref={ref} className={classes} {...rest}>
      {children}
    </Component>
  );
});

Item.propTypes = {
  children: PropTypes.node,
  Component: PropTypes.node,
  className: PropTypes.string,
};

export default Item;
