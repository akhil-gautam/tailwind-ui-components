import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ThemeContext } from '../Util';

const ToggleSwitch = React.forwardRef((props, ref) => {
  const { variant = 'primary', checked = false, disabled = false, className, ...rest } = props;

  const {
    theme: { toggleSwitch },
  } = useContext(ThemeContext);

  const rectClasses = classNames(disabled ? toggleSwitch.disabled.rect : toggleSwitch.base.rect , className);
  const circleClasses = classNames(disabled ? toggleSwitch.disabled.circle : toggleSwitch.base.circle, className);
 
  const [toggled, setToggled] = useState(checked);
  
  const handleClick = () => {
    if(!disabled) { 
      setToggled(!toggled);
    }
  }



  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="26" onClick={handleClick} ref={ref} {...rest} >
      <rect 
        width="42" 
        height="26" 
        rx="13" 
        className={`${rectClasses} ${ !disabled ? toggled && toggleSwitch[variant] : '' } `} 
      />
      <circle 
        cx={!toggled ? 13 : 30 } 
        cy="13" 
        r="10" className={circleClasses}
      />
    </svg>

  );
});

ToggleSwitch.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
};


export default ToggleSwitch;
