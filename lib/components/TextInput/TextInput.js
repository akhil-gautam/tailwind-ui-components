import React, { useContext, useState } from 'react';
import classNames from 'classnames';

import { ErrOut, ThemeContext } from '../Util';

const TextInput = React.forwardRef((props, ref) => {
  const {
    type = 'text',
    disabled = false,
    bordered = true,
    valid,
    error = '',
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
        active,
      },
    },
  } = useContext(ThemeContext);

  const hasError = () => {
    return (valid !== undefined && !valid) || error.length > 0;
  };

  const classes = classNames(
    base,
    disabled && disabledStyle,
    bordered && borderedStyle,
    valid === undefined && hasError()
      ? active
      : hasError()
      ? invalidStyle
      : validStyle,
    className
  );

  return (
    <input
      className={classes}
      type={type}
      ref={ref}
      disabled={disabled}
      {...rest}
    />
  );
});

export default TextInput;
