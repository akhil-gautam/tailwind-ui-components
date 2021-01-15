import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ErrOut, ThemeContext } from '../Util';

const Link = React.forwardRef((props, ref) => {
  const { children, href, variant = 'default', className, ...rest } = props;

  if (!children) {
    ErrOut(
      'Returned null. A child element is required, it serves as the target of the link!'
    );
    return null;
  }
  if (!href) {
    ErrOut(
      'Returned null. The href props is required, it serves as the destination of the link!'
    );
    return null;
  }

  const {
    theme: { link },
  } = useContext(ThemeContext);

  const classes = classNames(link.base, link[variant], className);

  return (
    <a ref={ref} href={href} className={classes} {...rest}>
      {children}
    </a>
  );
});

Link.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string.isRequired
};

export default Link;
