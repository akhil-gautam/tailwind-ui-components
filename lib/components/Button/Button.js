import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ErrOut, ThemeContext } from '../Util';

//TODO: Add tests
// TODO: Add support for startIcon and endIcon

const Button = React.forwardRef((props, ref) => {
  const {
    label = 'Button',
    type = 'primary',
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

  const classes = classNames(button.base, button[type], className);

  return (
    <button className={classes} ref={ref} {...rest}>
      <span className="flex justify-center items-center">
        {label}
        {children}
      </span>
    </button>
  );
});

Button.proptypes = {
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
