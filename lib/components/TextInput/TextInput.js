import React, { useContext, useState } from 'react';
import classNames from 'classnames';

import { ErrOut, ThemeContext } from '../Util';

const TextInput = React.forwardRef((props, ref) => {
  const {
    type = 'text',
    disabled = false,
    bordered = true,
    valid,
    invalid,
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
    (valid ? validStyle : undefined) ?? (invalid ? invalidStyle: undefined) ?? activeStyle,
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
