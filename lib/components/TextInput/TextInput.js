import React, { useContext, useState } from 'react';
import classNames from 'classnames';

import { ThemeContext } from '../Util';
import { Label, HelperText } from '../index';

const TextInput = React.forwardRef((props, ref) => {
  const {
    type = 'text',
    disabled = false,
    bordered = true,
    labelVariant,
    labelChild,
    helperType,
    helperChild,
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
    (valid ? validStyle : undefined) ??
      (invalid ? invalidStyle : undefined) ??
      activeStyle,
    className
  );

  if (labelChild && helperChild) {
    return (
      <Label variant={labelVariant}>
        <span>{labelChild}</span>
        <input
          className={classes}
          type={type}
          ref={ref}
          disabled={disabled}
          {...rest}
        />
        <HelperText type={helperType}>{helperChild}</HelperText>
      </Label>
    );
  }

  if (labelChild) {
    return (
      <Label variant={labelVariant}>
        <span>{labelChild}</span>
        <input
          className={classes}
          type={type}
          ref={ref}
          disabled={disabled}
          {...rest}
        />
      </Label>
    );
  }

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
