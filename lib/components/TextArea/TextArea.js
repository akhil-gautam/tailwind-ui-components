import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ThemeContext } from '../Util';

const TextArea = React.forwardRef((props, ref) => {
  const {
    children,
    valid,
    invalid,
    disabled,
    bordered = true,
    className,
    ...rest
  } = props;

  const {
    theme: {
      input: {
        base,
        disabled: disabledStyle,
        bordered: borderedStyle,
        invalid: invalidStyle,
        valid: validStyle,
        active: activeStyle,
      },
    },
  } = useContext(ThemeContext);

  const classes = classNames(
    base,
    disabled && disabledStyle,
    bordered && borderedStyle,
    (valid ? validStyle : undefined) ??
      (invalid ? invalidStyle : undefined) ??
      activeStyle,
    className
  );

  return (
    <textarea ref={ref} className={classes} {...rest}>
      {children}
    </textarea>
  );
});

TextArea.propTypes = {
  children: PropTypes.node,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  bordered: PropTypes.bool,
  className: PropTypes.string,
};

export default TextArea;
