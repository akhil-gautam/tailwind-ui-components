import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ThemeContext } from '../Util';

const HelperText = React.forwardRef((props, ref) => {
  const { children, type = 'info', className, ...rest } = props;

  const {
    theme: { helpertext },
  } = useContext(ThemeContext);

  const classes = classNames(helpertext.base, helpertext[type], className);

  return (
    <label ref={ref} className={classes} {...rest}>
      {children}
    </label>
  );
});

HelperText.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default HelperText;
