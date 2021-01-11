import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ThemeContext } from '../Util';

const Tbody = React.forwardRef((props, ref) => {
  const { children, className, ...other } = props;
  const {
    theme: {
      tbody: { base },
    },
  } = useContext(ThemeContext);

  return (
    <tbody className={classNames(className, base)} ref={ref} {...other}>
      {children}
    </tbody>
  );
});

Tbody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Tbody;
