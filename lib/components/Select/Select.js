import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ThemeContext } from '../Util';

// styling select tag is cumbersome as it styled by OS
// there are a lot of third-party libraries that has beautiful styles
// refer https://react-select.com/

const Select = React.forwardRef((props, ref) => {
  const { className, valid, invalid, ...rest } = props;

  const {
    theme: {
      select: {
        base,
        disabled,
        valid: validStyle,
        invalid: invalidStyle,
        active: activeStyle,
      },
    },
  } = useContext(ThemeContext);

  const classes = classNames(
    base,
    props.disabled && disabled,
    (valid ? validStyle : undefined) ??
      (invalid ? invalidStyle : undefined) ??
      activeStyle,
    className
  );

  return <select ref={ref} className={classes} {...rest}></select>;
});

Select.propTypes = {
  className: PropTypes.string,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
};

export default Select;
