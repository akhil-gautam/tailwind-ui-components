import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ErrOut, ThemeContext } from '../Util';

//TODO: Add tests
// TODO: Add support for startIcon and endIcon

const Button = React.forwardRef((props, ref) => {
  const {
    type = 'neutral',
    variant = 'default',
    LeftIcon,
    RightIcon,
    className = '',
    hoverAnimation = false,
    disabled = false,
    children,
    ...rest
  } = props;
  // if (!children) {
  //   ErrOut(
  //     'Returned null. A child element is required, it serves as the label of the button!'
  //   );
  //   return null;
  // }

  const {
    theme: { button },
  } = useContext(ThemeContext);

  const classes = classNames(
    button[variant].base,
    button[variant][type],
    className
  );

  return (
    <button className={classes} ref={ref} {...rest}>
      {LeftIcon && (
        <span className='h-6 w-6'>
          <LeftIcon />
        </span>
      )}
      <span>{children}</span>
      {RightIcon && (
        <span className='h-6 w-6'>
          <RightIcon />
        </span>
      )}
    </button>
  );
});

Button.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  bg: PropTypes.string,
  rounded: PropTypes.string,
  shadow: PropTypes.string,
  color: PropTypes.string,
  hoverAnimation: PropTypes.string,
  disabled: PropTypes.string,
};

export default Button;
