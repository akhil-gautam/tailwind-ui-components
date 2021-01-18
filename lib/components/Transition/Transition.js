import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import { ErrOut, ThemeContext } from '../Util';

const Transition = React.forwardRef((props, ref) => {
  const { children, variant = '', ...rest } = props;

  if (!children) {
    ErrOut(
      'Returned null. A child element is required, it is the transitioned component!'
    );
    return null;
  }

  const {
    theme: { transition },
  } = useContext(ThemeContext);


  return (
    <CSSTransition ref={ref} classNames={transition[variant]} {...rest} >
        {children}
    </CSSTransition>
      
  );
});

Transition.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.string
};

export default Transition;
